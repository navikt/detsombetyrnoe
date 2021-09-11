import { MdWeb } from "react-icons/md";
import NavColorInput from "../components/NavColorInput";

export const ForsideIkon = MdWeb;

export default {
  name: "landingPage",
  title: "Landing page",
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
      name: "slug",
      type: "slug",
      description: "Url til siden",
      options: {
        source: "overskrift",
        maxLength: 96,
      },
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
  ],
  preview: {
    select: {
      title: "overskrift",
    },
  },
};