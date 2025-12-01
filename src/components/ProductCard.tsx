import type { Product } from "../store/useProductStore";
import Utils from "../utils/Utils";
import { motion } from "motion/react";

// طراحی کارت نمایش محصولات

// Props
type Props = {
  product: Product;
  index: number;
};

function ProductCard(props: Props) {
  return (
    <motion.div
      key={props.product.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.1 + props.index * 0.3,
      }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl  transition-all hover:scale-105 duration-300 overflow-hidden"
    >
      {/* Image */}
      <figure className="relative pt-[56.25%]">
        <img
          src={props.product.image[0]}
          alt={props.product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title line-clamp-1">{props.product.name}</h2>

        {/* Description */}
        <p className="line-clamp-2">{props.product.description}</p>

        {/* Price */}
        <p className="line-clamp-2">
          {Utils.formatCurrency(props.product.price)}
        </p>

        {/* Add to card */}
        <div className="card-actions justify-end">
          <button type="button" className="btn btn-primary">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
