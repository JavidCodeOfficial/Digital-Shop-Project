import toast from "react-hot-toast";
import { create } from "zustand";

interface CartItem {
  id: number; // product id
  name: string;
  price: number;
  image: string[];
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => {
  const storedCart = localStorage.getItem("cart");
  const initialCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  return {
    cart: initialCart,

    addToCart: (product) => {
      const newCart = [...get().cart, { ...product, quantity: 1 }];

      set({ cart: newCart });
      localStorage.setItem("cart", JSON.stringify(newCart));
      toast.success(`${product.name} به سبد خریداضافه شد`);
    },

    removeFromCart: (id) => {
      const newCart = get().cart.filter((item) => item.id !== id);
      set({ cart: newCart });
      localStorage.setItem("cart", JSON.stringify(newCart));
      toast.success(`محصول از سبد خرید حذف شد`);
    },

    updateQuantity: (id, quantity) => {
      const newCart = get()
        .cart.map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);

      set({ cart: newCart });
      localStorage.setItem("cart", JSON.stringify(newCart));
    },

    clearCart: () => {
      set({ cart: [] });
      localStorage.setItem("cart", JSON.stringify([]));
    },

    total: () =>
      get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  };
});
