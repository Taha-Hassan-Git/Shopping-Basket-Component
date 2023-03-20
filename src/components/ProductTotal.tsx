import Overline from "./Overline";

interface Props {
  CssClass?: string;
  price: number;
  quant: number;
}
const ProductTotal = ({ CssClass, price, quant }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline CssClass="Overline" heading="Total" />
      <p className="total">{`£${quant * price}.00`}</p>
    </div>
  );
};

export default ProductTotal;
