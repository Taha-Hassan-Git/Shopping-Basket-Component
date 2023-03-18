import React from "react";
import Overline from "./Overline";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

const Product = () => {
  return (
    <div className="text-align-start">
      <Overline heading="Product" />
      <div className="NameImageWrapper">
        <ProductName />
        <ProductImage />
      </div>
    </div>
  );
};

export default Product;
