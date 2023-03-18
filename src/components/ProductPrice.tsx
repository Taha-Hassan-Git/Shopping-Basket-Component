import Overline from "./Overline";

interface Props {
  CssClass?: string;
  price: string;
}

const ProductPrice = ({ price, CssClass }: Props) => {
  return (
    <div className={"ProductPrice " + CssClass}>
      <Overline heading="Price" />

      <p className="price">{price}</p>
    </div>
  );
};

export default ProductPrice;
