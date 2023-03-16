import { groq } from "next-sanity";
import { UtviklerHeleNorge } from ".";
import { sanityClient } from "../lib/sanity";
import { Map } from "../components/Map/Map";

const landingssideQuery = groq`{
    "forside": *[_id == "forside"][0] {
        utviklereHeleNorge[] {
          sted,
          geopoint {
            lat,
            lng
          }
        }
      },
    }`;

const Kart = ({ data }: { data: { forside: { utviklereHeleNorge: UtviklerHeleNorge[] } } }) => {
  return (
    <div>
      <h2 style={{ marginBottom: "0.75rem" }}>Vi har utviklere spredt rundt i landet</h2>
      <Map markers={data.forside.utviklereHeleNorge} />
    </div>
  );
};

export async function getStaticProps() {
  const data = await sanityClient.fetch(landingssideQuery);
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default Kart;
