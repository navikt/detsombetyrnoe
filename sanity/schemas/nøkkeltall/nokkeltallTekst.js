import { FiAlignLeft } from "react-icons/fi";

export default {
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
};
