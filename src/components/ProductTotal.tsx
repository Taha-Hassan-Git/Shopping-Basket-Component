import Overline from "./Overline";

interface Props {
  CssClass?: string;
  price: number;
}
const ProductTotal = ({ CssClass, price }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline CssClass="Overline" heading="Total" />
      <p className="total">{`£${0 * price}.00`}</p>
    </div>
  );
};

export default ProductTotal;
