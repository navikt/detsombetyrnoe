import * as React from "react";

import { MdWebAsset } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const Panel = defineType({
  name: "panel",
  type: "object",
  icon: MdWebAsset,
  fields: [
    defineField({
      name: "lysBakgrunn",
      type: "boolean",
      title: "Lys bakgrunn",
    }),
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
      type: "innhold._type",
      lysTekst: "lysTekst",
      lysBakgrunn: "lysBakgrunn",
      tittel: "innhold.tittel",
    },
    prepare: (selection) => {
      console.log(selection);
      return {
        title: selection.tittel,
        subtitle: selection.type,
      };
    },
  },
});
