import Link from "next/link";
import React from "react";
import { useTracking } from "../../contexts/tracking-context";
import styles from "./WebcruiterStillinger.module.css";
//import metrics from "src/lib/metrics";

interface Props {
  tittel: string;
  beskrivelse?: string;
  url: string;
  bildeUrl?: string;
}

export const WebcruiterStillinger = () => {
  const { logEvent } = useTracking();

  const handleClick = (event: any) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    const title = event.currentTarget.title;
    logEvent("Går til kampanjestilling", {
      title,
    });
    //metrics.clickStillingCounter.inc({ title, page: "webcruiter" });
    window.location.assign(url);
  };

  return (
    <div className={styles.style}>
      {/*<div className={styles.tekst}>
        <h2>Er du teknologileder med hjerte for velferdsstaten?</h2>
        <p>
          I Nav har vi som mål å være en ledestjerne for digitalisering i offentlig sektor, og vi har nettopp
          gjennomført en større omorganisering av direktoratet og teknologiavdelingen i Nav. Nå etablerer
          teknologidirektøren en ny ledergruppe som skal drive den strategiske utviklingen av avdelingen og
          teknologiområdet i Nav.
        </p>
      </div>*/}
      <div className={`${styles.flexContainer} ${styles.column}`}>
        {/*<div className={`${styles.flexContainer} ${styles.row}`}>
          <a
            className={styles.stillingPanel}
            href="https://arbeidsplassen.nav.no/stillinger/stilling/55f20b33-d61a-4c8c-ba80-f9ee3b6a51e7"
            title="Avdelingsdirektør data og informasjonsforvaltning"
            onClick={handleClick}
          >
            <h3>Avdelingsdirektør data og informasjonsforvaltning</h3>
            <p>Vil du lede Navs arbeid med data, informasjon og kunstig intelligens?</p>
          </a>
        </div>
        <div className={`${styles.flexContainer} ${styles.row}`}>
          <a
            className={styles.stillingPanel}
            href="https://arbeidsplassen.nav.no/stillinger/stilling/c92b8ea8-da7c-4920-8c18-b1016372ecf7"
            title="Avdelingsdirektør plattform og infrastruktur"
            onClick={handleClick}
          >
            <h3>Avdelingsdirektør plattform og infrastruktur</h3>
            <p>Vil du ta ansvar for plattformene og infrastrukturen velferdsstaten kjører på?</p>
          </a>
        </div>
        <div className={`${styles.flexContainer} ${styles.row}`}>
          <a
            className={styles.stillingPanel}
            href="https://arbeidsplassen.nav.no/stillinger/stilling/e38934a9-95ba-4e13-b5f3-c3ec0d2ef18e"
            title="Avdelingsdirektør utvikling"
            onClick={handleClick}
          >
            <h3>Avdelingsdirektør utvikling</h3>
            <p>Vil du lede teknologene som bygger den norske velferdsstaten?</p>
          </a>
        </div>*/}
        <Link href="/#ledige-stillinger" passHref legacyBehavior>
          <a className={styles.stillingPanel}>
            <h3>Se våre ledige stillinger</h3>
            <p>Vi er stadig på utkikk etter nye kollegaer, sjekk ut ledige stillinger her!</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
