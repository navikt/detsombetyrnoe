import { MdWeb } from "react-icons/md";
import { GiUnicorn } from "react-icons/gi";

export const LandingssideIkon = MdWeb;

export default {
  name: "landingsside",
  title: "Landingsside",
  type: "document",
  icon: LandingssideIkon,
  fields: [
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
          ],
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Landingsside`,
    }),
  },
};
