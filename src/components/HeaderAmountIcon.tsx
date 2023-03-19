interface Props {
  quant: number;
}
const HeaderAmountIcon = ({ quant }: Props) => {
  return (
    <div className={`AmountIcon ${quant === 0 && "AmountIcon--inactive"}`}>
      <p className="Amount">{quant}</p>
    </div>
  );
};

export default HeaderAmountIcon;
