import { defineConfig } from "sanity";
import { env } from "~/env.mjs";
import { deskTool } from "sanity/desk";

import { visionTool } from "@sanity/vision";

// import project from "db/schemas/project";
// import technology from "db/schemas/technology";
// import localeBlockContent from "db/schemas/locale/localeBlockContent";
// import blockContent from "db/schemas/blockContent";

import schemas from "db/schemas/schemas";

const config = defineConfig({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "prod",
  title: "maximel portfolio",
  apiVersion: "2023-05-03",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
