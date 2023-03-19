interface Props {
  quant: number;
  img: string;
}
const ProductImage = ({ quant, img }: Props) => {
  return (
    <img
      src={img}
      alt=""
      className={`ProductImage ${quant === 0 && "opacity-25"}`}
    />
  );
};

export default ProductImage;
