const ProductQuantity = () => {
  const quant = 0;
  return (
    <div className='ProductQuantity row'>
    <button className="btn btn-quantity minus">-</button>
    {quant}
    <button className="btn btn-quantity plus">+</button>
    </div>
  )
}

export default ProductQuantity