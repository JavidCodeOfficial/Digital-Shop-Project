import Card from "./Card";

//طراحی کارت دسته بندی ها در صفحه اصلی

function Categories() {
  return (
    <div className="flex md:flex-wrap flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-0 pt-16 pb-8 px-2 md:px-0">
      {/* دسته بندی لپتاپ ها */}
      <Card
        alt="Laptop and computer"
        src={"/images/categories-laptop.jpg"}
        title="لپتاپ و کامپیوتر"
      />

      {/* دسته بندی گوشی موبایل */}
      <Card
        alt="Mobile and tablets"
        src={"/images/categories-mobile.avif"}
        title="موبایل و تبلت"
      />

      {/* دسته بندی لوازم جانبی */}
      <Card
        alt="Headphones and accessories"
        src={"/images/categories-headphone.jpg"}
        title="لوازم جانبی"
      />
    </div>
  );
}

export default Categories;
