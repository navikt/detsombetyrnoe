interface Props {
  mark: { url: string; filename: string };
  children: React.ReactChild;
}

function FilopplastingLenke(props: Props) {
  return <a href={`${props.mark.url}?dl=${props.mark.filename}`}>{props.children}</a>;
}

export default FilopplastingLenke;
