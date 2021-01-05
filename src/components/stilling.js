const Stilling = (props) => {
  const { frist, url, title, description, logAmplitudeEvent } = props;

  const handleClick = (event) => {
    event.preventDefault();
    logAmplitudeEvent("Går til stilling", {
      title,
      url,
    });
    window.location.assign(url);
  };
  if (!url) return null;

  return (
    <li className="stilling">
      <i>Frist: {frist}</i>
      <h4>
        <a href={url} onClick={handleClick} target="_blank">
          {title}
        </a>
      </h4>
      <p className="lead">{description}</p>
      <a className="navLink" href={url} onClick={handleClick} target="_blank">
        Les mer om "{title}"
      </a>
    </li>
  );
};

export default Stilling;
