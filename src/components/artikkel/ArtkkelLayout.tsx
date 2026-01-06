import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./ArtkkelLayout.module.css";

interface Props {
  tittel: string;
  undertittel?: string;
  ingress: string;
  slug: string;
  children: React.ReactNode;
}

const sikkerhetSlugs = ["hvorfor-jobbe-med-sikkerhet-i-nav", "sikkerhetshandtering-i-nav"];

const isSikkerhetsArtikkel = (slug: string) => {
  return sikkerhetSlugs.includes(slug);
};

export const ArtikkelLayout = (props: Props) => {
  const { tittel, undertittel, ingress, children } = props;
  return (
    <div className={styles.style}>
      <Head>
        <title>{tittel}</title>
      </Head>
      <Header isSikkerhet={isSikkerhetsArtikkel(props.slug)} />
      <main>
        <h1 className={styles.h1}>{tittel}</h1>
        {undertittel && <h2 className={styles.h2}>{undertittel}</h2>}
        <p className={styles.ingress}>{ingress}</p>
        {children}
      </main>
      <Footer isSikkerhet={isSikkerhetsArtikkel(props.slug)} />
    </div>
  );
};
