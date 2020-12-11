import * as React from "react";
import styled from "styled-components";
import Panel from "../components/Panel";
import { navFrontend } from "../styles/navFarger";
import Githubstats from "./githubstats";
import Nøkkeltall, { NøkkeltallData } from "../components/nøkkeltall/Nøkkeltall";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";

const Style = styled.div``;

interface Props {
  nokkeltallData?: NøkkeltallData;
}

export default function NyttDesign(props: Props) {
  return (
    <Style>
      <Panel backgroundColor={navFrontend.navBlaDarken40} fontColor="white">
        Hei på deg
      </Panel>
      <Nøkkeltall nokkeltall={props.nokkeltallData?.nokkeltall} />
      <Panel backgroundColor={navFrontend.navBlaDarken40} fontColor="white">
        Nytt panel
      </Panel>
      <Panel backgroundColor={navFrontend.navLilla} fontColor="white">
        Litt mer innhold
      </Panel>
      <Githubstats />
    </Style>
  );
}

const nøkkeltallQuery = groq`*[_id == "nokkeltall"][0]
{
    nokkeltall
}`;

export async function getStaticProps({ preview = false }) {
  const nokkeltallData = await getClient(preview).fetch(nøkkeltallQuery);
  return {
    props: {
      preview,
      nokkeltallData,
    },
    revalidate: 60,
  };
}
