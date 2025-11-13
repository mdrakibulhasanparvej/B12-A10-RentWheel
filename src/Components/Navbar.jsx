import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { PiCarSimpleFill, PiPhoneCallFill } from "react-icons/pi";
import {
  IoAddCircle,
  IoBookmarks,
  IoHome,
  IoLogIn,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import MyLinks from "./MyLinks";
import { FaListAlt, FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../proviedrs/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("🎉 Log out successful!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(`An Error: ${error.message}`, {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      });
  };

  const links = (
    <>
      <li>
        <MyLinks to="/">
          <IoHome />
          Home
        </MyLinks>
      </li>
      <li>
        <MyLinks to="/all-cars">
          <PiCarSimpleFill />
          All Cars
        </MyLinks>
      </li>

      {user && (
        <div className="flex flex-col md:flex-row">
          <li>
            <MyLinks to="/dashboard/mybooking">
              {" "}
              <IoBookmarks />
              My Bookings
            </MyLinks>
          </li>
          <li>
            <MyLinks to="/dashboard/mylistings">
              {" "}
              <FaListAlt />
              My Listings
            </MyLinks>
          </li>
          <li>
            <MyLinks to="/dashboard/add_car">
              <IoAddCircle />
              Add A Car
            </MyLinks>
          </li>
        </div>
      )}
    </>
  );
  const links2 = (
    <>
      <li>
        <MyLinks to="/">
          <IoHome />
          Home
        </MyLinks>
      </li>
      <li>
        <MyLinks to="/all-cars">
          <PiCarSimpleFill />
          All Cars
        </MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/overview">
          <MdSpaceDashboard />
          Dashboard
        </MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/myprofile">
          <CgProfile />
          My Profile
        </MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/add_car">
          <IoAddCircle />
          Add A Car
        </MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/mybooking">
          <IoBookmarks />
          My Bookings
        </MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/mylistings">
          <FaListAlt />
          My Listings
        </MyLinks>
      </li>
      {/* <li>
        <MyLinks to="/aboutus">About Us</MyLinks>
      </li>
      <li>
        <MyLinks to="/contactus">Contact Us</MyLinks>
      </li> */}
    </>
  );

  return (
    <div className="relative dark:bg-gray-800 ">
      <div className="py-1 flex justify-end text-gray-800 dark:text-white items-center px-5 md:px-10">
        <div className="right-side ">
          <h2 className="flex items-center gap-2 text-xs md:text-sm lg:text-base">
            <span>
              <PiPhoneCallFill />
            </span>{" "}
            HOT LINE: +971558009990
            <span>
              <IoLogoWhatsapp />
            </span>{" "}
            +971558009990
          </h2>
        </div>

        {/* login logout toggle */}

        {/* <div className="leftsiede">
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:border-b-2 hover:border-white hover:cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <NavLink
                to="/auth/login"
                className="hover:border-b-2 hover:border-white hover:cursor-pointer"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/Signup"
                className="hover:border-b-2 hover:border-white hover:cursor-pointer"
              >
                Signup
              </NavLink>
            </div>
          )}
        </div> */}
      </div>

      <div className="navbar bg-white dark:bg-gray-800 text-gray-800 dark:text-white sticky top-0 z-50 pr-5 md:px-10 border-b border-gray-300 shadow-md">
        <div className="navbar-start  ">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="-pl-5 btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu bg-white dark:bg-gray-800 menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="md:text-2xl flex items-center font-extrabold">
            <span>
              <img
                src="/logo.png"
                className="w-4 h-4  md:w-6 md:h-6 mr-6 md:mr-2"
                alt="rent_wheels_logo"
              />
            </span>
            RENT<span className="text-orange-500">WHEELS</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="font-bold menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* new user icon */}
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end z-50 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://threedio-prod-var-cdn.icons8.com/vb/preview_sets/previews/JpZQHPMv0qeSmJHp.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu text-gray-800 dark:text-white bg-white dark:bg-gray-800 menu-sm dropdown-content rounded-box z-50 mt-3 w-60 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                {links2}

                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />

                <li>
                  <button
                    onClick={handleLogout}
                    className="btn mt-3 btn-xs text-left bg-linear-to-br from-orange-500 to-yellow-400 text-white"
                  >
                    <IoLogOutOutline /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="btn rounded-full border-gray-300 btn-xs sm:btn-sm bg-gradient-to-r from-orange-400 to-orange-600 text-white"
              >
                <IoLogIn /> Login
              </Link>
              <Link
                to="/auth/Signup"
                className="btn rounded-full border-gray-300 btn-xs sm:btn-sm bg-gradient-to-r from-orange-400 to-orange-600 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div className="navbar-end gap-2">
//   {/* User Image */}
//   {/* {user && ( */}
//   <div className="flex items-center gap-10">
//     <span>
//       <Link to="/wishlists">
//         <FaShoppingCart size={28} />
//       </Link>
//     </span>
//     <div className="relative group">
//       <Link to="/myProfile">
//         <img
//           className="w-12 h-12 rounded-full border-2 border-[#0F83B2] cursor-pointer"
//           // src={user.photoURL && user.photoURL}
//           referrerPolicy="no-referrer"
//           alt="user"
//         />
//       </Link>
//       {/* Dropdown */}
//       <div
//         className="absolute right-0 top-14 bg-white shadow-lg rounded-lg
//          opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
//          transition-all duration-200 p-4 z-10
//          inline-block max-w-xs wrap-break-words"
//       >
//         <p className="font-semibold text-gray-800">
//           {/* {user.displayName} */}
//         </p>
//       </div>
//     </div>
//   </div>
//   {/* )} */}
// </div>
