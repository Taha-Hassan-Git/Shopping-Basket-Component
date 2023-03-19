import { MouseEvent, useState } from "react";
import Overline from "./Overline";

interface Props {
  CssClass?: string;
}

const ProductQuantity = ({ CssClass }: Props) => {
  const [quant, setQuant] = useState(0);

  return (
    <div className={CssClass}>
      <Overline heading="Quantity" />
      <div className="Quantity">
        <button
          onClick={() => setQuant((quant: number) => quant - 1)}
          className="btn btn-quantity minus"
        >
          <svg
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 2H0V0H14V2Z" fill="#3F51B5" />
          </svg>
        </button>
        <p>{quant}</p>
        <button
          onClick={() => setQuant((quant: number) => quant + 1)}
          className="btn btn-quantity plus"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#3F51B5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
