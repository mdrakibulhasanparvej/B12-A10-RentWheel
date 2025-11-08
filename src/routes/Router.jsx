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
import MyListings from "../pages/MyListings";
import AddCar from "../pages/AddCar";
import CarDetails from "../pages/CarDetails";
import Error_404 from "../pages/error/Error_404";

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
    ],
  },
  {
    path: "/auth",
    element: <AuthLayOut />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashLayout,
    children: [
      {
        path: "myprofile",
        Component: MyProfile,
      },
      {
        path: "mybooking",
        Component: MyBooking,
      },
      {
        Path: "mylisting",
        Component: MyListings,
      },
      {
        path: "add_car",
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
