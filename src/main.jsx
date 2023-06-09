import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Order from "./components/Order/Order";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Layout/Home";
import cartProductsLoader from "./Loader/cartProductsLoader";
import CheckOut from "./components/CheckOut/CheckOut";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./components/Providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orders",
        element: <Order />,
        loader: cartProductsLoader,
      },
      {
        path: "/review",
        element: <OrderReview />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
