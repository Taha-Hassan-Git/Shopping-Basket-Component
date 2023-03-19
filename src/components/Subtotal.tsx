import Overline from "./Overline";

interface Props {
  subtotal: number;
}

const Subtotal = ({ subtotal }: Props) => {
  return (
    <div className="Subtotal">
      <Overline heading="Subtotal:" />
      <p className="Subtotal">{`£${subtotal}.00`}</p>
    </div>
  );
};

export default Subtotal;
