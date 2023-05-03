import { FaReact as icon } from "react-icons/fa";

export default {
  name: "technology",
  title: "Technology",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
