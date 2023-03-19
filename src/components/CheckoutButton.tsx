interface Props {
  quant: number;
}

const CheckoutButton = ({ quant }: Props) => {
  return (
    <button
      className={`btn CheckoutButton ${
        quant === 0 && "CheckoutButton--inactive"
      }`}
    >
      Go To Checkout
    </button>
  );
};

export default CheckoutButton;
