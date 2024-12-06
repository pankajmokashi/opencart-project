import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ArrowDown from "../assets/icons/ArrowDown";
import Person from "../assets/icons/Person";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const authLinks = [
  {
    name: "Register",
    link: "/account/register",
  },
  {
    name: "Login",
    link: "/account/login",
  },
];

const accountLinks = [
  {
    name: "My Account",
    link: "/account",
  },
  {
    name: "Order History",
    link: "/account/orders",
  },
  {
    name: "Transactions",
    link: "/account/transactions",
  },
  {
    name: "Downloads",
    link: "/account/downloads",
  },
  {
    name: "Logout",
    link: "/account/logout",
  },
];

function MyAccountDropdown() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="relative pr-2.5 flex gap-1 justify-center items-center cursor-pointer">
          <span className="w-6">
            <Person />
          </span>
          <span className="hidden md:inline">My Account</span>
          <span className="absolute -right-2 md:-right-[10px] top-[1px] w-6">
            <ArrowDown />
          </span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-1 w-32 sm:w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {isAuthenticated ? (
          <div className="py-1">
            {accountLinks.map((item, ind) => (
              <MenuItem key={ind}>
                <Link
                  to={item.link}
                  className="block px-4 py-1 text-xs sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer"
                >
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </div>
        ) : (
          <div className="py-1">
            {authLinks.map((item, ind) => (
              <MenuItem key={ind}>
                <Link
                  to={item.link}
                  className="block px-4 py-1 text-xs sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer"
                >
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </div>
        )}
      </MenuItems>
    </Menu>
  );
}

export default MyAccountDropdown;
