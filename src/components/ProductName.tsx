import Overline from "./Overline";

const ProductName = () => {
  const productName = "Waxed Cotton Hooded Jacket";
  return (
    <div className="ProductNameBox">
      <Overline heading="Product" />
      <p className="ProductName">{productName}</p>
    </div>
  );
};

export default ProductName;
