import { Link, useLocation } from "react-router-dom";
import Home from "../assets/icons/Home";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <ol className="px-4 sm:px-6 text-sm flex items-center border bg-light-gray text-nav-blue breadcrumb">
      <li className="pr-10 sm:pr-12 h-10 flex items-center relative breadcrumb-item">
        <Link to="/">
          <span className="w-5 flex">
            <Home />
          </span>
        </Link>
      </li>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <li
            key={to}
            className="pr-10 sm:pr-12 h-10 flex items-center relative breadcrumb-item"
          >
            <Link to={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default Breadcrumbs;
