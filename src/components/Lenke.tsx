interface Props {
  mark: { href: string };
  children: React.ReactChild;
}

function Lenke(props: Props) {
  return <a href={props.mark.href}>{props.children}</a>;
}

export default Lenke;
