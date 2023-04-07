import Header from "./components/Header";
import Basket from "./components/Basket";
import { useEffect, useState } from "react";
import { IBasketItem, IProduct } from "./types/types";
import { WaxedJacket, CottonSkirt } from "./assets/Catalogue";

function App() {
  const [basket, setBasket] = useState<IBasketItem[]>([]);

  useEffect(() => {
    setBasket([
      { id: WaxedJacket.id, quantity: 1 },
      { id: CottonSkirt.id, quantity: 1 },
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
