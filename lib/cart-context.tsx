"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  slug: string;
  name: string;
  priceCents: number;
  stripePriceId: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  totalCents: number;
  totalCount: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "fellfrei_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function addItem(item: Omit<CartItem, "qty">, qty: number = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === item.slug ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...item, qty }];
    });
    setIsOpen(true);
  }

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }

  function setQty(slug: string, qty: number) {
    if (qty <= 0) return removeItem(slug);
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
    );
  }

  function clear() {
    setItems([]);
  }

  const totalCents = useMemo(
    () => items.reduce((sum, i) => sum + i.priceCents * i.qty, 0),
    [items]
  );
  const totalCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        setQty,
        clear,
        totalCents,
        totalCount,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
