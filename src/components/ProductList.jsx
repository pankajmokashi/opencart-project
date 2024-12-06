import Arrows from "../assets/icons/Arrows";
import Cart from "../assets/icons/Cart";
import Favorite from "../assets/icons/Favorite";

const products = [
  {
    id: 1,
    name: "MacBook",
    img: "/catalog/mac.jpg",
    price: "602.00",
    desc: "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    tax: "500.00",
    currency: "$",
  },
  {
    id: 1,
    name: "MacBook",
    img: "/catalog/mac.jpg",
    price: "602.00",
    desc: "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    tax: "500.00",
    currency: "$",
  },
  {
    id: 1,
    name: "MacBook",
    img: "/catalog/mac.jpg",
    price: "602.00",
    desc: "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    tax: "500.00",
    currency: "$",
  },
  {
    id: 1,
    name: "MacBook",
    img: "/catalog/mac.jpg",
    price: "602.00",
    desc: "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    tax: "500.00",
    currency: "$",
  },
  {
    id: 1,
    name: "MacBook",
    img: "/catalog/mac.jpg",
    price: "602.00",
    desc: "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    tax: "500.00",
    currency: "$",
  },
  {
    id: 1,
    name: "MacBook",
    img: "/catalog/mac.jpg",
    price: "602.00",
    desc: "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    tax: "500.00",
    currency: "$",
  },
];

function ProductList() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product, ind) => (
        <div key={ind} className="mx-auto relative border">
          <img
            alt={product.name}
            src={product.img}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover hover:opacity-75 lg:aspect-auto lg:h-60"
          />
          <div className="px-4">
            <div>
              <h3 className="text-xl font-medium text-nav-blue">
                <a href="#">
                  <span aria-hidden="true" className="absolute" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-xs text-gray-500">{product.desc}</p>
              <p className="mt-2 text-xs font-medium">
                {product.currency}
                {product.price}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Ex Tax: {product.currency}
                {product.tax}
              </p>
            </div>
          </div>
          <div className="grid gap-px grid-cols-3 pt-2">
            <div className="group">
              <div className="py-2 flex items-center justify-center bg-gray-200 group-hover:bg-gray-400 cursor-pointer">
                <span className="w-5 flex text-gray-600 group-hover:text-gray-800">
                  <Cart />
                </span>
              </div>
            </div>
            <div className="group">
              <div className="py-2 flex items-center justify-center bg-gray-200 hover:bg-gray-400 cursor-pointer">
                <span className="w-5 flex text-gray-600 group-hover:text-gray-800">
                  <Favorite />
                </span>
              </div>
            </div>
            <div className="group">
              <div className="py-2 flex items-center justify-center bg-gray-200 hover:bg-gray-400 cursor-pointer">
                <span className="w-5 flex text-gray-600 group-hover:text-gray-800">
                  <Arrows />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
