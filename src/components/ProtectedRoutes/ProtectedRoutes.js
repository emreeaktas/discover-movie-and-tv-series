import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUser } from "context/UserContext";

const ProtectedRoute = ({ roles, element }) => {
  const { user } = useUser();

  if (user)
    ProtectedRoute.propTypes = {
      element: PropTypes.elementType,
      roles: PropTypes.arrayOf(PropTypes.string),
      element: PropTypes.any,
    };

  if (!user || (roles && !roles.includes(user?.role))) {
    return <Navigate to="/authentication/sign-in" />;
  }

  return element;
};

export default ProtectedRoute;
