interface Props {
  quant: number;
}
const HeaderAmountIcon = ({ quant }: Props) => {
  return (
    <div className="AmountIcon">
      <p className="Amount">{quant}</p>
    </div>
  );
};

export default HeaderAmountIcon;
