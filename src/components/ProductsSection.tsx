import { ArrowLeft } from "lucide-react";
import { products, type ProductsType } from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// طراحی کامپوننت قسمت نمایش محصولات در صفحه اصلی

function ProductsSection() {
  const MotionLink = motion(Link); //تعریف Link برای motion

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
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
          >
            دیدن همه محصولات
          </motion.h1>
          <MotionLink
            to="/products"
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
            className="btn btn-circle"
            title="go to products"
          >
            <ArrowLeft />
          </MotionLink>
        </div>
        <div className="divider"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product Card */}
        {products.slice(0, 9).map((product: ProductsType, index: number) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
