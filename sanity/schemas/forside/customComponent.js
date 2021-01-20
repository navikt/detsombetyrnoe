import { GiUnicorn } from "react-icons/gi";
import NavColorInput from "../../components/NavColorInput";
import PanelPreview from "../../components/PanelPreview";
import * as React from "react";

export default {
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
      inputComponent: NavColorInput,
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
    prepare: (selection) => selection,
    component: (selection) => <PanelPreview {...selection} />,
  },
};
