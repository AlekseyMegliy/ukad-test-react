import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/HomePage/Home";
import Products from "./pages/ProductsPage/Products";
import SingleBreed from "./pages/SingleBreedPage/SingleBreed";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store";

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
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleBreed />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
