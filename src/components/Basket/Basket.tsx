import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import BasketItem from "./BasketItem";
import { IBasketItem } from "../../types/types";
import "../../styles/basket.css";

interface Props {
  basket: IBasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<IBasketItem[]>>;
  totalItems: number;
}

function Basket({ basket, setBasket, totalItems }: Props) {
  return (
    <>
      <main className="basket">
        {basket.map((item, index) => (
          <BasketItem
            basket={basket}
            setBasket={setBasket}
            item={item}
            key={index}
          />
        ))}
      </main>
      <div className="basket--checkoutcontainer">
        <Subtotal basket={basket} />
        <CheckoutButton totalItems={totalItems} />
      </div>
    </>
  );
}

export default Basket;
