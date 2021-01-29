import { FiKey } from "react-icons/fi";

export const NøkkeltallIkon = FiKey;

export default {
  name: "nokkeltall",
  title: "Nøkkeltall",
  type: "document",
  icon: NøkkeltallIkon,
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
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
