import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import BasketItem from "./BasketItem";
import { IBasketItem } from "../types/types";

interface Props {
  basket: IBasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<IBasketItem[]>>;
}

function Basket({ basket, setBasket }: Props) {
  const getSubtotal = (number: number) => 300;

  return (
    <>
      <main className="Basket">
        {/* CSS classes are used to hide/display components,
        using above-700 and below-700 classNames.
        ProductPrice/Quantity/Total are rendered in this container 
        on big screens */}
        {basket.map((item, index) => (
          <BasketItem
            basket={basket}
            setBasket={setBasket}
            item={item}
            key={index}
          />
        ))}
      </main>
      <div className="Checkout">
        <Subtotal
          basket={basket}
          setBasket={setBasket}
          subtotal={getSubtotal(20)}
        />
        <CheckoutButton />
      </div>
    </>
  );
}

export default Basket;
