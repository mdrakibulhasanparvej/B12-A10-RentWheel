import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import MyLinks from "../Components/MyLinks";
import { MdGridView } from "react-icons/md";
import { IoAddCircle, IoBookmarks } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaListAlt } from "react-icons/fa";

const DashLayout = () => {
  return (
    <div className="bg-gray-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex flex-col lg:flex-row mx-auto">
        <section className="w-full md:w-1/5  md:min-h-screen p-5 bg-white dark:bg-gray-900 shadow-sm m-6 rounded-2xl">
          <div className="font-bold text-[10px]  md:text-[15px] flex md:flex-col gap-5 md:gap-2">
            <MyLinks
              className={`p-2 rounded-xl flex items-center gap-3`}
              to="/dashboard/overview"
            >
              <span>
                <MdGridView />{" "}
              </span>
              Over View
            </MyLinks>
            <MyLinks
              className={`p-2 rounded-xl flex items-center gap-3`}
              to="/dashboard/myprofile"
            >
              <span>
                <CgProfile />{" "}
              </span>
              My Profile
            </MyLinks>
            <MyLinks
              className={`p-2 rounded-xl flex items-center gap-3`}
              to="/dashboard/mybooking"
            >
              <span>
                <IoBookmarks />{" "}
              </span>{" "}
              My Booking
            </MyLinks>
            <MyLinks
              className={`p-2 rounded-xl flex items-center gap-3`}
              to="/dashboard/mylistings"
            >
              <span>
                <FaListAlt />{" "}
              </span>
              My List
            </MyLinks>
            <MyLinks
              className={`p-2 rounded-xl flex items-center gap-3`}
              to="/dashboard/add_car"
            >
              <span>
                <IoAddCircle />{" "}
              </span>
              Add A Car
            </MyLinks>
          </div>
        </section>
        <section className="w-full md:w-4/5 md:min-h-screen p-5 bg-white dark:bg-gray-900 shadow-sm m-6 rounded-2xl">
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default DashLayout;
