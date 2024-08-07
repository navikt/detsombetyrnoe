import React from "react";
import { GiUnicorn } from "react-icons/gi";
import { defineType } from "sanity";
import NavColorInput from "../../../../../../sanity/components/NavColorInput";
import PanelPreview from "../../../../../../sanity/components/PanelPreview";

export const CustomComponent = defineType({
  name: "customComponent",
  type: "object",
  icon: GiUnicorn,
  fields: [
    {
      type: "string",
      name: "id",
      description: "Denne må matche en id som utvikler legger inn i frontendkoden",
    },
    {
      name: "bakgrunnsfarge",
      type: "string",
      components: {
        input: NavColorInput,
      },
    },
    {
      name: "lysTekst",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      bakgrunnsfarge: "bakgrunnsfarge",
      type: "_type",
      lysTekst: "lysTekst",
      tittel: "id",
    },
    prepare: (selection) => {
      return {
        title: selection.bakgrunnsfarge,
        media: <PanelPreview value={{ ...selection }} />,
      };
    },
  },
});
