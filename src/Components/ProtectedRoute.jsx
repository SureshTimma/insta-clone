import React from "react";

const ProtectedRoute = ({ children }) => {
  if (!jwtToken) {
    navigate("/");
  }
  return { children };
};

export default ProtectedRoute;
