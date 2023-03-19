import React from "react";
import Overline from "./Overline";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

interface Props {
  quant: number;
}

const Product = ({ quant }: Props) => {
  return (
    <div className="text-align-start">
      <Overline heading="Product" />
      <div className="NameImageWrapper">
        <ProductName quant={quant} />
        <ProductImage quant={quant} />
      </div>
    </div>
  );
};

export default Product;
