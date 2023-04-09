import { IBasketItem } from "../../types/types";

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
      className={`header--amounticon ${
        getTotalQuantity(basket) === 0 && "header--amounticon__inactive"
      }`}
    >
      <p className="header--amounticon--amount">{getTotalQuantity(basket)}</p>
    </div>
  );
};

export default HeaderAmountIcon;
