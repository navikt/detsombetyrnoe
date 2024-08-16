"use client";
import { SocialIcon } from "react-social-icons";
import { LandingssideProps, NavPaScenen } from "src/app/(site)/pa-scenen/page";
import { ArtikkelLayout } from "src/components/artikkel/ArtkkelLayout";
import { CardItem } from "src/components/CardItem";
import { styled } from "styled-components";

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

export const PaScenenPreview = ({ data }: { data: LandingssideProps }) => {
  const paneler = data.landingPage?.paneler;
  return (
    <ArtikkelLayout
      tittel={data.landingPage?.overskrift ?? ""}
      ingress={data.landingPage?.fetUnderskrift ?? ""}
      slug="pa-scenen"
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
  );
};
