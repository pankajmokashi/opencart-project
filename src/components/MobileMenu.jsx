import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Desktop",
    href: "/catalog/desktop",
    children: [
      {
        name: "PC",
        href: "/catalog/desktop/PC",
      },
      {
        name: "MAC",
        href: "/catalog/desktop/MAC",
      },
    ],
  },
  {
    name: "Laptops & Notebooks",
    href: "/catalog/laptops-notebooks",
    children: [
      {
        name: "MACS",
        href: "/catalog/laptops-notebooks/MACS",
      },
      {
        name: "WINDOWs",
        href: "/catalog/laptops-notebooks/WINDOWS",
      },
    ],
  },
  {
    name: "Components",
    href: "/catalog/components",
    children: [
      {
        name: "Mice & Trackballs",
        href: "/catalog/components/mice-trackballs",
      },
      {
        name: "Monitors",
        href: "/catalog/components/monitors",
      },
      {
        name: "Printers",
        href: "/catalog/components/printers",
      },
      {
        name: "Scanners",
        href: "/catalog/components/scanners",
      },
      {
        name: "Web Cameras",
        href: "/catalog/components/web-cameras",
      },
    ],
  },
  { name: "Tablets", href: "/catalog/tablets" },
  { name: "Softwares", href: "/catalog/softwares" },
  { name: "Phones & PDAs", href: "/catalog/phones-pdas" },
  { name: "Cameras", href: "/catalog/cameras" },
];

// eslint-disable-next-line react/prop-types
function MobileMenu({ handleLinkClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <div className="lg:hidden bg-nav-blue text-white">
      <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
        {categories.map((item, index) =>
          item.children ? (
            <div
              key={item.name}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="px-3 py-3 hover:bg-dark-blue">
                <button className="rounded-md text-sm flex gap-1 items-center">
                  {item.name}
                </button>
              </div>
              {dropdownOpen === index && (
                <div className="">
                  <div className="bg-white text-black border-2 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-xs hover:bg-nav-blue hover:text-white"
                      >
                        {child.name}
                      </Link>
                    ))}
                    <Link
                      to={item.href}
                      className="border-t block px-4 py-2 text-xs text-nav-blue hover:bg-nav-blue hover:text-white"
                    >
                      Show All {item.name}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleLinkClick}
              className="px-3 py-3 text-sm hover:bg-dark-blue"
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
