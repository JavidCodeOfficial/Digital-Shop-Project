import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const { login, loading, error } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    login(email, password, navigate);
  };

  return (
    <div className="md:min-h-[80vh] flex flex-col md:flex-row md:gap-6 justify-center items-center p-4">
      <fieldset className="fieldset bg-base-200 border-base-300 md:rounded-box w-full md:w-xs border py-16 px-8 md:py-4 md:px-4 gap-8">
        <h2 className="text-xl font-bold">ورود به حساب کاربری</h2>

        <div className="space-y-3">
          <div className="flex flex-col">
            <label className="label">ایمیل</label>
            <input
              type="email"
              className="input"
              placeholder="ایمیل خود را وارد کنید"
              aria-label="ایمیل"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="label">رمز عبور</label>
            <input
              type="password"
              className="input"
              placeholder="رمز عبور خود را وارد کنید"
              aria-label="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-error">{error}</p>}
          </div>
        </div>

        <div className="divider">یا</div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="form-control">
            <label className="label cursor-pointer flex items-center gap-3">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">مرا به خاطر بسپار</span>
            </label>
          </div>

          <Link className="link" to="/">
            رمز عبور را فراموش کرده اید؟
          </Link>
        </div>

        <button
          type="submit"
          className="btn btn-accent mt-4"
          disabled={loading}
          onClick={handleLogin}
        >
          {loading ? "در حال ورود..." : "ورود"}
        </button>
      </fieldset>

      {/* Info box */}
      <aside className="fieldset bg-base-200 border-base-300 md:rounded-box w-full md:w-xs border py-16 px-8 md:py-4 md:px-4 gap-2">
        <h3 className="text-lg font-semibold mb-3">
          به حساب کاربری خود خوش آمدید
        </h3>

        <p className="mb-4 leading-7 text-sm">
          در این بخش می‌توانید وارد حساب کاربری خود شوید و از امکانات مختلف ما
          استفاده کنید. داشتن یک حساب کاربری به شما کمک می‌کند تا تجربه‌ای
          سریع‌تر، دقیق‌تر و کاملاً شخصی‌سازی‌شده داشته باشید.
        </p>

        <div>
          <p className="mb-6">با ورود به حساب کاربری می‌توانید:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>سفارش‌های خود را مدیریت کنید</li>
            <li>محصولات مورد علاقه‌تان را ذخیره کنید</li>
            <li>از تخفیف‌ها و پیشنهادهای ویژه مطلع شوید</li>
            <li>تجربه خرید سریع‌تر و شخصی‌سازی‌شده داشته باشید</li>
          </ul>
        </div>

        <Link
          to="/register"
          className="btn btn-outline btn-primary mt-3 w-full"
        >
          همین حالا ثبت نام کنید
        </Link>
      </aside>
    </div>
  );
}
