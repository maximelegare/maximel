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
      type: "string",
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
