import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductTotal from "./ProductTotal";
import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import Overline from "./Overline";
import Product from "./Product";

function Basket() {
  return (
    <>
      <main className="Basket">
        {/* ProductPrice/Quantity/Total are rendered in this container on big screens */}
        <div className="ProductContainer">
          <Product />
          <ProductPrice price="650" CssClass="above-700" />
          <ProductQuantity CssClass="above-700" />
          <ProductTotal CssClass="above-700" />
        </div>
        {/* Or in this container on small screens */}
        <div className="below-700 TotalContainer">
          <ProductPrice price="650" />
          <ProductQuantity />
          <ProductTotal />
        </div>
      </main>
      <div className="Checkout">
        <Subtotal />
        <CheckoutButton />
      </div>
    </>
  );
}

export default Basket;
