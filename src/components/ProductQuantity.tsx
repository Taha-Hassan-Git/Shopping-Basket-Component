import Overline from "./Overline";
import { IBasketItem } from "../types/types";

interface Props {
  id: number;
  basket: IBasketItem[];
  item: IBasketItem;
  setBasket: React.Dispatch<React.SetStateAction<IBasketItem[]>>;
  CssClass?: string;
  quantity: number;
}

const ProductQuantity = ({
  CssClass,
  basket,
  setBasket,
  id,
  quantity,
  item,
}: Props) => {
  const handleAdd = () => {
    setBasket((prevBasket) => {
      return prevBasket.map((itemInBasket) => {
        if (itemInBasket.id === id) {
          return { ...itemInBasket, quantity: itemInBasket.quantity + 1 };
        } else {
          return itemInBasket;
        }
      });
    });
  };
  const handleMinus = () => {
    setBasket((prevBasket) => {
      return prevBasket.map((itemInBasket) => {
        if (itemInBasket.id === id && itemInBasket.quantity > 0) {
          return { ...itemInBasket, quantity: itemInBasket.quantity - 1 };
        } else {
          return itemInBasket;
        }
      });
    });
  };
  return (
    <div className={CssClass}>
      <Overline CssClass="Overline" heading="Quantity" />
      <div className="Quantity">
        <button
          onClick={handleMinus}
          className={`btn btn-quantity ${quantity === 0 && "opacity-25"}`}
        >
          <svg
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 2H0V0H14V2Z" fill="#3F51B5" />
          </svg>
        </button>
        <p>{quantity}</p>
        <button onClick={handleAdd} className="btn btn-quantity plus">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#3F51B5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
