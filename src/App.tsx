import "./App.css";
import Header from "./components/Header";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [quant, setQuant] = useState(0);
  return (
    <>
      <Header quant={quant} />
      <Basket setQuant={setQuant} quant={quant} />
    </>
  );
}

export default App;
