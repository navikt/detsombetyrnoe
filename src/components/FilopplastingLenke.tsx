interface Props {
  value?: { url: string; filename: string };
  children: React.ReactNode;
}

function FilopplastingLenke(props: Props) {
  return <a href={`${props.value?.url}?dl=${props.value?.filename}`}>{props.children}</a>;
}

export default FilopplastingLenke;
