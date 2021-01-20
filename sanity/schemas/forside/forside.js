import { MdWeb } from "react-icons/md";
import NavColorInput from "../../components/NavColorInput";

export const ForsideIkon = MdWeb;

export default {
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
    prepare: () => ({
      title: `Forside`,
    }),
  },
};
