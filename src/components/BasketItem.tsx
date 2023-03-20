import { useState } from "react";
import Product from "./Product";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductTotal from "./ProductTotal";

interface Props {
  item: { name: string; img: string; price: number };
  basketTotal: number;
  setBasketTotal: (baskettotal: number) => void;
}

const BasketItem = ({ item, basketTotal, setBasketTotal }: Props) => {
  const [quant, setQuant] = useState(0);
  return (
    <div className="row BasketItem">
      <div className="ProductContainer">
        <Product
          quant={quant}
          name={item.name}
          img={item.img}
          basketTotal={basketTotal}
        />
        <ProductPrice
          quant={quant}
          price={`£${item.price}.00`}
          CssClass="above-700"
        />
        <ProductQuantity
          quant={quant}
          setQuant={setQuant}
          basketTotal={basketTotal}
          setBasketTotal={setBasketTotal}
          CssClass="above-700"
        />
        <ProductTotal quant={quant} price={item.price} CssClass="above-700" />
      </div>
      <div className="below-700 TotalContainer">
        <ProductPrice quant={quant} price={`£${item.price}.00`} />
        <ProductQuantity
          quant={quant}
          setQuant={setQuant}
          basketTotal={basketTotal}
          setBasketTotal={setBasketTotal}
        />
        <ProductTotal quant={quant} price={item.price} />
      </div>
    </div>
  );
};

export default BasketItem;
