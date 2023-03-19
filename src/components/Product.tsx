import React from "react";
import Overline from "./Overline";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

interface Props {
  quant: number;
  name: string;
  img: string;
}

const Product = ({ quant, name, img }: Props) => {
  return (
    <div className="text-align-start">
      <Overline heading="Product" />
      <div className="NameImageWrapper">
        <ProductName name={name} quant={quant} />
        <ProductImage img={img} quant={quant} />
      </div>
    </div>
  );
};

export default Product;
