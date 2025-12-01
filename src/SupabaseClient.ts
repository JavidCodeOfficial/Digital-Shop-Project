import { createClient } from "@supabase/supabase-js";

// ساخت یک کلاس SupabaseClient برای اتصال به Supabase
// و استفاده از متدهای آن در دیگر فایل ها

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// اطمینان از وجود supabaseUrl و supabaseKey و ارسال ارور در صورت عدم وجود آنها
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and key are required");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
