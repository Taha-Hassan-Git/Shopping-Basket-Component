import Overline from "./Overline";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";

interface Props {
  quantity: number;
  name: string;
  img: string;
}

const Product = ({ name, img, quantity }: Props) => {
  return (
    <div className="text-align-start">
      <Overline CssClass="basketitem--overline" heading="Product" />
      <div className="basketitem--nameimagewrapper">
        <ProductName quantity={quantity} name={name} />
        <ProductImage quantity={quantity} img={img} />
      </div>
    </div>
  );
};

export default Product;
