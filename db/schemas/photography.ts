/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BiImageAlt as icon } from "react-icons/bi";

const photography = {
  name: "photography",
  title: "Photography",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "photography",
      title: "Photography",
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
          name: "width",
          title: "Width",
          type: "number",
        },
        {
          name: "height",
          title: "Height",
          type: "number",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "photography",
    },
    prepare({ title, media }: { title: string; media: any }) {
      return {
        title: `${title.toLowerCase()}`,
        media,
      };
    },
  },
};

export default photography;
