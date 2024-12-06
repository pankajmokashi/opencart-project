import PropTypes from "prop-types";
import { Menu, MenuItem, MenuItems } from "@headlessui/react";

function Dropdowns({ children, data }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>{children}</div>
      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {data.map((item, ind) => (
            <MenuItem key={ind}>
              <div className="px-4 py-1 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer">
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

Dropdowns.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};

export default Dropdowns;
