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
      options: {
        source: "tittel",
        maxLength: 96,
      },
    },
    {
      name: "lesMerTekst",
      type: "string",
    },
    {
      name: "ingress",
      type: "text",
    },
    {
      name: "bilder",
      type: "array",
      of: [
        {
          name: "bilde",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "altTekst",
              title: "Alttekst",
              type: "string",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "innhold",
      type: "blockContent",
    },
  ],
};
