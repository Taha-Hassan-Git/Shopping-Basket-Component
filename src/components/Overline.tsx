interface Props {
  heading: string;
  CssClass: "Overline" | "Overline Overline-subtotal";
}

const Overline = ({ heading, CssClass }: Props) => {
  return <h2 className={CssClass}>{heading}</h2>;
};

export default Overline;
