import { Link } from "react-router-dom";
import type { Product } from "../store/useProductStore";
import Utils from "../utils/Utils";
import { motion } from "motion/react";
import { useCartStore } from "../store/useCartStore";

// طراحی کارت نمایش محصولات

// Props
type Props = {
  product: Product;
  index: number;
};

function ProductCard(props: Props) {
  const { cart, addToCart, updateQuantity } = useCartStore();

  const currentItem = cart.find((item) => item.id === props.product.id);

  return (
    <motion.div
      key={props.product.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 0.8,
        delay: 0.1 + props.index * 0.3,
      }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl  transition-all hover:scale-105 duration-300 overflow-hidden hover:cursor-pointer"
    >
      {/* Image */}
      <Link to={`/products/${props.product.id}`}>
        <figure className="relative pt-[56.25%]">
          <img
            src={props.product.image[0]}
            alt={props.product.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </figure>
      </Link>

      {/* Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title line-clamp-1">{props.product.name}</h2>

        {/* Description */}
        <p className="line-clamp-1">{props.product.description}</p>

        {/* Price */}
        <p className="line-clamp-1">
          {Utils.formatCurrency(props.product.price)}
        </p>

        {currentItem ? (
          <div className="card-actions justify-end">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="btn btn-sm btn-error"
                onClick={() =>
                  updateQuantity(currentItem.id, currentItem.quantity - 1)
                }
              >
                -
              </button>
              <span>{currentItem.quantity}</span>
              <button
                type="button"
                className="btn btn-sm btn-accent"
                onClick={() =>
                  updateQuantity(currentItem.id, currentItem.quantity + 1)
                }
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <div className="card-actions justify-end">
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => addToCart(props.product)}
            >
              افزودن به سبد خرید
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProductCard;
