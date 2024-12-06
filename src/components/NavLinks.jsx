import { Link } from "react-router-dom";
import Checkout from "../assets/icons/Checkout";
import Favorite from "../assets/icons/Favorite";
import Phone from "../assets/icons/Phone";
import CurrencyDropdown from "./CurrencyDropdown";
import MyAccountDropdown from "./MyAccountDropdown";
import Cart from "../assets/icons/Cart";

function NavLinks() {
  return (
    <div className="px-4 sm:px-8 bg-light-gray text-mid-gray text-shadow1">
      <div className="mx-auto max-w-xl md:max-w-screen-xl py-3 flex justify-between">
        <div>
          <CurrencyDropdown />
        </div>
        <div className="flex text-sm items-center gap-4">
          <div className="flex gap-1 justify-center items-center">
            <Link to="/contact-us" className="w-4 cursor-pointer">
              <Phone />
            </Link>
            <span className="hidden md:inline">1234567890</span>
          </div>
          <MyAccountDropdown />
          <Link
            to="/account/wishlist"
            className="flex gap-1 justify-center items-center cursor-pointer"
          >
            <span className="w-5">
              <Favorite />
            </span>
            <span className="hidden md:inline">WishList(0)</span>
          </Link>
          <Link
            to="/cart"
            className="flex gap-1 justify-center items-center cursor-pointer"
          >
            <span className="w-5">
              <Cart />
            </span>
            <span className="hidden md:inline">Shopping Cart</span>
          </Link>
          <Link
            to="/cart/checkout"
            className="flex gap-1 justify-center items-center cursor-pointer"
          >
            <span className="w-4">
              <Checkout />
            </span>
            <span className="hidden md:inline">Checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
