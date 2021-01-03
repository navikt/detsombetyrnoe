import { MdWeb } from "react-icons/md";

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
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: `Landingsside`,
    }),
  },
};
