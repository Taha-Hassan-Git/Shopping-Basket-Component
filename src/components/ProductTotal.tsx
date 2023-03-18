interface Props {
  CssClass?: string;
}
const ProductTotal = ({ CssClass }: Props) => {
  return <div className={"ProductTotal " + CssClass}>£650.00</div>;
};

export default ProductTotal;
