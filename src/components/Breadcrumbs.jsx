import { Link, useLocation } from "react-router-dom";
import Home from "../assets/icons/Home";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <ol className="px-4 sm:px-6 text-xs sm:text-sm flex items-center border bg-light-gray text-nav-blue breadcrumb">
      <li className="h-10 flex items-center">
        <Link to="/">
          <span className="w-5 flex">
            <Home />
          </span>
        </Link>
        <span className="mx-2 sm:mx-4 text-lg sm:text-xl text-slate-600">
          /
        </span>
      </li>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <li key={to} className="h-10 flex items-center">
            <Link to={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
            <span className="mx-2 sm:mx-4 text-lg sm:text-xl text-slate-600">
              /
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export default Breadcrumbs;
