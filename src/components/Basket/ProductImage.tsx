interface Props {
  img: string;
  quantity: number;
}
const ProductImage = ({ img, quantity }: Props) => {
  return (
    <img
      src={img}
      alt=""
      className={`basketitem--productimage ${quantity === 0 && "opacity-25"}`}
    />
  );
};

export default ProductImage;
