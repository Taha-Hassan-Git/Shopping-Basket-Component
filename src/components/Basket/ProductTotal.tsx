import Overline from "./Overline";
import { IBasketItem } from "../../types/types";

interface Props {
  CssClass?: string;
  price: number;
  quantity: number;
  total: number;
}
const ProductTotal = ({ CssClass, price, quantity, total }: Props) => {
  return (
    <div className={CssClass}>
      <Overline CssClass="basketitem--overline" heading="Total" />
      <p className="basketitem--total">{`£${total}.00`}</p>
    </div>
  );
};

export default ProductTotal;
