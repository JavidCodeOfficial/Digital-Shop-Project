import { useCartStore } from "../store/useCartStore";
import Utils from "../utils/Utils";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, total } =
    useCartStore();

  if (cart.length === 0)
    return <div className="text-center py-10">سبد خرید شما خالی است.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row bg-base-100 p-4 rounded-2xl shadow-md space-y-3"
        >
          {/* ردیف اول: تصویر و اطلاعات */}
          <div className="flex w-full md:w-2/3 items-center gap-4">
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-30 h-20 md:w-40 md:h-24 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h2 className="font-bold text-lg line-clamp-1">{item.name}</h2>
              <p className="text-primary font-semibold">
                {Utils.formatCurrency(item.price)}
              </p>
            </div>
          </div>

          {/* ردیف دوم: کنترل تعداد و حذف */}
          <div className="flex w-full md:w-1/3 items-center justify-between md:justify-end md:gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="btn btn-error btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              حذف
            </button>
          </div>
        </div>
      ))}

      {/* جمع کل و دکمه پاک کردن */}
      <div className="flex justify-between items-center mt-4 p-4 bg-base-300 rounded-xl shadow-md">
        <span className="font-bold text-md md:text-xl">
          جمع کل: {Utils.formatCurrency(total())}
        </span>
        <button type="button" className="btn btn-accent" onClick={clearCart}>
          پاک کردن سبد خرید
        </button>
      </div>
    </div>
  );
}
