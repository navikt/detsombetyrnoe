import { GiUnicorn } from "react-icons/gi";
import NavColorInput from "../../components/NavColorInput";
import TekstblokkPreview from "../../components/TekstblokkPreview";
import * as React from "react";

export default {
  name: "tekstblokk",
  type: "object",
  fields: [
    {
      name: "bakgrunnsfarge",
      type: "string",
      inputComponent: NavColorInput,
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
  ],
  preview: {
    select: {
      bakgrunnsfarge: "bakgrunnsfarge",
      overskrift: "overskrift",
    },
    prepare: (selection) => selection,
    component: (selection) => <TekstblokkPreview {...selection} />,
  },
};
