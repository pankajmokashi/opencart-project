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

function NavBarLinks() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <div className="hidden lg:flex lg:gap-6 items-center text-sm font-base">
      {categories.map((item, index) =>
        item.children ? (
          <div
            key={item.name}
            className="relative px-3 py-3 hover:bg-dark-blue"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="rounded-md text-sm flex gap-1 items-center">
              {item.name}
            </button>
            {dropdownOpen === index && (
              <div className="absolute left-0 z-10 w-44 mt-3 transition">
                <div className="bg-white text-black border-2 pt-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
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
            className="px-3 py-3 text-sm hover:bg-dark-blue"
          >
            {item.name}
          </Link>
        )
      )}
    </div>
  );
}

export default NavBarLinks;
