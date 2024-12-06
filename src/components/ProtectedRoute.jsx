import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";

const ProtectedRoute = ({ isAllowed, redirectTo, children }) => {
  const { setRedirectPath } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!isAllowed) {
      if (location.pathname == "/account/logout") {
        setRedirectPath("/account");
      } else {
        setRedirectPath(location.pathname);
      }
    }
  }, [isAllowed, location.pathname, setRedirectPath]);

  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
