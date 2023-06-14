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
      name: "photographs",
      title: "Photograhps",
      type: "array",
      of: [
        {
          title: "Photography",
          type: "reference",
          to: [{ type: "photography" }],
        },
      ],
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          title: "Project",
          type: "reference",
          to: [{ type: "project" }, { type: "photography" }],
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
          name: "bubbleColor",
          title: "Bubble color Hex",
          type: "string",
        },
        {
          name: "titlePosition",
          title: "Title Position",
          type: "string",
          options: {
            layout: "radio",
            list: [
              { title: "Right", value: "right" },
              { title: "Left", value: "left" },
              { title: "Default", value: "default" },
            ],
          },
          initialValue: "default",
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
