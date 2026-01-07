import { defineType } from "sanity";

export const Stilling = defineType({
  name: "stilling",
  title: "Stilling",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "string",
    },
    {
      name: "frist",
      title: "Frist",
      type: "date",
    },
  ],
});
