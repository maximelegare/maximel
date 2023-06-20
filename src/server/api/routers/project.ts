/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { getData } from "db/sanity.utils";

import { ProjectsSchema, CardProjectsSchema } from "../validation/project";

export const projectRouter = createTRPCRouter({
  mainProjects: publicProcedure
    .input(z.object({ lang: z.string().default("fr") }))
    .query(async ({ input: { lang } }) => {
      const res = await getData("mainProjects", lang);

      return {
        res: ProjectsSchema.parse(res),
      };
    }),
  allProjects: publicProcedure
    .input(z.object({ lang: z.string().default("fr") }))
    .query(async ({ input: { lang } }) => {
      const res = await getData("allProjects", lang);

      return {
        res: CardProjectsSchema.parse(res),
      };
    }),
});
