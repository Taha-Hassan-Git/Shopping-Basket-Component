import Overline from "./Overline";

interface Props {
  CssClass?: string;
}
const ProductQuantity = ({ CssClass }: Props) => {
  const quant = 0;
  return (
    <div className={CssClass}>
      <Overline heading="Quantity" />
      <div className="row justify-center">
        <button className="btn btn-quantity minus">-</button>
        {quant}
        <button className="btn btn-quantity plus">+</button>
      </div>
    </div>
  );
};

export default ProductQuantity;
