import { FiKey } from "react-icons/fi";

export const NøkkeltallIkon = FiKey;

export default {
  name: "nokkeltall",
  title: "Nøkkeltall",
  type: "document",
  icon: NøkkeltallIkon,
  fields: [
    {
      name: "nokkeltall",
      title: "Nøkkeltall",
      type: "array",
      of: [
        {
          type: "nokkeltallListe",
        },
        {
          type: "nokkeltallTekst",
        },
      ],
    },
  ],
  preview: {
    select: {
      nokkeltall: "nokkeltall",
    },
    prepare(selection) {
      const { nokkeltall } = selection;
      return {
        title: `Nokkeltall (${nokkeltall?.length})`,
      };
    },
  },
};
