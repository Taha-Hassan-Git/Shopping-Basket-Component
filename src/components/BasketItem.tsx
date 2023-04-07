import Product from "./Product";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductTotal from "./ProductTotal";
import { IBasketItem } from "../types/types";

interface Props {
  item: { name: string; img: string; price: number };
  basket: IBasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<IBasketItem[]>>;
}

const BasketItem = ({ item, basket, setBasket }: Props) => {
  return (
    <div className="row BasketItem">
      <div className="ProductContainer">
        <Product name={item.name} img={item.img} />
        <ProductPrice price={`£${item.price}.00`} CssClass="above-700" />
        <ProductQuantity
          basket={basket}
          setBasket={setBasket}
          CssClass="above-700"
        />
        <ProductTotal basket={basket} price={item.price} CssClass="above-700" />
      </div>
      <div className="below-700 TotalContainer">
        <ProductPrice price={`£${item.price}.00`} />
        <ProductQuantity basket={basket} setBasket={setBasket} />
        <ProductTotal basket={basket} price={item.price} />
      </div>
    </div>
  );
};

export default BasketItem;
