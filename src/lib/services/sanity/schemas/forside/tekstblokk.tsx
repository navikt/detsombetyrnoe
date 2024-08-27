import { GiUnicorn } from "react-icons/gi";
import * as React from "react";
import TekstblokkPreview from "../../../../../../sanity/components/TekstblokkPreview";
import { defineField, defineType } from "sanity";

export const Tekstblokk = defineType({
  name: "tekstblokk",
  type: "object",
  fields: [
    {
      name: "overskrift",
      type: "string",
    },
    {
      name: "tekst",
      type: "blockContent",
    },
    defineField({
      name: "lysBakgrunn",
      type: "boolean",
    }),
    {
      name: "lysTekst",
      type: "boolean",
    },
    {
      name: "artikkel",
      type: "reference",
      to: [{ type: "artikkel" }],
    },
  ],
  preview: {
    select: {
      overskrift: "overskrift",
    },
    prepare: (selection) => {
      return {
        title: selection.overskrift,
      };
    },
  },
});
