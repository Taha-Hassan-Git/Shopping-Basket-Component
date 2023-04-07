import Header from "./components/Header";
import Basket from "./components/Basket";
import { useState } from "react";
import { IBasketItem } from "./components/types";

function App() {
  const [basket, setBasket] = useState<IBasketItem[]>([]);
  return (
    <>
      <Header basket={basket} />
      <Basket basket={basket} setBasket={setBasket} />
    </>
  );
}

export default App;
