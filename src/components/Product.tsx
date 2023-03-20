import React, { useState } from "react";
import Overline from "./Overline";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

interface Props {
  basketTotal: number;
  name: string;
  img: string;
  quant: number;
}

const Product = ({ basketTotal, name, img, quant }: Props) => {
  return (
    <div className="text-align-start">
      <Overline CssClass="Overline" heading="Product" />
      <div className="NameImageWrapper">
        <ProductName quant={quant} name={name} basketTotal={basketTotal} />
        <ProductImage quant={quant} img={img} basketTotal={basketTotal} />
      </div>
    </div>
  );
};

export default Product;
