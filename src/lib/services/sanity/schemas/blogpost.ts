import { FaToiletPaper } from "react-icons/fa";
import { formatterDato } from "../../../../utils/formatterDato";
import { defineType } from "sanity";

export const BlogPost = defineType({
  name: "blogpost",
  type: "document",
  icon: FaToiletPaper,
  fields: [
    {
      name: "tittel",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
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
      name: "language",
      title: "Språk",
      type: "string",
      options: {
        list: [
          { value: "no", title: "Norsk" },
          { value: "en", title: "English" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "forfattere",
      type: "array",
      of: [
        {
          description:
            'Du må legge deg til under forfatterpanelet og trykke "Publish" før du dukker opp i denne lista.',
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
    },
  ],
  initialValue: {
    language: "Norsk",
  },
  preview: {
    select: {
      title: "tittel",
      date: "_createdAt",
      forfatter0: "forfattere.0.navn",
      forfatter1: "forfattere.1.navn",
      forfatter2: "forfattere.2.navn",
      image: "mainImage",
    },
    prepare(selection) {
      const { title, forfatter0, forfatter1, forfatter2, date, image } = selection;
      const forfattere = [forfatter0, forfatter1].filter(Boolean);
      const hasMoreAuthors = Boolean(forfatter2);
      const subtitle = `${formatterDato(date)} ${forfattere.join(" & ")}${hasMoreAuthors ? " & ..." : ""}`;
      return {
        title,
        subtitle,
        media: image,
      };
    },
  },
});
