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
  const CottonSkirt = {
    name: "Black Cotton Skirt",
    img: "./src/assets/CottonSkirt.png",
    price: 325,
  };

  const basketItems = [WaxedJacket];

  const getSubtotal = () => quant * 650;

  return (
    <>
      <main className="Basket">
        {/* CSS classes are used to hide/display components,
        using above-700 and below-700 classNames.
        ProductPrice/Quantity/Total are rendered in this container 
        on big screens */}
        {basketItems.map((item) => (
          <div className="row">
            <div className="ProductContainer">
              <Product name={item.name} img={item.img} quant={quant} />
              <ProductPrice
                quant={quant}
                price={`£${item.price}.00`}
                CssClass="above-700"
              />
              <ProductQuantity
                quant={quant}
                setQuant={setQuant}
                CssClass="above-700"
              />
              <ProductTotal quant={quant} CssClass="above-700" />
            </div>
            <div className="below-700 TotalContainer">
              <ProductPrice quant={quant} price={`£${WaxedJacket.price}.00`} />
              <ProductQuantity quant={quant} setQuant={setQuant} />
              <ProductTotal quant={quant} />
            </div>
          </div>
        ))}
      </main>
      <div className="Checkout">
        <Subtotal subtotal={getSubtotal()} />
        <CheckoutButton quant={quant} />
      </div>
    </>
  );
}

export default Basket;
