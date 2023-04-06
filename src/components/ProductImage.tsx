interface Props {
  img: string;
}
const ProductImage = ({ img }: Props) => {
  return (
    <img
      src={img}
      alt=""
      className={`ProductImage ${0 === 0 && "opacity-25"}`}
    />
  );
};

export default ProductImage;
