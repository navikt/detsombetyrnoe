import { MdWeb } from "react-icons/md";
import NavColorInput from "../components/NavColorInput";

export const ForsideIkon = MdWeb;

export default {
  name: "landingPage",
  title: "Landing page",
  type: "document",
  icon: ForsideIkon,
  fields: [
    {
      name: "overskrift",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "underoverskrift",
      title: "Underoverskrift",
      type: "text",
      rows: 3,
    },
    { name: "fetUnderskrift", title: "Fet underoverskrift", type: "text", rows: 3 },
    {
      name: "slug",
      type: "slug",
      description: "Url til siden",
      options: {
        source: "overskrift",
        maxLength: 96,
      },
    },
    {
      name: "previewImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bakgrunnsfarge",
      type: "string",
      inputComponent: NavColorInput,
    },
    {
      name: "lysTekst",
      type: "boolean",
    },
    {
      name: "paneler",
      type: "array",
      of: [
        {
          name: "panel",
          type: "panel",
        },
        {
          name: "pa_scenen",
          type: "pa_scenen",
        },
        {
          name: "customComponent",
          type: "customComponent",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "overskrift",
    },
  },
};
