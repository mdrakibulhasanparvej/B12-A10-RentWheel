import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import MyLinks from "../Components/MyLinks";

const DashLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="grid grid-cols-12 my-5">
        <section className="col-span-2 min-h-screen border p-5">
          <div className="flex flex-col space-y-5">
            <MyLinks to="/dashboard/overview">Over View</MyLinks>
            <MyLinks to="/dashboard/myprofile">My Profile</MyLinks>
            <MyLinks to="/dashboard/mybooking">My Booking</MyLinks>
            <MyLinks to="/dashboard/mylistings">My List</MyLinks>
            <MyLinks to="/dashboard/add_car">Add A Car</MyLinks>
          </div>
        </section>
        <section className="col-span-10 border p-5">
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
