import CartIcon from "./CartIcon";
import LockUp from "./LockUp";
import HeaderAmountIcon from "./HeaderAmountIcon";

interface Props {
  basketTotal: number;
}

function Header({ basketTotal }: Props) {
  return (
    <header className="Header">
      <LockUp />
      <div className="row">
        <CartIcon />
        <HeaderAmountIcon basketTotal={basketTotal} />
      </div>
    </header>
  );
}

export default Header;
