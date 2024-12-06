import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ArrowDown from "../assets/icons/ArrowDown";

const data = [
  {
    name: "Euro",
    symbol: "€",
  },
  {
    name: "Pound Sterling",
    symbol: "£",
  },
  {
    name: "US Dollar",
    symbol: "$",
  },
];

function CurrencyDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="relative pr-2.5 text-sm flex items-center justify-center cursor-pointer">
          <span className="text-base font-bold mr-1">$</span>
          <span className="hidden md:inline">Currency</span>
          <span className="absolute -right-2 sm:-right-[10px] top-[1.5px] w-6">
            <ArrowDown />
          </span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-1 w-32 sm:w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {data.map((item, ind) => (
            <MenuItem key={ind}>
              <div className="px-4 py-1 text-xs sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer">
                <span className="mr-1">{item.symbol}</span>
                {item.name}
              </div>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default CurrencyDropdown;
