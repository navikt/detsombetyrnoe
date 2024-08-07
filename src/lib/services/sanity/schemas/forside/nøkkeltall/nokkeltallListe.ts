import { FiList } from "react-icons/fi";
import { defineType } from "sanity";

export const NøkkeltallListe = defineType({
  name: "nokkeltallListe",
  title: "Nøkkeltall liste",
  type: "object",
  icon: FiList,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "liste",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
});
