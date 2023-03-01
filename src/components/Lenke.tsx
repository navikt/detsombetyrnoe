interface Props {
  value?: { href: string };
  children: React.ReactNode;
}

function Lenke(props: Props) {
  return <a href={props.value?.href}>{props.children}</a>;
}

export default Lenke;
