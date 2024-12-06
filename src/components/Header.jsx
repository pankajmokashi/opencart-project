import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CartDropdown from "./CartDropdown";

function Header() {
  return (
    <header>
      <NavLinks />
      <div className="px-4 sm:px-8">
        <div className="mx-auto max-w-xl md:max-w-screen-xl my-4">
          <div className="flex gap-4 flex-col md:flex-row items-center justify-between">
            <Link to="/">
              <img
                src="/opencart-logo.png"
                alt="logo"
                className="w-40 min-w-40"
              />
            </Link>
            <div className="w-full flex-grow flex justify-center md:justify-end">
              <SearchBar />
            </div>
            <CartDropdown />
          </div>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
