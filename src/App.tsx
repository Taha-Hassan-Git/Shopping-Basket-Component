import Header from "./components/Header";
import Basket from "./components/Basket";
import { useEffect, useState } from "react";
import { IBasketItem, IProduct } from "./types/types";
import { catalogue } from "./assets/catalogue";

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
        quantity: 5,
      },
    ]);
  }, []);

  return (
    <>
      <Header basket={basket} />
      <Basket basket={basket} setBasket={setBasket} />
    </>
  );
}

export default App;
