/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TbCategory2 as icon } from "react-icons/tb";

const category = {
  name: "category",
  title: "Category",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          title: "Project",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
    {
      name: "headline",
      title: "Headline",
      type: "localeBlockContent",
    },
    {
      name: "styles",
      title: "Styles",
      type: "object",
      fields: [
        {
          name: "textAccent",
          title: "Text accent class",
          type: "string",
        },
        {
          name: "accent",
          title: "Accent class",
          type: "string",
        },
        {
          name:"bubbleColor",
          title:"Bubble color Hex",
          type:"string",
        },
        {
          name:"marginTop",
          title:"Margin Top",
          type:"boolean",
          initialValue: false
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
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

    // {
    //   name: "logo",
    //   title: "Logo",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: "alt",
    //       title: "Alt",
    //       type: "string",
    //     },
    //   ],
    // },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: { title: string }) {
      return {
        title: `${title}`,
      };
    },
  },
};

export default category;
