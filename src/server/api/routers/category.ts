/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { getData } from "db/sanity.utils";


import { CategoriesSchema } from "../validation/category";

export const categoryRouter = createTRPCRouter({
  allCategories: publicProcedure
    .input(z.object({ lang:z.string().default("fr")  }))
    .query(async ({ input: { lang } }) => {
      const res = await getData("categories", lang);
      return {
        res:  CategoriesSchema.parse(res),
      };
    }),
});
