import { ArrowLeft } from "lucide-react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
// طراحی کامپوننت قسمت نمایش محصولات در صفحه اصلی

function ProductsSection() {
  const MotionLink = motion.create(Link); //تعریف Link برای motion

  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-8 overflow-hidden"
      id="product-cards"
    >
      <div className="mb-5">
        <div className="flex flex-row justify-between items-center">
          {/* دکمه رفتن به صفحه محصولات */}
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              repeat: 0,
              duration: 3,
              delay: 0.2,
            }}
            className="text-accent-content"
          >
            دیدن همه محصولات
          </motion.h1>
          <MotionLink
            to="/products"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              repeat: 0,
              duration: 3,
              delay: 0.2,
            }}
            className="btn btn-circle btn-accent"
            title="go to products"
          >
            <ArrowLeft />
          </MotionLink>
        </div>
        <div className="divider"></div>
      </div>

      {error && <div className="alert alert-error mb-8">مشکلی پیش آمد!</div>}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          {products.slice(0, 9).map((product, index: number) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsSection;
