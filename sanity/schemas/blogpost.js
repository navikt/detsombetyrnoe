import { FaToiletPaper } from "react-icons/fa";

export default {
  name: "blogpost",
  type: "document",
  icon: FaToiletPaper,
  fields: [
    {
      name: "tittel",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(50),
    },
    {
      name: "slug",
      type: "slug",
      description: "Url til blogposten",
      options: {
        source: "tittel",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "forfattere",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "forfatter",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      type: "bilde",
    },
    {
      name: "body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
