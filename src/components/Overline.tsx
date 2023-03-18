interface Props {
  heading: string;
}

const Overline = ({ heading }: Props) => {
  return <h2 className="Overline">{heading}</h2>;
};

export default Overline;
