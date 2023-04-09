import CartIcon from "./CartIcon";
import LockUp from "./LockUp";
import HeaderAmountIcon from "./HeaderAmountIcon";
import { IBasketItem } from "../../types/types";
import "../../styles/header.css";

interface Props {
  totalItems: number;
}

function Header({ totalItems }: Props) {
  return (
    <header className="header">
      <LockUp />
      <div className="row">
        <CartIcon />
        <HeaderAmountIcon totalItems={totalItems} />
      </div>
    </header>
  );
}

export default Header;
