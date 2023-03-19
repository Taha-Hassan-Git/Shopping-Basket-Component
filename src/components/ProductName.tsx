import Overline from "./Overline";

interface Props {
  quant: number;
  name: string;
}
const ProductName = ({ quant, name }: Props) => {
  return (
    <div className={"ProductNameBox"}>
      <p className={`ProductName ${quant === 0 && "opacity-25"}`}>{name}</p>
    </div>
  );
};

export default ProductName;
