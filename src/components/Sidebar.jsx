import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

const Sidebar = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    // Determine the selected category and subcategory from the URL
    const pathParts = location.pathname.split("/").filter(Boolean); // Split and filter empty parts
    const categoryPath = `/catalog/${pathParts[1]}`;
    const subcategoryPath = `/catalog/${pathParts[1]}/${pathParts[2]}`;

    // Find and set the selected category
    const category = categories.find((cat) => cat.href === categoryPath);
    if (category) {
      setSelectedCategory(category.name);

      // Find and set the selected subcategory if present
      if (category.children) {
        const subcategory = category.children.find(
          (sub) => sub.href === subcategoryPath
        );
        if (subcategory) {
          setSelectedSubcategory(subcategory.name);
        }
      }
    }
  }, [location]);

  return (
    <div className="bg-light-gray flex flex-col gap-[2px] border">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`${
            selectedCategory === category.name
              ? "bg-nav-blue text-white"
              : "bg-white text-black"
          }`}
        >
          {/* Main category */}
          <Link to={category.href}>
            <h3
              className="px-4 py-2 cursor-pointer"
              onClick={() =>
                setSelectedCategory((prev) =>
                  prev === category.name ? null : category.name
                )
              }
            >
              {category.name}
            </h3>
          </Link>

          {/* Subcategories */}
          {selectedCategory === category.name && category.children && (
            <ul className="bg-light-gray flex flex-col gap-[2px]">
              {category.children.map((sub) => (
                <Link to={sub.href} key={sub.name} className="">
                  <li
                    className={`px-8 py-2 ${
                      selectedSubcategory === sub.name
                        ? "bg-nav-blue text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    - {sub.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
