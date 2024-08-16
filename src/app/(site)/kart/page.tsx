import { groq } from "next-sanity";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { Map } from "src/components/Map/Map";
import { UtviklerHeleNorge } from "src/app/(site)/page";

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

const Page = async () => {
  const data = await sanityFetch<{ forside: { utviklereHeleNorge: UtviklerHeleNorge[] } }>({
    query: landingssideQuery,
  });

  return (
    <div>
      <h2 style={{ marginBottom: "0.75rem" }}>Vi har utviklere spredt rundt i landet</h2>
      <Map markers={data.forside?.utviklereHeleNorge} />
    </div>
  );
};

export default Page;
