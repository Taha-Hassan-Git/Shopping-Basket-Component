import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import { useEffect, useState } from "react";
import { IBasketItem, IProduct } from "./types/types";
import { catalogue } from "../public/assets/catalogue";

function App() {
  const [basket, setBasket] = useState<IBasketItem[]>([]);

  useEffect(() => {
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

  return (
    <div className="app">
      <Header basket={basket} />
      <Basket basket={basket} setBasket={setBasket} />
    </div>
  );
}

export default App;
