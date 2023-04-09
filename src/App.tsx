import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import { useEffect, useState } from "react";
import { IBasketItem } from "./types/types";
import { catalogue } from "../public/assets/catalogue";

function App() {
  const [basket, setBasket] = useState<IBasketItem[]>([]);

  useEffect(() => {
    //Useeffect adds items to the basket in order to demo the component
    //in a real application it would be added via a button in the store
    setBasket([
      {
        id: catalogue.WaxedJacket.id,
        price: catalogue.WaxedJacket.price,
        quantity: 2,
      },
      {
        id: catalogue.CottonSkirt.id,
        price: catalogue.CottonSkirt.price,
        quantity: 1,
      },
    ]);
  }, []);

  function getTotalQuantity(basket: IBasketItem[]): number {
    return basket.reduce((total, currentProduct) => {
      return total + currentProduct.quantity;
    }, 0);
  }
  const totalItems = getTotalQuantity(basket);
  return (
    <div className="app">
      <Header totalItems={totalItems} />
      <Basket totalItems={totalItems} basket={basket} setBasket={setBasket} />
    </div>
  );
}

export default App;
