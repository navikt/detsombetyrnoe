import { FiAlignLeft } from "react-icons/fi";
import { defineType } from "sanity";

export const NøkkeltallTekst = defineType({
  name: "nokkeltallTekst",
  title: "Nøkkeltall tekst",
  type: "object",
  icon: FiAlignLeft,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "antall",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
  ],
});
