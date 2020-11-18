export default {
  name: "innholdsbolk",
  title: "Innholdsbolk",
  type: "document",
  fields: [
    {
      name: "tittel",
      title: "Tittel",
      type: "string",
    },
    {
      name: "innhold",
      title: "Innhold",
      type: "blockContent",
    },
    { name: "videoer", title: "Videoer", type: "array", of: [{ type: "vimeo" }] },
  ],
};
