import React from "react";
import { NavLink } from "react-router";

const MyLinks = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 border-b-2 border-orange-500"
          : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
