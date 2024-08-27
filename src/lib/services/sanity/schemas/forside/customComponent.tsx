import React from "react";
import { GiUnicorn } from "react-icons/gi";
import { defineField, defineType } from "sanity";

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
    defineField({
      name: "lysBakgrunn",
      type: "boolean",
    }),
    {
      name: "lysTekst",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      type: "_type",
      lysTekst: "lysTekst",
      lysBakgrunn: "lysBakgrunn",
      tittel: "id",
    },
    prepare: (selection) => {
      return {
        title: selection.tittel,
        subtitle: "Custom komponent",
      };
    },
  },
});
