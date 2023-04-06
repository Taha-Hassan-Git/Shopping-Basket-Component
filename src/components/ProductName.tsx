import Overline from "./Overline";

interface Props {
  name: string;
}
const ProductName = ({ name }: Props) => {
  return (
    <div className={"ProductNameBox"}>
      <p className={`ProductName ${0 === 0 && "opacity-25"}`}>{name}</p>
    </div>
  );
};

export default ProductName;
