import CartIcon from "./CartIcon";
import LockUp from "./LockUp";
import HeaderAmountIcon from "./HeaderAmountIcon";

function Header() {
  return (
    <header className="Header">
      <LockUp />
      <div className="row">
        <CartIcon />
        <HeaderAmountIcon />
      </div>
    </header>
  );
}

export default Header;
