import Overline from "./Overline";

interface Props {
  CssClass?: string;
  price: string;
  quant: number;
}

const ProductPrice = ({ price, CssClass, quant }: Props) => {
  return (
    <div className={"ProductPrice " + CssClass}>
      <Overline CssClass="Overline" heading="Price" />
      <p className={`price ${quant === 0 && "opacity-25"}`}>{price}</p>
    </div>
  );
};

export default ProductPrice;
