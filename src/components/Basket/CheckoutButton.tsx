interface Props {
  totalItems: number;
}

const CheckoutButton = ({ totalItems }: Props) => {
  return (
    <button
      className={`basket--checkoutbtn ${
        totalItems === 0 && "basket--checkoutbtn__inactive"
      }`}
    >
      Go To Checkout
    </button>
  );
};

export default CheckoutButton;
