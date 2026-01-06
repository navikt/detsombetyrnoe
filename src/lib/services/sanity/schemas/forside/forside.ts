import { MdWeb } from "react-icons/md";
import { defineType } from "sanity";

export const ForsideIkon = MdWeb;

export const Forside = defineType({
  name: "forside",
  title: "Forside",
  type: "document",
  icon: ForsideIkon,
  fields: [
    {
      name: "overskrift",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "underoverskrift",
      title: "Underoverskrift",
      type: "text",
      rows: 3,
    },
    {
      name: "bakgrunnsvideo",
      title: "Bakgrunnsvideo",
      type: "file",
    },
    {
      name: "bakgrunnsvideoWebm",
      title: "Bakgrunnsvideo webm",
      type: "file",
    },
    {
      name: "lysTekst",
      type: "boolean",
    },
    {
      name: "paneler",
      type: "array",
      of: [
        {
          name: "panel",
          type: "panel",
        },
        {
          name: "customComponent",
          type: "customComponent",
        },
        {
          name: "video",
          type: "video",
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Forside`,
    }),
  },
});
