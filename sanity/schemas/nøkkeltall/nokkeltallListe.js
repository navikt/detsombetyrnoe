import { FiList } from "react-icons/fi";

export default {
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
};
