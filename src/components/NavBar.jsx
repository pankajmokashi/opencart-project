import { useEffect, useRef, useState } from "react";
import Menu from "../assets/icons/Menu";
import MobileMenu from "./MobileMenu";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  const [open, setOpen] = useState(false);
  const disclosureRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        disclosureRef.current &&
        !disclosureRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="mx-auto my-4 max-w-xl md:max-w-screen-xl">
      <div className="px-4 sm:px-8 rounded-md bg-nav-blue text-white text-shadow2">
        <div className="flex items-center justify-between py-1.5 lg:py-0">
          <div className="lg:hidden">Categories</div>
          <button
            onClick={() => setOpen(!open)}
            className="py-1 px-1.5 flex lg:hidden border rounded-md cursor-pointer border-nav-blue hover:border-white"
          >
            <span className="w-5 text-white">
              <Menu />
            </span>
          </button>
          <NavBarLinks />
        </div>
        {open && <MobileMenu handleLinkClick={handleLinkClick} />}
      </div>
    </div>
  );
}

export default NavBar;
