import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const PrivateRoutess = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (!loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/signin"></Navigate>;
};

export default PrivateRoutess;
