import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import CheckOut from "../pages/Checkout/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-five-swart.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoutes>
            <Bookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
