import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ScrollToTop from "./components/ScrollToUp";
import { Toaster } from "react-hot-toast";

// فایل اصلی وبسایت
// این فایل شامل Header, Footer و Routes است
// Header و Footer در تمامی صفحات نمایش داده می‌شوند و Routes شامل صفحات اصلی است
// این وبسایت فقط از فونت Shabnam استفاده می‌کند

function App() {
  return (
    <div className="font-shabnam">
      {/* ScrollToTop برای رفتن به بالا استفاده می‌شود */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* مسیر های وبسایت */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Toaster />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
