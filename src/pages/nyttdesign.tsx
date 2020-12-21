import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Panel from "../components/Panel";
import { navFrontend } from "../styles/navFarger";
import Githubstats from "./githubstats";
import Nøkkeltall, { NøkkeltallData } from "../components/nøkkeltall/Nøkkeltall";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";
import HvemViEr from "../components/HvemViEr";

const GlobalStyle = createGlobalStyle`
h1, h2, h3, h4, h5 {
  font-weight: bold;
  line-height: .8;
}
h1 {
  font-size: 7rem;
}
h2 {
  font-size: 5rem;
}
h3 {
  font-size: 3rem;
}
h4 {
  font-size: 2rem;
}
h5 {
  font-size: 1.5rem;
}
a  {
  color: #FF6AA0;
}
`;

interface Props {
  nokkeltallData?: NøkkeltallData;
}

export default function NyttDesign(props: Props) {
  return (
    <>
      <GlobalStyle />
      <Panel backgroundColor={"white"} fontColor="black">
        Hei på deg
      </Panel>
      <HvemViEr />
      <Nøkkeltall nokkeltall={props.nokkeltallData?.nokkeltall} />
      <Panel backgroundColor={navFrontend.navLysBla} fontColor="black">
        Litt mer innhold
      </Panel>
      <Panel backgroundColor={"white"} fontColor="black">
        Bli med oss
      </Panel>
      <Githubstats />
    </>
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
