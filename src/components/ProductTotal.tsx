import Overline from "./Overline";

interface Props {
  CssClass?: string;
}
const ProductTotal = ({ CssClass }: Props) => {
  return (
    <div className={"ProductTotal " + CssClass}>
      <Overline heading="Total" />
      <p className="total">£650.00</p>
    </div>
  );
};

export default ProductTotal;
