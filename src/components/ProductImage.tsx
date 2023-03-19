interface Props {
  quant: number;
}
const ProductImage = ({ quant }: Props) => {
  return (
    <img
      src="./src/assets/Jacket.jpg"
      alt=""
      className={`ProductImage ${quant === 0 && "opacity-25"}`}
    />
  );
};

export default ProductImage;
