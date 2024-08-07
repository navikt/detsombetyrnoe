import * as React from "react";

import { MdWebAsset } from "react-icons/md";
import { defineType } from "sanity";
import NavColorInput from "../../../../../../sanity/components/NavColorInput";
import PanelPreview from "../../../../../../sanity/components/PanelPreview";

export const Panel = defineType({
  name: "panel",
  type: "object",
  icon: MdWebAsset,
  fields: [
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
    {
      name: "innhold",
      type: "reference",
      to: [{ type: "nokkeltall" }, { type: "artikkel" }],
    },
  ],
  preview: {
    select: {
      bakgrunnsfarge: "bakgrunnsfarge",
      type: "innhold._type",
      lysTekst: "lysTekst",
      tittel: "innhold.tittel",
    },
    prepare: (selection) => {
      return {
        title: selection.bakgrunnsfarge,
        media: <PanelPreview value={{ ...selection }} />,
      };
    },
  },
});
