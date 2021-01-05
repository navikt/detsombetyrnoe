import { useAmplitude } from "../contexts/amplitude-context";
import Stilling from "./stilling";

const capitalize = (word) => {
  if (typeof word !== "string") return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const Gruppe = ({ stillingsType, stillinger }) => {
  const { logAmplitudeEvent } = useAmplitude();
  const typeStillinger = stillinger.filter((stilling) => stilling.stillingsType === stillingsType);
  if (typeStillinger.length === 0) {
    return null;
  }
  const typeHeader = `col col-12 col-md-10 col-lg-8 stilling-header ${stillingsType}-bg px-0`;
  return (
    <>
      <div className="row mt-5 justify-content-center mx-0">
        <div className={typeHeader}>
          <h3 className="m-0">{capitalize(stillingsType)}</h3>
        </div>
      </div>

      <div className="row justify-content-center">
        <ul className="col col-12 col-md-10 col-lg-8 list-unstyled">
          {typeStillinger.map((stilling) => (
            <Stilling key={stilling.id} {...stilling} logAmplitudeEvent={logAmplitudeEvent} />
          ))}
        </ul>
      </div>
    </>
  );
};

const Stillinger = ({ stillinger }) => {
  return (
    <>
      <div className="row my-4">
        <div className="col text-center">
          <h2 id="ledige-stillinger" className="h1 pt-2 my-4 red-text">
            Ledige <strong>stillinger</strong>
          </h2>
        </div>
      </div>

      <Gruppe stillinger={stillinger} stillingsType={"utvikling"} />
      <Gruppe stillinger={stillinger} stillingsType={"design"} />
      <Gruppe stillinger={stillinger} stillingsType={"analyse"} />
      <Gruppe stillinger={stillinger} stillingsType={"diverse"} />
    </>
  );
};

export default Stillinger;
