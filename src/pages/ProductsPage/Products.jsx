import React from "react";
import Header from "../../components/header/HeaderComponent";
import ProductsMain from "../../components/productsMain/ProductsMainComponent";
import Footer from "../../components/footer/FooterComponent";
import "./products.css";

export default function Products() {
  return (
    <div className="products">
      <Header page={2} />
      <ProductsMain />
      <Footer />
    </div>
  );
}
