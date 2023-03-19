import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductTotal from "./ProductTotal";
import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import Product from "./Product";

interface Props {
  setQuant: (quant: number) => void;
  quant: number;
}

function Basket({ setQuant, quant }: Props) {
  const WaxedJacket = {
    name: "Waxed Cotton Hooded Jacket",
    img: "./src/assets/Jacket.jpg",
    price: 650,
  };

  const getSubtotal = () => quant * 650;
  return (
    <>
      <main className="Basket">
        {/* ProductPrice/Quantity/Total are rendered in this container on big screens */}
        <div className="ProductContainer">
          <Product
            name={WaxedJacket.name}
            img={WaxedJacket.img}
            quant={quant}
          />
          <ProductPrice
            price={`£${WaxedJacket.price}.00`}
            CssClass="above-700"
          />
          <ProductQuantity
            quant={quant}
            setQuant={setQuant}
            CssClass="above-700"
          />
          <ProductTotal quant={quant} CssClass="above-700" />
        </div>
        {/* Or in this container on small screens */}
        <div className="below-700 TotalContainer">
          <ProductPrice price={`£${WaxedJacket.price}.00`} />
          <ProductQuantity quant={quant} setQuant={setQuant} />
          <ProductTotal quant={quant} />
        </div>
      </main>
      <div className="Checkout">
        <Subtotal subtotal={getSubtotal()} />
        <CheckoutButton quant={quant} />
      </div>
    </>
  );
}

export default Basket;
