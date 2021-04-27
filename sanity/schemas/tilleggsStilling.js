import { FaHammer } from "react-icons/fa";

export default {
  name: "tilleggsStilling",
  title: "Tilleggsstilling",
  type: "document",
  icon: FaHammer,
  fields: [
    {
      name: "stillingsBeskrivelse",
      type: "string",
    },
    {
      name: "uuid",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "stillingsBeskrivelse",
      subtitle: "uuid",
    },
  },
};
