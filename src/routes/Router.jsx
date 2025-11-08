// src/routes/Routes.jsx
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import BrowseCars from "../pages/BrowseCars";
import DashLayout from "../layouts/DashLayout";
import MyProfile from "../pages/MyProfile";
import MyBooking from "../pages/MyBooking";

import AddCar from "../pages/AddCar";
import CarDetails from "../pages/CarDetails";
import Error_404 from "../pages/error/Error_404";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import MyListing from "../pages/MyListing";
import OverView from "../pages/OverView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: Error_404,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-cars",
        Component: BrowseCars,
      },
      {
        path: "/aboutus",
        Component: AboutUs,
      },
      {
        path: "/contactus",
        Component: ContactUs,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayOut />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashLayout,
    children: [
      {
        path: "/dashboard/overview",
        Component: OverView,
      },
      {
        path: "/dashboard/myprofile",
        Component: MyProfile,
      },
      {
        path: "/dashboard/mybooking",
        Component: MyBooking,
      },
      {
        path: "/dashboard/mylistings",
        Component: MyListing,
      },
      {
        path: "/dashboard/add_car",
        Component: AddCar,
      },
    ],
  },
  {
    path: "/car-details",
    Component: CarDetails,
  },
  {
    path: "*",
    Component: Error_404,
  },
]);

export default router;
