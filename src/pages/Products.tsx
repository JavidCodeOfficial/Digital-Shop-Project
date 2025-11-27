import ProductCard from "../components/ProductCard";
import { products, type ProductsType } from "../data/products";
import ChoiceChip from "../components/ChoiceChip";
import { useEffect, useState } from "react";

// صفحه محصولات وبسایت

function Products() {
  // دریافت لیست محصولات از دیتابیس
  const [items, setItems] = useState<ProductsType[]>([]);

  // دریافت دسته بندی انتخاب شده از ChoiceChip
  const [selectedCategory, setSelectedCategory] = useState("همه");

  useEffect(() => {
    return setItems(products); // در هنگام بارگذاری صفحه، لیست محصولات را دریافت می کند
  }, []);

  return (
    <div className="flex flex-col items-center justifys-between py-6 gap-6">
      <div className="">
        {/* انتخاب دسته بندی */}
        <ChoiceChip onSelect={(value) => setSelectedCategory(value)} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items
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
    </div>
  );
}

export default Products;
