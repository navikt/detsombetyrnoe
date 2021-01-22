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
      name: "slug",
      type: "slug",
      description: "Url til forfatterside",
      options: {
        source: "navn",
        maxLength: 40,
      },
      validation: (Rule) => Rule.required(),
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
