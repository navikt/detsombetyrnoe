import { MdWeb } from "react-icons/md";
import { GiUnicorn } from "react-icons/gi";
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
      type: "string",
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
          type: "object",
          icon: GiUnicorn,
          fields: [
            {
              type: "string",
              name: "id",
              description: "Denne må matche en id som utvikler legger inn i frontendkoden",
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
          ],
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
