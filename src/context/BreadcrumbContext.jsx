import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BreadcrumbContext = createContext([]);

// const useBreadcrumbs = () => useContext(BreadcrumbContext);

function BreadcrumbProvider({ children }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const newBreadcrumbs = pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { text: value.charAt(0).toUpperCase() + value.slice(1), to };
    });

    setBreadcrumbs(newBreadcrumbs);
  }, [location]);

  return (
    <BreadcrumbContext.Provider value={breadcrumbs}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

BreadcrumbProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { BreadcrumbContext, BreadcrumbProvider };
