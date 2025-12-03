import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="md:min-h-[80vh] flex justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 md:rounded-box w-full md:w-xs border py-16 px-20 md:py-4 md:px-4 gap-8">
        <h2 className="text-xl font-bold">ورود به حساب کاربری</h2>

        <div className="space-y-3">
          <div className="flex flex-col">
            <label className="label">ایمیل</label>
            <input
              type="email"
              className="input"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">رمز عبور</label>
            <input
              type="password"
              className="input"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
        </div>

        <div className="divider">یا</div>

        <div className="flex justify-between items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">مرا به خاطر بسپار</span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>

          <Link className="link" to="/">
            رمز عبور را فراموش کرده اید؟
          </Link>
        </div>

        <button type="submit" className="btn btn-neutral mt-4">
          ورود
        </button>
      </fieldset>
    </div>
  );
}

export default Login;
