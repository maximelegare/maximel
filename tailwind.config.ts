/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";


// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const backfaceVisibility = plugin(function({addUtilities}:{addUtilities:any}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden'
    }
  })
});

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
    fontFamily: {
      display: ["Lobster", "cursive"],
    },
  },
  daisyui: {
    themes: [
      /**
       * Change the theme changes in _document.tsx file
       */
      {
        myTheme: {
          primary: "#374151",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          base: "#ede9fe",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#f43f5e",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui"), require("@kamona/tailwindcss-perspective"), backfaceVisibility],
} satisfies Config;
