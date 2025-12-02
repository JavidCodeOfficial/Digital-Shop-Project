import type { User } from "@supabase/supabase-js";
import { create } from "zustand";
import supabase from "../SupabaseClient";
import toast from "react-hot-toast";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: null | string;
  getUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  getUser: async () => {
    set({ loading: true });

    try {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        set({ error: error.message, loading: false });
      }

      set({ user: data.user, loading: false, error: null });
    } catch (error) {
      toast.error("مشکلی رخ داد!");
      set({ error: String(error), user: null });
    } finally {
      set({ loading: false });
    }
  },
}));
