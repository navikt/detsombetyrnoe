import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import PreviewBanner from "../components/PreviewBanner";
import { promises as fs } from "fs";
import { ArtikkelLayout, H2 } from "../components/artikkel/ArtkkelLayout";
import { CardItem } from "../components/CardItem";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

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
  sosialeMedier: SosialeMedier[];
}

interface SosialeMedier {
  url: string;
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pa_scenen_json = await fs.readFile("nav_pa_scenen.json", "utf-8");

  return {
    props: {
      data: JSON.parse(pa_scenen_json),
    },
    revalidate: 60,
  };
};

const PreviewWrapper = (props: Props) => {
  const router = useRouter();
  const enablePreview = !!router.query.preview;

  return (
    <>
      {enablePreview && <PreviewBanner />}
      <ArtikkelLayout tittel="Nav på scenen" ingress="En liten ingress her">
        <ul>
          {props.data.map((event: NavPaScenen) => (
            <CardItem key={event.tittel}>
              <a href={event.url} rel="norefferer noopener nofollow">
                <h2>{event.tittel}</h2>
              </a>
              {event.event && <Event>Event: {event.event}</Event>}
              <AuthorList>
                {event.foredragsholdere.map((foredragsholder) => (
                  <AuthorItem key={foredragsholder.navn}>
                    <p>{foredragsholder.navn}</p>
                    <SocialIconContainer>
                      {foredragsholder.sosialeMedier.map((sosialtMedie) => (
                        <StyledSocialIcon key={sosialtMedie.url} url={sosialtMedie.url} />
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
