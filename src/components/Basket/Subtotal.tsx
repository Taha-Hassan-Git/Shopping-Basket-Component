import Overline from "./Overline";
import { IBasketItem } from "../../types/types";

interface Props {
  basket: IBasketItem[];
}

const Subtotal = ({ basket }: Props) => {
  const subtotal = basket.reduce(
    (total: number, currentProduct: IBasketItem) => {
      return total + currentProduct.quantity * currentProduct.price;
    },
    0
  );
  return (
    <div className="Subtotal">
      <Overline
        CssClass="basketitem--overline basketitem--overline__subtotal"
        heading="Subtotal:"
      />
      <p>{`£${subtotal}.00`}</p>
    </div>
  );
};

export default Subtotal;
