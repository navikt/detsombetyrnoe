export default {
  type: "document",
  name: "metadata",
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
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
  ],
};
