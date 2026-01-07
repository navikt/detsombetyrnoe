import { MdWeb } from "react-icons/md";

export const ForsideIkon = MdWeb;

export const LandingPage = {
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
      name: "lysTekst",
      type: "boolean",
    },
    {
      name: "paneler",
      type: "array",
      of: [
        { name: "tekstblokk", type: "tekstblokk" },
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
