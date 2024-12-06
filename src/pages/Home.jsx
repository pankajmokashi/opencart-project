import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div>
      <Carousel />
      <div className="pt-6">
        <h3 className="text-xl">Featured</h3>
        <ProductList />
      </div>
    </div>
  );
}

export default Home;
