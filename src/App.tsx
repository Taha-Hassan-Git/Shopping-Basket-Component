import Header from "./components/Header";
import Basket from "./components/Basket";
import { useEffect, useState } from "react";
import { IBasketItem, IProduct } from "./types/types";
import { catalogue } from "./assets/catalogue";

function App() {
  const [basket, setBasket] = useState<IBasketItem[]>([]);

  useEffect(() => {
    setBasket([
      { id: catalogue.WaxedJacket.id, quantity: 2 },
      { id: catalogue.CottonSkirt.id, quantity: 5 },
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
