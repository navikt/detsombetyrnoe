import { useEffect, useRef, useState } from "react";
import { useTracking } from "../contexts/tracking-context";
import parse from "html-react-parser";
import { CardItem } from "./CardItem";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { useInViewport } from "react-in-viewport";
import styles from "./stilling.module.css";

const Stilling = (props: any) => {
  const [harVistStilling, setHarVistStilling] = useState(false);
  const { logEvent } = useTracking();
  const { frist, url, title, description } = props;

  const myRef = useRef(null);
  const { inViewport } = useInViewport(myRef);

  if (inViewport && !harVistStilling) {
    setHarVistStilling(true);
  }

  const handleClick = async (event: any) => {
    event.preventDefault();
    logEvent("Går til stilling", {
      title,
      url,
    });

    window.location.assign(url);
  };

  useEffect(() => {
    const logAndShowStilling = async () => {
      if (harVistStilling) {
        logEvent("Viser stilling", {
          title,
          url,
        });
      }
    };
    logAndShowStilling();
  }, [harVistStilling]);

  if (!url) return <></>;

  return (
    <CardItem ref={myRef} className={styles.styledCardItem}>
      <i>Frist: {format(new Date(frist), "dd. MMMM yyyy", { locale: nb })}</i>
      <h3>
        <a href={url} ref={props.forwardedRef} onClick={handleClick} target="_blank">
          {title}
        </a>
      </h3>
      <p className={styles.p}>{parse(description.trim())}</p>
    </CardItem>
  );
};

export default Stilling;
