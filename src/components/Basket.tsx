import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import BasketItem from "./BasketItem";

interface Props {}

function Basket() {
  const WaxedJacket = {
    name: "Waxed Cotton Hooded Jacket",
    img: "./src/assets/Jacket.jpg",
    price: 650,
  };
  const CottonSkirt = {
    name: "Black Cotton Skirt",
    img: "./src/assets/CottonSkirt.png",
    price: 325,
  };

  const basketItems = [WaxedJacket, CottonSkirt];

  const getSubtotal = (number: number) => 300;

  return (
    <>
      <main className="Basket">
        {/* CSS classes are used to hide/display components,
        using above-700 and below-700 classNames.
        ProductPrice/Quantity/Total are rendered in this container 
        on big screens */}
        {basketItems.map((item, index) => (
          <BasketItem item={item} key={index} />
        ))}
      </main>
      <div className="Checkout">
        <Subtotal subtotal={getSubtotal(20)} />
        <CheckoutButton />
      </div>
    </>
  );
}

export default Basket;
