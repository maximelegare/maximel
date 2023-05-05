import { BiImageAlt as icon } from "react-icons/bi";

const myImage = {
  name: "myImage",
  title: "Image",
  type: "document",
  icon,
  fields: [
    {
        name: "image",
        title:"Image",
        type: "image",
        options: {
          hotspot: true,
        },
        fields:[
          {
            name:"alt",
            title:"Alt",
            type:"string"
        },
        {
            name:"bigImage",
            title:"Big image",
            type:"boolean",
            initialValue: false
          },
        ]
    },
    
  ],
};

export default myImage