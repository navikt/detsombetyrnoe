export default {
  name: "showcase",
  title: "Showcase",
  type: "document",
  fields: [
    {
      name: "tittel",
      title: "Tittel",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "homepage",
      type: "url",
    },
    {
      name: "innhold",
      title: "Innhold",
      type: "blockContent",
    },
  ],
};
