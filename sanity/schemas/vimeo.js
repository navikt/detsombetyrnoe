import React from "react";
import Vimeo from "@u-wave/react-vimeo";

const Preview = ({ value }) => <Vimeo video={value.url} />;

export default {
  name: "vimeo",
  title: "Embdedded Vimeo",
  type: "object",
  fields: [
    { name: "tittel", title: "Tittel", type: "string" },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
