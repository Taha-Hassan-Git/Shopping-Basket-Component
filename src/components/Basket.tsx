import ProductImage from './ProductImage'
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductTotal from './ProductTotal';
import Subtotal from './Subtotal';
import CheckoutButton from './CheckoutButton';

function Basket(){
    return <main className='BasketContainer'>
            <div className="Basket">
            <div className='ProductContainer'>
            <ProductName />
            <ProductImage />
            </div>  
            <div className="TotalContainer">
            <ProductPrice />
            <ProductQuantity />
            <ProductTotal />    
            </div>
            </div>
            <Subtotal />
            <CheckoutButton />
            </main>
}
export default Basket;