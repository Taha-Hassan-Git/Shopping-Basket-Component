interface Props {}

const CheckoutButton = () => {
  return (
    <button
      className={`btn CheckoutButton ${0 === 0 && "CheckoutButton--inactive"}`}
    >
      Go To Checkout
    </button>
  );
};

export default CheckoutButton;
