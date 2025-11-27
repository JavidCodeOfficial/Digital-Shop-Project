import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// این کامپوننت برای سکرول کردن به بالای صفحه بعد از رفتن به هر مسیر استفاده میشه

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
