import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import BrowseCars from "../pages/AllCar/BrowseCars";
import DashLayout from "../layouts/DashLayout";
import MyProfile from "../pages/MyProfile";
import MyBooking from "../pages/MyBooking";
import CarDetails from "../pages/cardetails/CarDetails";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import MyListing from "../pages/MyListing";
import OverView from "../pages/overview/OverView";
import Loading from "../Components/Loading";
import AddNewCar from "../pages/AddNewCar";
import NotFound from "../pages/error/NotFound";
import PrivateRoutess from "../proviedrs/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: NotFound,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-cars",
        loader: () => fetch("https://rent-wheels-server-eosin.vercel.app/cars"),
        hydrateFallbackElement: <Loading />,
        element: (
          <React.Suspense fallback={<Loading />}>
            <BrowseCars />
          </React.Suspense>
        ),
      },
      {
        path: "/cardetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://rent-wheels-server-eosin.vercel.app/cars/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoutess>
            <React.Suspense fallback={<Loading />}>
              <CarDetails />
            </React.Suspense>
          </PrivateRoutess>
        ),
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
        path: "/auth/Signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashLayout,
    children: [
      {
        path: "/dashboard/overview",
        element: (
          <PrivateRoutess>
            <React.Suspense fallback={<Loading />}>
              <OverView />
            </React.Suspense>
          </PrivateRoutess>
        ),
      },
      {
        path: "/dashboard/myprofile",
        element: (
          <PrivateRoutess>
            <React.Suspense fallback={<Loading />}>
              <MyProfile />
            </React.Suspense>
          </PrivateRoutess>
        ),
      },
      {
        path: "/dashboard/mybooking",
        element: (
          <PrivateRoutess>
            <React.Suspense fallback={<Loading />}>
              <MyBooking />
            </React.Suspense>
          </PrivateRoutess>
        ),
      },
      {
        path: "/dashboard/mylistings",
        element: (
          <PrivateRoutess>
            <React.Suspense fallback={<Loading />}>
              <MyListing />
            </React.Suspense>
          </PrivateRoutess>
        ),
      },
      {
        path: "/dashboard/add_car",
        element: (
          <PrivateRoutess>
            <React.Suspense fallback={<Loading />}>
              <AddNewCar />
            </React.Suspense>
          </PrivateRoutess>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
