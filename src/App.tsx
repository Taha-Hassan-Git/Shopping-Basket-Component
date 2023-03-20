import Header from "./components/Header";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [basketTotal, setBasketTotal] = useState(0);
  return (
    <>
      <Header basketTotal={basketTotal} />
      <Basket setBasketTotal={setBasketTotal} basketTotal={basketTotal} />
    </>
  );
}

export default App;
