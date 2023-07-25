import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path, element: Element }) => {
  const user = useSelector(state => state.authReducer.user);

  return user ? <Route path={path} element={<Element />} /> : <Navigate to="/" />;
};

export default PrivateRoute;
