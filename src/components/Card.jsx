import Favorite from "../assets/icons/Favorite";
import Arrows from "../assets/icons/Arrows";
import Cart from "../assets/icons/Cart";

function Card() {
  return (
    <div className="mx-auto max-w-sm border">
      <div>
        <img
          className="mx-auto aspect-square"
          src="/public/catalog/mac_laptops.jpg"
          alt="MacBook"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-medium mb-1">MacBook</h4>
        <p className="text-sm mb-2">
          Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at
          speeds up to 2.16GHz, t..
        </p>
        <p className="text-sm font-medium">$602.00</p>
        <p className="text-sm">Ex Tax: $500.00</p>
      </div>
      <div className="grid gap-px grid-cols-3">
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
  );
}

export default Card;
