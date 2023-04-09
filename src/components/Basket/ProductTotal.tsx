import Overline from "./Overline";

interface Props {
  CssClass?: string;
  total: number;
}
const ProductTotal = ({ CssClass, total }: Props) => {
  return (
    <div className={CssClass}>
      <Overline CssClass="basketitem--overline" heading="Total" />
      <p className="basketitem--total">{`£${total}.00`}</p>
    </div>
  );
};

export default ProductTotal;
