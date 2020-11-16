const { title } = require("process");

module.exports = async () => {
  const axios = require("axios");
  const searchUrl = "https://arbeidsplassen.nav.no/stillinger/api/search?q=nav&occupationFirstLevels[]=IT";
  const addUrl = "https://arbeidsplassen.nav.no/stillinger/api/stilling";
  const applyUrl = "https://arbeidsplassen.nav.no/stillinger/stilling";

  const createDescription = (text) => {
    text = text.replace(/<p>/g, "\n");
    text = text.replace(/<\/p>/g, "\n");
    text = text.replace(/<br \/>/g, "\n");
    return text.split("\n").filter((line) => line !== "")[1];
  };

  const formatDate = (date) => {
    const dato = new Date(date);
    return `${dato.getDate()}.${dato.getMonth() + 1}.${dato.getFullYear()}`;
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

  const { data } = await axios.get(searchUrl);
  const annonsesok = data.hits.hits
    .map((stilling) => stilling._source)
    .filter(
      (stilling) =>
        /nav_webcruiter/i.test(stilling.reference) || /velferdsdirektoratet_webcruiter/i.test(stilling.reference)
    )
    .map((stilling) => `${addUrl}/${stilling.uuid}`)
    .map((url) => axios.get(url));

  try {
    const annonser = await Promise.all(annonsesok);
    const stillinger = annonser.map((annonse) => ({ uuid: annonse.data._id, ...annonse.data._source })).map(repack);
    return stillinger;
  } catch (error) {
    console.error(error);
    return [];
  }
};
