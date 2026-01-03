"use client";
import * as React from "react";
import ForsideProvider from "../../../components/forside/ForsideProvider";
import { Header } from "../../../components/forside/Header";
import CustomComponent from "../../../components/CustomComponent";
import Panel from "../../../components/Panel";
import Nøkkeltall from "../../../components/nøkkeltall/Nøkkeltall";
import { ArtikkelPreview } from "../../../components/artikkel/ArtikkelPreview";
import { WebcruiterStillinger } from "../../../components/landingPage/WebcruiterStillinger";
import Video from "../../../components/Video";
import style from "./Forside.module.css";
import { ForsideProps, PanelProps } from "../../../app/(site)/page";
import { useScrollToHashOnPageLoad } from "../../../utils/useScrollToHashOnPageLoad";

export function getChildren(innhold?: PanelProps["innhold"]) {
  if (!innhold) {
    return "Mangler innhold";
  }

  switch (innhold._type) {
    case "nokkeltall":
      return <Nøkkeltall {...innhold} />;
    case "placeholder":
      return innhold.tittel;
    case "artikkel":
      return <ArtikkelPreview {...innhold} />;
    default:
      // @ts-ignore
      return `Fant ikke innhold for ${innhold._type} 🤷‍♀️`;
  }
}

export const Forside = (props: ForsideProps) => {
  useScrollToHashOnPageLoad();

  return (
    <ForsideProvider forsideProps={props}>
      <Header
        overskrift={props.forside?.overskrift}
        underoverskrift={props.forside?.underoverskrift}
        //bakgrunnsvideo={props.forside?.bakgrunnsvideo}
        bildeSrc="/NAV_postgres_still_banner.jpg"
        lysTekst={props.forside?.lysTekst}
        visGithubLenke={true}
      />
      <div id="content" />
      {/*<Panel lysBakgrunn={true} lysTekst={false}>
        <WebcruiterStillinger />
      </Panel>*/}
      {props.forside?.paneler?.map((panel) => {
        if (panel._type === "video") {
          return (
            <div key={panel._key}>
              <div className={style.panelWrapper}>
                <div className={style.videoWrapper}>
                  {panel.heading && (
                    <h2 style={{ marginBlockStart: "2rem", marginBlockEnd: "1.5rem" }}>{panel.heading}</h2>
                  )}
                  <Video title={panel.title} url={panel.url} />
                </div>
              </div>
            </div>
          );
        }

        if (panel._type === "customComponent") {
          return (
            <CustomComponent
              {...panel}
              stillinger={props.stillinger ?? []}
              utviklereHeleNorge={props.forside?.utviklereHeleNorge}
              key={panel.id}
            />
          );
        }
        if (panel._type === "panel") {
          return (
            <Panel
              key={panel._key}
              lysBakgrunn={panel.lysBakgrunn}
              lysTekst={panel.lysTekst}
              children={getChildren(panel.innhold)}
            />
          );
        }
      })}
    </ForsideProvider>
  );
};
