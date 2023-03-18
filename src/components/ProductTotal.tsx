import Overline from "./Overline";

interface Props {
  total: string;
  CssClass?: string;
}
const ProductTotal = ({ CssClass, total }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline heading="Total" />
      <p className="total">{total}</p>
    </div>
  );
};

export default ProductTotal;
