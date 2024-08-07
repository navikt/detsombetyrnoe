export default {
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
};
