import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import PreviewBanner from "../components/PreviewBanner";
import { promises as fs } from "fs";
import { ArtikkelLayout, H2 } from "../components/artikkel/ArtkkelLayout";
import { CardItem } from "../components/CardItem";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { groq } from "next-sanity";
import { metaDataGroq } from "../utils/groq";
import { sanityClient } from "../lib/sanity";
import { MetadataI } from ".";

export interface LandingssideProps {
  landingPage?: {
    overskrift: string;
    underoverskrift: string;
    fetUnderskrift?: string;
    bakgrunnsfarge?: string;
    lysTekst?: boolean;
    paneler?: NavPaScenen[];
    previewImage?: any;
  };
  metaData: MetadataI;
}
interface Props {
  data: NavPaScenen[];
}

interface NavPaScenen {
  tittel: string;
  url: string;
  event?: string;
  foredragsholdere: Foredragsholder[];
}

interface Foredragsholder {
  navn: string;
  sosialeMedier: string[];
}

const Event = styled.p`
  margin-block-start: 1rem;
  margin-block-end: 1rem;
`;

const AuthorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const AuthorItem = styled.li`
  min-width: 15rem;
  padding: 1rem;
  border: 1px solid #f0eeee;
`;

const SocialIconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledSocialIcon = styled(SocialIcon)`
  height: 2rem !important;
  width: 2rem !important;
`;

const landingssideQuery = groq`
{
    "landingPage": *[_type == "landingPage" && slug.current == "pa-scenen"][0] {
        overskrift,
        underoverskrift,
        fetUnderskrift,
        bakgrunnsfarge,
        lysTekst,
        previewImage,
        paneler[] {
          _key,
          id,
          _type,
          tittel,
          event,
          foredragsholdere[]-> {
            navn,
            mainImage,
            "slug": slug.current,
            "sosialeMedier": sosiale_medier[],
          }
        }
      },
    ${metaDataGroq},
}`;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await sanityClient.fetch(landingssideQuery);
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

const PreviewWrapper = (props: { data: LandingssideProps }) => {
  const router = useRouter();
  const enablePreview = !!router.query.preview;

  const paneler = props.data.landingPage?.paneler;

  console.log("paneler", paneler);

  return (
    <>
      {enablePreview && <PreviewBanner />}
      <ArtikkelLayout
        tittel={props.data.landingPage?.overskrift ?? ""}
        ingress={props.data.landingPage?.fetUnderskrift ?? ""}
      >
        <ul>
          {paneler?.map((event: NavPaScenen) => (
            <CardItem key={event.tittel}>
              <a href={event.url} rel="norefferer noopener nofollow">
                <h2>{event.tittel}</h2>
              </a>
              {event.event && <Event>Event: {event.event}</Event>}
              <AuthorList>
                {event.foredragsholdere.map((foredragsholder) => (
                  <AuthorItem key={foredragsholder.navn}>
                    {console.log(foredragsholder)}
                    <p>{foredragsholder.navn}</p>
                    <SocialIconContainer>
                      {foredragsholder.sosialeMedier?.map((sosialtMedie) => (
                        <StyledSocialIcon key={sosialtMedie} url={sosialtMedie} />
                      ))}
                    </SocialIconContainer>
                  </AuthorItem>
                ))}
              </AuthorList>
            </CardItem>
          ))}
        </ul>
      </ArtikkelLayout>
    </>
  );
};

export default PreviewWrapper;
