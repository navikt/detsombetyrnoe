import { MdWeb } from "react-icons/md";
import NavColorInput from "../../components/NavColorInput";
import heleNorgeUtvikler from "../heleNorgeUtvikler";

export const ForsideIkon = MdWeb;

export default {
  name: "forside",
  title: "Forside",
  type: "document",
  icon: ForsideIkon,
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
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
      name: "bakgrunnsfarge",
      type: "string",
      inputComponent: NavColorInput,
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
      ],
    },
    {
      name: "utviklereHeleNorge",
      title: "Utviklere over hele Norge",

      type: "array",
      of: [heleNorgeUtvikler],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Forside`,
    }),
  },
};
