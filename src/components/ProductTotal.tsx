import Overline from "./Overline";
import { IBasketItem } from "../types/types";

interface Props {
  CssClass?: string;
  price: number;
  quantity: number;
  total: number;
}
const ProductTotal = ({ CssClass, price, quantity, total }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline CssClass="Overline" heading="Total" />
      <p className="total">{`£${total}.00`}</p>
    </div>
  );
};

export default ProductTotal;
