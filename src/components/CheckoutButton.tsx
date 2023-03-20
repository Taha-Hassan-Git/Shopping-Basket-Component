interface Props {
  basketTotal: number;
}

const CheckoutButton = ({ basketTotal }: Props) => {
  return (
    <button
      className={`btn CheckoutButton ${
        basketTotal === 0 && "CheckoutButton--inactive"
      }`}
    >
      Go To Checkout
    </button>
  );
};

export default CheckoutButton;
