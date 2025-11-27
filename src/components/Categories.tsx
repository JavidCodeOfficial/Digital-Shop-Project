import laptop from "../assets/images/categories-laptop.jpg";
import mobile from "../assets/images/categories-mobile.avif";
import accessories from "../assets/images/categories-headphone.jpg";
import Card from "./Card";

//طراحی کارت دسته بندی ها در صفحه اصلی

function Categories() {
  return (
    <div className="flex md:flex-wrap flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-0 pt-16 pb-8 px-2 md:px-0">
      {/* دسته بندی لپتاپ ها */}
      <Card alt="Laptop and computer" src={laptop} title="لپتاپ و کامپیوتر" />

      {/* دسته بندی گوشی موبایل */}
      <Card alt="Mobile and tablets" src={mobile} title="موبایل و تبلت" />

      {/* دسته بندی لوازم جانبی */}
      <Card
        alt="Headphones and accessories"
        src={accessories}
        title="لوازم جانبی"
      />
    </div>
  );
}

export default Categories;
