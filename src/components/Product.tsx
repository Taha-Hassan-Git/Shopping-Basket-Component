import React, { useState } from "react";
import Overline from "./Overline";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

interface Props {
  name: string;
  img: string;
}

const Product = ({ name, img }: Props) => {
  return (
    <div className="text-align-start">
      <Overline CssClass="Overline" heading="Product" />
      <div className="NameImageWrapper">
        <ProductName name={name} />
        <ProductImage img={img} />
      </div>
    </div>
  );
};

export default Product;
