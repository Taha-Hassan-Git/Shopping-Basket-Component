interface Props {
  quantity: number;
  name: string;
}
const ProductName = ({ name, quantity }: Props) => {
  return (
    <div className={"basketitem--productnamebox"}>
      <p
        className={`basketitem--productname ${quantity === 0 && "opacity-25"}`}
      >
        {name}
      </p>
    </div>
  );
};

export default ProductName;
