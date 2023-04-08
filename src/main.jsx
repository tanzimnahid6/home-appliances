import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import Shop from "./components/Shop";
import { addToDb } from "./utilities/utilities";
import { getProductsAndCartData } from "./utilities/getProductsAndCartData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
        loader: () => fetch("produtcs.json"),
      },
      {
        path: "cart",
        element: <Cart></Cart>,
        loader: getProductsAndCartData,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
