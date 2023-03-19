import Overline from "./Overline";

interface Props {
  quant: number;
}
const ProductName = ({ quant }: Props) => {
  const productName = "Waxed Cotton Hooded Jacket";
  return (
    <div className={"ProductNameBox"}>
      <p className={`ProductName ${quant === 0 && "opacity-25"}`}>
        {productName}
      </p>
    </div>
  );
};

export default ProductName;
