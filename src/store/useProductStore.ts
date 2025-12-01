import { create } from "zustand";
import supabase from "../SupabaseClient";
import toast from "react-hot-toast";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string[];
  description: string;
  category: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: null | string;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true });

    try {
      const { data } = await supabase.from("products").select();
      if (data) set({ products: data, error: null });
    } catch (error) {
      toast.error("مشکلی رخ داد!");
      set({ error: "Error fetching products: " + error, products: [] });
    } finally {
      set({ loading: false });
    }
  },
}));
