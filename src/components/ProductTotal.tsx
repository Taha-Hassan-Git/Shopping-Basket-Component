import Overline from "./Overline";
import { IBasketItem } from "../types/types";

interface Props {
  CssClass?: string;
  price: number;
  quantity: number;
}
const ProductTotal = ({ CssClass, price, quantity }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline CssClass="Overline" heading="Total" />
      <p className="total">{`£${quantity * price}.00`}</p>
    </div>
  );
};

export default ProductTotal;
