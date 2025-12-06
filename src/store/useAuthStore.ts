import type { User } from "@supabase/supabase-js";
import { create } from "zustand";
import supabase from "../SupabaseClient";
import toast from "react-hot-toast";
import type { NavigateFunction } from "react-router-dom";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: null | string;
  getUser: () => Promise<void>;
  login: (
    email: string,
    password: string,
    navigate: NavigateFunction
  ) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  email: null,
  password: null,

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

  login: async (email, password, navigate) => {
    set({ loading: true });

    try {
      if (!email || !password) {
        toast.error("لطفا ایمیل و رمز عبور را وارد کنید!");
        set({ loading: false, error: "لطفا ایمیل و رمز عبور را وارد کنید!" });
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email!,
        password: password!,
      });

      if (error) {
        toast.error("ایمیل یا رمز عبور اشتباه است!");
        set({ error: error.message, loading: false });
        return;
      }

      set({ user: data.user, error: null });
      navigate("/");
    } catch (error) {
      toast.error("مشکلی رخ داد!");
      set({ error: String(error), user: null });
      return;
    } finally {
      set({ loading: false });
    }
  },
}));
