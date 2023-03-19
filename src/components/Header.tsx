import CartIcon from "./CartIcon";
import LockUp from "./LockUp";
import HeaderAmountIcon from "./HeaderAmountIcon";

interface Props {
  quant: number;
}

function Header({ quant }: Props) {
  return (
    <header className="Header">
      <LockUp />
      <div className="row">
        <CartIcon />
        <HeaderAmountIcon quant={quant} />
      </div>
    </header>
  );
}

export default Header;
