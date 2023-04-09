import { IBasketItem } from "../../types/types";
import Overline from "./Overline";

interface Props {
  quantity: number;
  CssClass?: string;
  price: string;
}

const ProductPrice = ({ price, CssClass, quantity }: Props) => {
  return (
    <div className={CssClass}>
      <Overline CssClass="basketitem--overline" heading="Price" />
      <p className={`basketitem--price ${quantity === 0 && "opacity-25"}`}>
        {price}
      </p>
    </div>
  );
};

export default ProductPrice;
