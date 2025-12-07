import Categories from "../components/Categories";
import Descriptions from "../components/Descriptions";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";

// صفحه اصلی وبسایت

function Home() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <Categories />
      <Descriptions />
    </div>
  );
}

export default Home;
