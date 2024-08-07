import { GiUnicorn } from "react-icons/gi";
import * as React from "react";
import NavColorInput from "../../../../../../sanity/components/NavColorInput";
import TekstblokkPreview from "../../../../../../sanity/components/TekstblokkPreview";
import { defineType } from "sanity";

export const Tekstblokk = defineType({
  name: "tekstblokk",
  type: "object",
  fields: [
    {
      name: "bakgrunnsfarge",
      type: "string",
      components: {
        input: NavColorInput,
      },
    },
    {
      name: "overskrift",
      type: "string",
    },
    {
      name: "tekst",
      type: "blockContent",
    },
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
      bakgrunnsfarge: "bakgrunnsfarge",
      overskrift: "overskrift",
    },
    prepare: (selection) => {
      return {
        title: selection.overskrift,
        media: <TekstblokkPreview value={{ ...selection }} icon={<GiUnicorn />} />,
      };
    },
  },
});
