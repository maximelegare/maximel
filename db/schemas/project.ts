/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GrProjects as icon } from "react-icons/gr";

const project = {
  name: "project",
  title: "Project",
  type: "document",
  icon,
  fields: [
    {
      name: "position",
      title: "Position",
      type: "number",
    },
    {
      name:"mainProject",
      title:"Main Project",
      type:"boolean",
      initialValue:false
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
          name:"singleColorAccent",
          title:"Single color accent",
          type:"string"
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
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "localeBlockContent",
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
      name: "overviewCard",
      title: "Overview Card",
      type: "object",
      fields: [
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
              name: "imagePadding",
              title: "Image Padding",
              type: "string",
              options: {
                layout: "radio",
                list: [
                  { title: "No padding Right", value: "no-padding-right" },
                  { title: "No padding left", value: "no-padding-left" },
                  { title: "Default", value: "default" },
                ],
              },
              initialValue: "default",
            },
          ],
        },
        { name: "text", title: "Text", type: "localeBlockContent" },
      ],
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
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            { name: "type", title: "Type", type: "string" },
            { name: "href", title: "href", type: "string" },
          ],
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
  preview: {
    select: {
      title: "title",
      position: "position",
      media: "logo",
    },
    prepare({
      title,
      media,
      position,
    }: {
      title: string;
      media: any;

      position: number;
    }) {
      return {
        title: `${position} - ${title.toLowerCase()}`,
        media,
      };
    },
  },
};

export default project;
