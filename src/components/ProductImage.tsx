interface Props {
  basketTotal: number;
  img: string;
  quant: number;
}
const ProductImage = ({ basketTotal, img, quant }: Props) => {
  return (
    <img
      src={img}
      alt=""
      className={`ProductImage ${quant === 0 && "opacity-25"}`}
    />
  );
};

export default ProductImage;
