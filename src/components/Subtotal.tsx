import Overline from "./Overline";
import { IBasketItem } from "./types";

interface Props {
  subtotal: number;
  basket: IBasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<IBasketItem[]>>;
}

const Subtotal = ({ subtotal, basket, setBasket }: Props) => {
  return (
    <div className="Subtotal">
      <Overline CssClass="Overline Overline-subtotal" heading="Subtotal:" />
      <p className="Subtotal">{`£${subtotal}.00`}</p>
    </div>
  );
};

export default Subtotal;
