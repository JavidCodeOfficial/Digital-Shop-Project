import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ScrollToTop from "./components/ScrollToUp";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";

// فایل اصلی وبسایت
// این فایل شامل Header, Footer و Routes است
// Header و Footer در تمامی صفحات نمایش داده می‌شوند و Routes شامل صفحات اصلی است
// این وبسایت فقط از فونت Shabnam استفاده می‌کند

function App() {
  return (
    <div className="font-shabnam min-h-screen flex flex-col bg-base-200 pt-20">
      {/* ScrollToTop برای رفتن به بالا استفاده می‌شود */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* مسیر های وبسایت */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </div>

      <Toaster />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
