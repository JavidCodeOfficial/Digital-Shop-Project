import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import Utils from "../utils/Utils";
import { useCartStore } from "../store/useCartStore";

function Details() {
  const { id } = useParams(); // Get the product ID from the URL
  const { products, loading, error, fetchProduct } = useProductStore();
  const { cart, addToCart, updateQuantity } = useCartStore();

  const currentItem = cart.find((item) => item.id === Number(id));

  useEffect(() => {
    fetchProduct(Number(id!));
  }, [fetchProduct, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">هیچ محصولی پیدا نشد</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center max-w-4xl lg:min-w-4xl mx-auto md:min-h-[80vh] p-4">
      <div className="card bg-base-100 shadow-2xl overflow-hidden py-2 px-2">
        <div className="flex flex-col md:flex-row mx-3">
          <div className="flex-1">
            {/* Right: Product Image */}
            <figure className="w-full bg-base-100 p-4 flex justify-center items-center h-[250px]">
              <img
                src={products[0].image[0]}
                alt={products[0].name}
                className="rounded-2xl object-cover h-full w-full shadow-lg size-full"
              />
            </figure>
          </div>

          <div className="flex-1 flex flex-col items-center ">
            {/* Left: Content */}
            <div className="card-body gap-y-6">
              {/* Title */}
              <div className="flex justify-center items-center flex-1">
                <h1 className="text-2xl font-extrabold tracking-tight text-base-content">
                  {products[0].name}
                </h1>
              </div>

              {/* Price */}
              <div className="flex justify-center items-center flex-1 gap-x-2">
                <p className="text-2xl font-black text-primary">
                  {Utils.formatCurrency(products[0].price)}
                </p>
                <p className="text-sm text-base-content/50">به همراه مالیات</p>
              </div>

              {/* Description */}
              <div className="flex justify-center items-center flex-1">
                <p className="text-base-content/70 text-md leading-relaxed">
                  {products[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Highlights */}
        <div className="bg-base-200/60 rounded-2xl px-10 py-5 border border-base-300 shadow-md space-y-3 mx-6">
          <h2 className="text-lg font-semibold text-base-content">
            نکات برجسته
          </h2>
          <ul className="space-y-1 text-base-content/80 list-disc pl-6">
            <li>محصولات باکیفیت و بادوام</li>
            <li>ارسال سریع و امن</li>
            <li>همراه با دو سال گارانتی</li>
            <li>پشتیبانی ۲۴ ساعته</li>
          </ul>
        </div>

        {/* CTA Buttons */}
        {currentItem ? (
          <div className="flex justify-center pt-3 mx-6">
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
          <div className="flex pt-3 mx-6">
            <button
              type="button"
              className="btn btn-primary btn-lg flex-1 h-14 text-lg font-semibold shadow-xl hover:brightness-110 transition-all"
              onClick={() => addToCart(products[0])}
            >
              افزودن به سبد خرید{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
