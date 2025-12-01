import ProductCard from "../components/ProductCard";
import ChoiceChip from "../components/ChoiceChip";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/useProductStore";

// صفحه محصولات وبسایت

function Products() {
  // دریافت لیست محصولات از دیتابیس
  const { products, loading, error, fetchProducts } = useProductStore();

  // دریافت دسته بندی انتخاب شده از ChoiceChip
  const [selectedCategory, setSelectedCategory] = useState("همه");

  useEffect(() => {
    fetchProducts(); // در هنگام بارگذاری صفحه، لیست محصولات را دریافت می کند
  }, [fetchProducts]);

  return (
    <div className="flex flex-col items-center justifys-between py-6 gap-6">
      <div className="">
        {/* انتخاب دسته بندی */}
        <ChoiceChip onSelect={(value) => setSelectedCategory(value)} />
      </div>

      {error && <div className="alert alert-error mb-8">مشکلی پیش آمد!</div>}

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loading loading-spinner loading-lg h-64" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) =>
              selectedCategory === "همه"
                ? true
                : selectedCategory === product.category
            )
            .map((product, index) => (
              // نمایش محصولات بر اساس دسته بندی انتخاب شده
              <ProductCard index={index} product={product} key={product.id} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Products;
