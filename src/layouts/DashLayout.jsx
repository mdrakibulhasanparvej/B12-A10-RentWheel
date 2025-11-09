import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import MyLinks from "../Components/MyLinks";

const DashLayout = () => {
  return (
    <div className="bg-gray-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex flex-col lg:flex-row mx-auto">
        <section className="w-full md:w-1/5  md:min-h-screen p-5">
          <div className="text-[10px] md:text-lg flex md:flex-col gap-5 md:gap-2 space-y-5">
            <MyLinks to="/dashboard/overview">Over View</MyLinks>
            <MyLinks to="/dashboard/myprofile">My Profile</MyLinks>
            <MyLinks to="/dashboard/mybooking">My Booking</MyLinks>
            <MyLinks to="/dashboard/mylistings">My List</MyLinks>
            <MyLinks to="/dashboard/add_car">Add A Car</MyLinks>
          </div>
        </section>
        <section className="w-full md:w-4/5 p-5">
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
