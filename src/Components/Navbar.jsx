// import React, { use } from "react";
import { Link, NavLink } from "react-router";
// import { AuthContext } from "../providers/AuthProvider";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import MyLinks from "./MyLinks";

// import { toast } from "react-toastify";

const Navbar = () => {
  // const { user, logout } = use(AuthContext);

  // const handleLogout = () => {
  //   logout()
  //     .then(() => {
  //       toast.success("🎉 Log out successful!", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         theme: "colored",
  //       });
  //     })
  //     .catch((error) => {
  //       toast.error(`An Error: ${error.message}`, {
  //         position: "top-right",
  //         autoClose: 2000,
  //         theme: "colored",
  //       });
  //     });
  // };

  const links = (
    <>
      <li>
        <MyLinks to="/">Home</MyLinks>
      </li>
      <li>
        <MyLinks to="/all-cars">All Cars</MyLinks>
      </li>
      {/* <li>
        <MyLinks to="/aboutus">About Us</MyLinks>
      </li>
      <li>
        <MyLinks to="/contactus">Contact Us</MyLinks>
      </li> */}
      <li>
        <MyLinks to="/dashboard/myprofile">My Profile</MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/mybooking">My Booking</MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/mylistings">My List</MyLinks>
      </li>
      <li>
        <MyLinks to="/dashboard/add_car">Add A Car</MyLinks>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div className="py-1 flex justify-between items-center px-5 md:px-10">
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
        <div className="leftsiede">
          {/* {user ? ( */}
          <button
            // onClick={handleLogout}
            className="hover:border-b-2 hover:border-white hover:cursor-pointer"
          >
            Logout
          </button>
          {/* ) : ( */}
          <div className="flex gap-2">
            <NavLink
              to="/auth/login"
              className="hover:border-b-2 hover:border-white hover:cursor-pointer"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="hover:border-b-2 hover:border-white hover:cursor-pointer"
            >
              Register
            </NavLink>
          </div>
          {/* )} */}
        </div>
      </div>

      <div className="navbar sticky top-0 z-50 bg-base-100 pr-5 md:px-10 text-gray-600 border-b border-gray-300 shadow-md">
        <div className="navbar-start">
          <div className="dropdown pr-2 ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl  font-extrabold">
            RENTWHEELS
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="font-bold menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          {/* User Image */}
          {/* {user && ( */}
          <div className="flex items-center gap-10">
            <span>
              <Link to="/wishlists">
                <FaShoppingCart size={28} />
              </Link>
            </span>
            <div className="relative group">
              <Link to="/myProfile">
                <img
                  className="w-12 h-12 rounded-full border-2 border-[#0F83B2] cursor-pointer"
                  // src={user.photoURL && user.photoURL}
                  referrerPolicy="no-referrer"
                  alt="user"
                />
              </Link>
              {/* Dropdown */}
              <div
                className="absolute right-0 top-14 bg-white shadow-lg rounded-lg 
                 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                 transition-all duration-200 p-4 z-10
                 inline-block max-w-xs wrap-break-words"
              >
                <p className="font-semibold text-gray-800">
                  {/* {user.displayName} */}
                </p>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
