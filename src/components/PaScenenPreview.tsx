"use client";
import { SocialIcon } from "react-social-icons";
import { LandingssideProps, NavPaScenen } from "src/app/(site)/pa-scenen/page";
import { ArtikkelLayout } from "src/components/artikkel/ArtkkelLayout";
import { CardItem } from "src/components/CardItem";
import styles from "./PaScenenPreview.module.css";

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
            {event.event && <p className={styles.event}>Event: {event.event}</p>}
            <ul className={styles.authorList}>
              {event.foredragsholdere.map((foredragsholder) => (
                <li key={foredragsholder.navn} className={styles.authorItem}>
                  <p>{foredragsholder.navn}</p>
                  <div className={styles.socialIconContainer}>
                    {foredragsholder.sosialeMedier?.map((sosialtMedie) => (
                      <SocialIcon key={sosialtMedie} url={sosialtMedie} style={{ height: "2rem", width: "2rem" }} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </CardItem>
        ))}
      </ul>
    </ArtikkelLayout>
  );
};
