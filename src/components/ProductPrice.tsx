interface Props {
  CssClass?: string;
  price: string;
}

const ProductPrice = ({ price, CssClass }: Props) => {
  return <div className={"ProductPrice " + CssClass}>{price}</div>;
};

export default ProductPrice;
