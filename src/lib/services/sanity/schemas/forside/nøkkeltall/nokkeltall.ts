import { FiKey } from "react-icons/fi";
import { defineType } from "sanity";

export const NøkkeltallIkon = FiKey;

export const Nøkkeltall = defineType({
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
});
