import React from "react";
import { MdOndemandVideo } from "react-icons/md";

export default {
  type: "object",
  name: "video",
  title: "Video",
  icon: MdOndemandVideo,
  fields: [
    {
      name: "title",
      title: "Beskrivelse",
      description: "Vises for skjermleser",
      type: "string",
    },
    {
      name: "heading",
      title: "Overskrift",
      description: "Valgri: Vises som overskrivt på panelet",
      type: "string",
    },
    {
      name: "url",
      title: "URL til videoen",
      description: "Feks https://video.qbrick.com/play2/embed/player?accountId=763...",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url",
    },
  },
};
