import React from "react";
import { NavLink } from "react-router";

const MyLinks = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${className} text-orange-500 bg-orange-500/20`
          : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
