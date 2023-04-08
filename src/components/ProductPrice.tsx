import { IBasketItem } from "../types/types";
import Overline from "./Overline";

interface Props {
  quantity: number;
  CssClass?: string;
  price: string;
}

const ProductPrice = ({ price, CssClass, quantity }: Props) => {
  return (
    <div className={"ProductPrice " + CssClass}>
      <Overline CssClass="Overline" heading="Price" />
      <p className={`price ${quantity === 0 && "opacity-25"}`}>{price}</p>
    </div>
  );
};

export default ProductPrice;
