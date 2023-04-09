interface Props {
  totalItems: number;
}

const HeaderAmountIcon = ({ totalItems }: Props) => {
  return (
    <div
      className={`header--amounticon ${
        totalItems === 0 && "header--amounticon__inactive"
      }`}
    >
      <p className="header--amounticon--amount">{totalItems}</p>
    </div>
  );
};

export default HeaderAmountIcon;
