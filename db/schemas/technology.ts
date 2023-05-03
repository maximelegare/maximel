import { FaReact as icon } from "react-icons/fa";

const technology = {
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
      fields:[
        {
          name:'alt',
          title:"Alt",
          type:"string"
        }
      ]
    },
  ],
};

export default technology