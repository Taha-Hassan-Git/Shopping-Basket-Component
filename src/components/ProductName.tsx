import Overline from "./Overline";

interface Props {
  basketTotal: number;
  name: string;
  quant: number;
}
const ProductName = ({ basketTotal, name, quant }: Props) => {
  return (
    <div className={"ProductNameBox"}>
      <p className={`ProductName ${quant === 0 && "opacity-25"}`}>{name}</p>
    </div>
  );
};

export default ProductName;
