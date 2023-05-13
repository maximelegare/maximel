import { GrProjects as icon } from "react-icons/gr";

const project = {
  name: "project",
  title: "Project",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "object",
      fields:[
        { name: "hasBoldText", title: "Has bold text", type: "boolean", initialValue: false}, 
        { name: "text", title: "Subtitle", type: "localeBlockContent" }, 
      ]
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "overview",
      title: "Overview",
      type: "localeBlockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
    },
    {
      name: "releaseDate",
      title: "Release date",
      type: "datetime",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          title: "Technology",
          type: "reference",
          to: [{ type: "technology" }],
        },
      ],
    },
    {
      name:"links",
      title:"Links",
      type:"array",
      of:[
        {
          name:"link",
          title:"Link",
          type:"object",
          fields:[
            {name:"type", title:"Type", type:"string"},
            {name:"href", title:"href", type:"string"},
          ]
          
        }
      ]
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
            {
              name: "bigImage",
              title: "Big image",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     title: "title",
  //     date: "releaseDate",
  //     subtitle: "subtitle",
  //     media: "logo",
  //     castName0: "castMembers.0.person.name",
  //     castName1: "castMembers.1.person.name",
  //   },
  //   prepare({
  //     title,
  //     media,
  //     subtitle,
  //   }: {
  //     title: string;
  //     media: string;
  //     subtitle: string;
  //   }) {
  //     return {
  //       title: `${title.toLowerCase()}`,
  //       media,
  //       subtitle: `${subtitle ?? ""}`,
  //     };
  //   },
  // },
};

export default project;
