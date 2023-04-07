import Overline from "./Overline";
import { IBasketItem } from "../types/types";

interface Props {
  CssClass?: string;
  price: number;
  basket: IBasketItem[];
}
const ProductTotal = ({ CssClass, price, basket }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline CssClass="Overline" heading="Total" />
      <p className="total">{`£${0 * price}.00`}</p>
    </div>
  );
};

export default ProductTotal;
