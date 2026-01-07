import { MdPhoto } from "react-icons/md";
import { defineType } from "sanity";

export const Bilde = defineType({
  name: "bilde",
  type: "image",
  icon: MdPhoto,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "altTekst",
      title: "Alttekst",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Beskriv bildet for skjermlesere",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      title: "Bildetekst",
      description: "Dette vil stå under bildet",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
});
