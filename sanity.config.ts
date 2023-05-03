import { defineConfig } from "sanity";
import { env } from "~/env.mjs";
import { deskTool } from "sanity/desk";

import project from "db/schemas/project";
import technology from "db/schemas/technology";
import localeBlockContent from "db/schemas/locale/localeBlockContent";
import blockContent from "db/schemas/blockContent";


const config = defineConfig({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "prod",
  title: "maximel portfolio",
  apiVersion: "2023-05-03",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project, technology, localeBlockContent, blockContent] },
});

export default config;
