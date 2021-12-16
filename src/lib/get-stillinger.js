import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const axios = require("axios");
const striptags = require("striptags");

const fetcher = (url) => {
  return new Promise((resolve) => {
    axios
      .get(url)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        console.error(error);
        resolve(false);
      });
  });
};

function createDescription(text) {
  text = text.replace(/<p>/g, "\n");
  text = text.replace(/<\/p>/g, "\n");
  text = text.replace(/<br \/>/g, "\n");
  const lines = text
    .split("\n")
    .filter((line) => line !== "")
    .slice(1);
  let description = lines.shift();
  while (!(description.endsWith(".") || description.endsWith("!") || description.endsWith("?"))) {
    description = `${description} ${lines.shift()}`;
  }
  return striptags(description);
}

module.exports = async () => {
  const searchUrl = "https://arbeidsplassen.nav.no/stillinger/api/search?q=nav&occupationFirstLevels[]=IT";
  const addUrl = "https://arbeidsplassen.nav.no/stillinger/api/stilling";
  const applyUrl = "https://arbeidsplassen.nav.no/stillinger/stilling";

  const formatDate = (date) => {
    const dato = new Date(date);
    return dato.toLocaleDateString("nb-NO", { day: "2-digit", month: "long", year: "numeric" });
  };

  const getStillingstype = (title) => {
    let stilling = "diverse";
    if (/utvikler/i.test(title)) {
      stilling = "utvikling";
    }
    if (/design/i.test(title)) {
      stilling = "design";
    }
    return stilling;
  };

  const repack = (data) => {
    return {
      id: data.uuid,
      stillingsType: getStillingstype(data.title),
      title: data.title,
      description: createDescription(data.properties.adtext),
      frist: formatDate(data.properties.applicationdue),
      url: `${applyUrl}/${data.uuid}`,
    };
  };

  const data = await fetcher(searchUrl);
  if (!data) {
    return [];
  }
  const annonsesok = data.hits.hits
    .map((stilling) => stilling._source)
    .filter(
      (stilling) =>
        /nav_webcruiter/i.test(stilling.reference) ||
        /velferdsdirektoratet_webcruiter/i.test(stilling.reference) ||
        /Fyrstikkalléen 1/i.test(stilling.locationList[0].address) ||
        /Fyrstikkallèen 1/i.test(stilling.locationList[0].address)
    )
    .filter((stilling) => /NAV/i.test(stilling.businessName))
    .map((stilling) => `${addUrl}/${stilling.uuid}`)
    .map((url) => axios.get(url));

  const tilleggsstillinger = await sanityClient.fetch(groq`*[_type == "tilleggsStilling"]`);

  // Legger til tilleggsstillinger
  const ekstrastillinger = tilleggsstillinger
    .map((stilling) => `${addUrl}/${stilling.uuid}`)
    .map((url) => axios.get(url));

  annonsesok.push(...ekstrastillinger);

  try {
    const annonser = await Promise.all(annonsesok);
    const stillinger = annonser
      .filter((annonse) => annonse)
      .map((annonse) => ({ uuid: annonse.data._id, ...annonse.data._source }))
      .map(repack);
    return stillinger;
  } catch (error) {
    console.error(error);
    return [];
  }
};
