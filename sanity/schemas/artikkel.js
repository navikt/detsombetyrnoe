import { ImNewspaper } from "react-icons/Im";

export default {
  name: "artikkel",
  title: "Artikkel",
  type: "document",
  icon: ImNewspaper,
  fields: [
    {
      name: "tittel",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      description: "Url til siden",
      options: {
        source: "tittel",
        maxLength: 96,
      },
    },
    {
      name: "lesMerTekst",
      type: "string",
      description: "Dette er teksten som vil stå på lenken man trykker på for å lese mer",
    },
    {
      name: "ingress",
      type: "text",
      description: "Denne teksten vises både i preview og som ingress i artikkelen",
    },
    {
      name: "bilder",
      type: "array",
      of: [
        {
          name: "bilde",
          type: "bilde",
        },
      ],
    },
    {
      name: "innhold",
      type: "blockContent",
    },
  ],
};
