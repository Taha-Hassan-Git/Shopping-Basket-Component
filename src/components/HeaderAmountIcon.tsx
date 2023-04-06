import { IBasketItem } from "./types";

interface Props {
  basket: IBasketItem[];
}

const HeaderAmountIcon = ({ basket }: Props) => {
  return (
    <div className={`AmountIcon ${0 === 0 && "AmountIcon--inactive"}`}>
      <p className="Amount">{0}</p>
    </div>
  );
};

export default HeaderAmountIcon;
