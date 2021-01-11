import * as React from "react";
import NavColorInput from "../../components/NavColorInput";
import PanelPreview from "../../components/PanelPreview";

export default {
  name: "panel",
  type: "object",
  fields: [
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
      name: "innhold",
      type: "reference",
      to: [{ type: "nokkeltall" }, { type: "placeholder" }, { type: "artikkel" }],
    },
  ],
  preview: {
    select: {
      bakgrunnsfarge: "bakgrunnsfarge",
      type: "innhold._type",
      lysTekst: "lysTekst",
      tittel: "innhold.tittel",
    },
    prepare: (selection) => selection,
    component: (selection) => <PanelPreview {...selection} />,
  },
};
