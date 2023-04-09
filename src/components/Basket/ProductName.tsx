import { IBasketItem } from "../../types/types";
import Overline from "./Overline";

interface Props {
  quantity: number;
  name: string;
}
const ProductName = ({ name, quantity }: Props) => {
  return (
    <div className={"ProductNameBox"}>
      <p className={`ProductName ${quantity === 0 && "opacity-25"}`}>{name}</p>
    </div>
  );
};

export default ProductName;
