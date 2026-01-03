import { ArtikkelI } from "./types";
import { urlFor } from "../../lib/sanity";
import Video from "../Video";
import style from "./MainMedia.module.css";

function MainMedia(props: ArtikkelI["bilder"][0]) {
  switch (props._type) {
    case "bilde":
      return (
        <img className={style.mainImage} src={urlFor(props).size(1080, 810).quality(80).format("jpg").url() || ""} />
      );
    case "video":
      return <Video title={props.title} url={props.url} />;
    default:
      return null;
  }
}

export default MainMedia;
