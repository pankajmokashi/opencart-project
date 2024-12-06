import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Desktop",
    href: "/desktop",
    children: [
      {
        name: "PC",
      },
      {
        name: "MAC",
      },
    ],
  },
  {
    name: "Laptops & Notebooks",
    href: "/laptops-notebooks",
    children: [
      {
        name: "MACS",
      },
      {
        name: "WINDOWs",
      },
    ],
  },
  {
    name: "Components",
    href: "/components",
    children: [
      {
        name: "Mice & Trackballs",
      },
      {
        name: "Monitors",
      },
      {
        name: "Printers",
      },
      {
        name: "Scanners",
      },
      {
        name: "Web Cameras",
      },
    ],
  },
  { name: "Tablets", href: "/tablets" },
  { name: "Softwares", href: "/softwares" },
  { name: "Phones & PDAs", href: "/phones-pdas" },
  { name: "Cameras", href: "/cameras" },
];

function MobileMenu() {
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
    </div>
  );
}

export default MobileMenu;
