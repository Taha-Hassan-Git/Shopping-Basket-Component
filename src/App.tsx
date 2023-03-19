import "./App.css";
import Header from "./components/Header";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const WaxedJacket = {
    name: "Waxed Cotton Hooded Jacket",
    img: "./src/assets/Jacket.jpg",
    price: 650,
  };
  const [quant, setQuant] = useState(0);
  return (
    <>
      <Header quant={quant} />
      <Basket product={WaxedJacket} setQuant={setQuant} quant={quant} />
    </>
  );
}

export default App;
