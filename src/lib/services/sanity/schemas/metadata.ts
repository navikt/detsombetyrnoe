import { defineType } from "sanity";

export const Metadata = defineType({
  type: "document",
  name: "metadata",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
      rows: 3,
    },
    {
      name: "previewImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "privacyArticle",
      type: "reference",
      to: [{ type: "artikkel" }],
    },
  ],
});
