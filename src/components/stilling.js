const Stilling = (props) => {
  const { frist, url, title, description } = props;
  return (
    <li className="stilling">
      <i>Frist: {frist}</i>
      <h4>
        <a href={url} target="_blank">
          {title}
        </a>
      </h4>
      <p className="lead">{description}</p>
      <a className="navLink" href={url} target="_blank">
        Les mer om stillingen
      </a>
    </li>
  );
};

export default Stilling;
