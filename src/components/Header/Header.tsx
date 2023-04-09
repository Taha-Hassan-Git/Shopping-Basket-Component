import CartIcon from "../CartIcon";
import LockUp from "../LockUp";
import HeaderAmountIcon from "./HeaderAmountIcon";
import { IBasketItem } from "../../types/types";

interface Props {
  basket: IBasketItem[];
}

function Header({ basket }: Props) {
  return (
    <header className="Header">
      <LockUp />
      <div className="row">
        <CartIcon />
        <HeaderAmountIcon basket={basket} />
      </div>
    </header>
  );
}

export default Header;
