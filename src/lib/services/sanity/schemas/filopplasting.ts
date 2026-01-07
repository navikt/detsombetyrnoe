import { defineType } from "sanity";

export const Filopplasting = defineType({
  name: "filopplasting",
  title: "Filopplasting",
  type: "file",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});
