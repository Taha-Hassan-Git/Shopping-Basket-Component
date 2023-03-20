interface Props {
  basketTotal: number;
}
const HeaderAmountIcon = ({ basketTotal }: Props) => {
  return (
    <div
      className={`AmountIcon ${basketTotal === 0 && "AmountIcon--inactive"}`}
    >
      <p className="Amount">{basketTotal}</p>
    </div>
  );
};

export default HeaderAmountIcon;
