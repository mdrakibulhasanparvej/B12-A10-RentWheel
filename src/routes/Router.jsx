// src/routes/Routes.jsx
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import BrowseCars from "../pages/AllCar/BrowseCars";
import DashLayout from "../layouts/DashLayout";
import MyProfile from "../pages/MyProfile";
import MyBooking from "../pages/MyBooking";
import CarDetails from "../pages/cardetails/CarDetails";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import MyListing from "../pages/MyListing";
import OverView from "../pages/OverView";
import Spinner from "../Components/Spinner";
import AddNewCar from "../pages/AddNewCar";
import NotFound from "../pages/error/NotFound";

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
        Component: BrowseCars,
        loader: () => fetch("http://localhost:5000/cars"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/cardetails/:id",
        Component: CarDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
        hydrateFallbackElement: <Spinner />,
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
        Component: AddNewCar,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
