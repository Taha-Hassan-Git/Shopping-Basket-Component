import { useState } from "react";
import Product from "./Product";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductTotal from "./ProductTotal";

interface Props {
  item: { name: string; img: string; price: number };
}

const BasketItem = ({ item }: Props) => {
  return (
    <div className="row BasketItem">
      <div className="ProductContainer">
        <Product name={item.name} img={item.img} />
        <ProductPrice price={`£${item.price}.00`} CssClass="above-700" />
        <ProductQuantity CssClass="above-700" />
        <ProductTotal price={item.price} CssClass="above-700" />
      </div>
      <div className="below-700 TotalContainer">
        <ProductPrice price={`£${item.price}.00`} />
        <ProductQuantity />
        <ProductTotal price={item.price} />
      </div>
    </div>
  );
};

export default BasketItem;
