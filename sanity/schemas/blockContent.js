import { FaFile } from "react-icons/fa";

export default {
  name: "blockContent",
  title: "Block content",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",

      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "Filopplasting",
            name: "filopplasting",
            type: "file",
            blockEditor: {
              icon: FaFile,
            },
          },
        ],
      },
    },
    {
      type: "bilde",
    },
    {
      type: "code",
    },
  ],
};
