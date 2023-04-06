import Overline from "./Overline";

interface Props {
  CssClass?: string;
  price: string;
}

const ProductPrice = ({ price, CssClass }: Props) => {
  return (
    <div className={"ProductPrice " + CssClass}>
      <Overline CssClass="Overline" heading="Price" />
      <p className={`price ${0 === 0 && "opacity-25"}`}>{price}</p>
    </div>
  );
};

export default ProductPrice;
