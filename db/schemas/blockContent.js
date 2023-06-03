import { RxColumnSpacing as icon } from "react-icons/rx";

import { MdOpacity as opacityIcon } from "react-icons/md";

import { AiFillHighlight as highlightIcon } from "react-icons/ai";
// @ts-nocheck
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */



const HighlightDecorator = (props) => (
  <span style={{ color: "red" }}>{props.children}</span>
);
const Opacity70 = (props) => (
  <span style={{ backgroundColor: "#00000030" }}>{props.children}</span>
);
const Nbsp = (props) => (
  <span style={{ border: "2px solid blue" }}>{props.children}</span>
);

const blockContent = {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          {
            title: "Highlight",
            value: "highlight",
            icon: highlightIcon,
            component: HighlightDecorator,
          },
          {
            title: "Opacity-70",
            value: "opacity-70",
            icon: opacityIcon,
            component: Opacity70,
          },
          {
            title: "Nbsp",
            value: "nbsp",
            icon: icon,
            component: Nbsp,
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default blockContent;
