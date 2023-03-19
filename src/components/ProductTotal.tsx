import Overline from "./Overline";

interface Props {
  CssClass?: string;
  quant: number;
}
const ProductTotal = ({ CssClass, quant }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline heading="Total" />
      <p className="total">{`£${quant * 650}.00`}</p>
    </div>
  );
};

export default ProductTotal;
