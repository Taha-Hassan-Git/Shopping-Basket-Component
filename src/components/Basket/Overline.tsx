interface Props {
  heading: string;
  CssClass:
    | "basketitem--overline"
    | "basketitem--overline basketitem--overline__subtotal";
}

const Overline = ({ heading, CssClass }: Props) => {
  return <h2 className={CssClass}>{heading}</h2>;
};

export default Overline;
