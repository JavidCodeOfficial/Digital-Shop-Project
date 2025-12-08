import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";

function Header() {
  const { user, loading, error, getUser, logout } = useAuthStore();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="navbar bg-base-100 shadow-sm h-20 md:px-10 flex justify-between overflow-hidden">
      {/* RIGHT SECTION — Login OR Cart */}
      {user == null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 0.3,
          }}
          className={`btn btn-accent ${
            user != null ? "hidden" : "hidden lg:flex"
          }`}
        >
          <Link to="/login">ورود / ثبت نام</Link>
        </motion.div>
      ) : (
        <div className="flex-row hidden lg:flex gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              repeat: 0,
              ease: "easeIn",
              duration: 3,
              delay: 0.3,
            }}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0
                  0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item badge-primary pt-[3px]">
                8
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              repeat: 0,
              ease: "easeIn",
              duration: 3,
              delay: 0.3,
            }}
            className={`btn btn-error btn-outline ${
              user == null ? "hidden" : ""
            }`}
          >
            <button type="submit" disabled={loading} onClick={logout}>
              {loading ? "درحال خروج..." : "خروج از حساب"}
            </button>
          </motion.div>
        </div>
      )}

      {/* CENTER SECTION — Dropdown + LG Menu */}
      <div className="flex items-center">
        {/* MOBILE DROPDOWN BUTTON */}
        <div className="dropdown lg:hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              repeat: 0,
              ease: "easeIn",
              duration: 3,
              delay: 0.3,
            }}
            title="navigation"
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </motion.div>

          {/* DROPDOWN MENU */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow gap-y-1 fixed z-50"
          >
            <li className="w-32 py-1">
              <Link to="/">خانه</Link>
            </li>
            <li className="w-32 py-1">
              <Link to="/about">درباره ما</Link>
            </li>
            <li className="w-32 py-1">
              <Link to="/products">محصولات</Link>
            </li>
            <li className="w-32 py-1">
              <a>تماس با ما</a>
            </li>
            <li className="w-32 py-1">
              <a>پروفایل</a>
            </li>

            <li className="border-t border-2 my-1"></li>

            <li className="w-32 py-1">
              <div className={`btn btn-accent ${user != null ? "hidden" : ""}`}>
                <Link to="/login">ورود / ثبت نام</Link>
              </div>
            </li>

            <li className="w-32 py-1">
              <div
                className={`btn btn-error btn-outline ${
                  user == null ? "hidden" : ""
                }`}
              >
                <button type="submit" disabled={loading} onClick={logout}>
                  {loading ? "درحال خروج..." : "خروج از حساب"}
                </button>
              </div>
            </li>
          </ul>

          {error && (
            <div className="alert alert-error mb-8">مشکلی پیش آمد!</div>
          )}

          {loading ? (
            <div className="loading loading-spinner loading-sm mr-2" />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                repeat: 0,
                ease: "easeIn",
                duration: 3,
                delay: 0.3,
              }}
              role="button"
              className={`btn btn-ghost btn-circle mr-2 ${
                user == null ? "hidden" : "lg:hidden"
              }`}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0
                  0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item badge-primary pt-[3px]">
                  8
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* LARGE SCREEN MENU */}
        <div className="hidden lg:flex bg-base-200 rounded-2xl">
          <motion.ul className="menu menu-horizontal px-1">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                repeat: 0,
                ease: "easeIn",
                duration: 3,
                delay: 0.3,
              }}
            >
              <Link to="/">خانه</Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                repeat: 0,
                ease: "easeIn",
                duration: 3,
                delay: 0.4,
              }}
            >
              <Link to="/about">درباره ما</Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                repeat: 0,
                ease: "easeIn",
                duration: 3,
                delay: 0.5,
              }}
            >
              <Link to="/products">محصولات</Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                repeat: 0,
                ease: "easeIn",
                duration: 3,
                delay: 0.6,
              }}
            >
              <a>تماس با ما</a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                repeat: 0,
                ease: "easeIn",
                duration: 3,
                delay: 0.7,
              }}
            >
              <a>پروفایل</a>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      {/* LEFT SECTION — Logo */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          repeat: 0,
          ease: "easeIn",
          duration: 3,
          delay: 0.3,
        }}
        className="btn btn-ghost text-lg md:text-xl text-primary pt-1.5 block"
      >
        فروشگاه لوازم دیجیتال
      </motion.a>
    </div>
  );
}

export default Header;
