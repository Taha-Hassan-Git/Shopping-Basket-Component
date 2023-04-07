import { IBasketItem } from "../types/types";

interface Props {
  basket: IBasketItem[];
}
function getTotalQuantity(basket: IBasketItem[]): number {
  return basket.reduce((total, currentProduct) => {
    return total + currentProduct.quantity;
  }, 0);
}

const HeaderAmountIcon = ({ basket }: Props) => {
  return (
    <div
      className={`AmountIcon ${
        getTotalQuantity(basket) === 0 && "AmountIcon--inactive"
      }`}
    >
      <p className="Amount">{getTotalQuantity(basket)}</p>
    </div>
  );
};

export default HeaderAmountIcon;
