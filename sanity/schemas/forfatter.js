import { BsPeopleCircle } from "react-icons/bs";

export default {
  name: "forfatter",
  type: "document",
  icon: BsPeopleCircle,
  fields: [
    {
      name: "navn",
      type: "string",
    },
    {
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      type: "text",
    },
  ],
};
