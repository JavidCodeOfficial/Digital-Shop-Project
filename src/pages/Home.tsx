import Categories from "../components/Categories";
import Descriptions from "../components/Descriptions";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";

// صفحه اصلی وبسایت

function Home() {
  return (
    <div>
      <Hero />
      <Descriptions />
      <Categories />
      <ProductsSection />
    </div>
  );
}

export default Home;
