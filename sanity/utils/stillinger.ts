import fetch from "node-fetch";
import striptags from "striptags";
import sanityClient from "@sanity/client";
import { format } from "date-fns";

const client = sanityClient({
  projectId: "c9hptfq7",
  dataset: "production",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const searchUrl = "https://arbeidsplassen.nav.no/stillinger/api/search?q=nav&occupationFirstLevels[]=IT";
const addUrl = "https://arbeidsplassen.nav.no/stillinger/api/stilling";
const applyUrl = "https://arbeidsplassen.nav.no/stillinger/stilling";

const createDescription = (text) => {
  text = text.replace(/<p>/g, "\n");
  text = text.replace(/<\/p>/g, "\n");
  text = text.replace(/<br \/>/g, "\n");
  const lines = text
    .split("\n")
    .filter((line) => line !== "")
    .slice(1);
  let description = lines.shift().trim();
  while (lines.length > 0 && !(description.endsWith(".") || description.endsWith("!") || description.endsWith("?"))) {
    description = `${description} ${lines.shift().trim()}`;
  }
  return striptags(description);
};

const fetcher = (url: string) => {
  const result = fetch(url)
    .then((result) => result.json())
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return result;
};

const filterResultsAndMapToUrl = (results) => {
  if (!results) return [];
  return results
    .map((stilling) => stilling._source)
    .filter(
      (stilling) =>
        /nav_webcruiter/i.test(stilling.reference) ||
        /velferdsdirektoratet_webcruiter/i.test(stilling.reference) ||
        /Fyrstikkalléen 1/i.test(stilling.locationList[0].address) ||
        /Fyrstikkallèen 1/i.test(stilling.locationList[0].address)
    )
    .filter((stilling) => /NAV/i.test(stilling.businessName))
    .map((stilling) => `${addUrl}/${stilling.uuid}`);
};

/*const formatDate = (date: string) => {
  // Skrive om til date-fns?
  const dato = new Date(date);
  return dato.toLocaleDateString("nb-NO", { day: "2-digit", month: "long", year: "numeric" });
};*/

export interface ExternStilling {
  id: string;
  title: string;
  description: string;
  frist: string;
  url: string;
}

//interface EksternStillingResponse {}

export const getStillinger = async () => {
  const stillingerResponse = await fetcher(searchUrl);
  const stillingsUrler = filterResultsAndMapToUrl(stillingerResponse.hits.hits);

  const promises = stillingsUrler.map((url: string) => fetch(url).then((result) => result.json()));

  const annonser = await Promise.all(promises);

  const stillinger = annonser
    .filter((annonse: any) => annonse)
    .map((annonse: any) => ({
      uuid: annonse._id,
      ...annonse._source,
    }))
    .map((stilling) => transformStilling(stilling));

  await Promise.all(stillinger.map((stilling) => client.createIfNotExists(stilling)));
};

export const transformStilling = (externalStilling) => {
  return {
    _id: `imported-stilling-${externalStilling.uuid}`,
    _type: "stilling",
    title: externalStilling.title,
    description: createDescription(externalStilling.properties.adtext),
    url: `${applyUrl}/${externalStilling.uuid}`,
    frist: format(new Date(externalStilling.properties.applicationdue), "yyyy-MM-dd"),
  };
};

getStillinger();
