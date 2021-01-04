import { MdWeb } from "react-icons/md";
import { GiUnicorn } from "react-icons/gi";

export const ForsideIkon = MdWeb;

export default {
  name: "forside",
  title: "Forside",
  type: "document",
  icon: ForsideIkon,
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
      title: `Forside`,
    }),
  },
};
