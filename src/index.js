import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/HeaderComponent";
import Footer from "./components/footer/FooterComponent";
import Home from "./pages/HomePage/Home";
import Products from "./pages/ProductsPage/Products";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        meta: { page: 1 },
      },
      {
        path: "/products",
        element: <Products />,
        meta: { page: 2 },
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
