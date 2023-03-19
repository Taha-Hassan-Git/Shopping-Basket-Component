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
  return (
    <>
      <main className="Basket">
        {/* ProductPrice/Quantity/Total are rendered in this container on big screens */}
        <div className="ProductContainer">
          <Product quant={quant} />
          <ProductPrice price="£650.00" CssClass="above-700" />
          <ProductQuantity
            quant={quant}
            setQuant={setQuant}
            CssClass="above-700"
          />
          <ProductTotal total="£1300.00" CssClass="above-700" />
        </div>
        {/* Or in this container on small screens */}
        <div className="below-700 TotalContainer">
          <ProductPrice price="£650.00" />
          <ProductQuantity quant={quant} setQuant={setQuant} />
          <ProductTotal total="£1300.00" />
        </div>
      </main>
      <div className="Checkout">
        <Subtotal />
        <CheckoutButton quant={quant} />
      </div>
    </>
  );
}

export default Basket;
