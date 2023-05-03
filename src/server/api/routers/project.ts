/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { getData } from "db/sanity.utils";

import { projectSchemaArray } from "../validation/project";


export const projectRouter = createTRPCRouter({
  allProjects: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input: { lang } }) => {
      const res = await getData()
        


    //   const result = projectSchemaArray.safeParse(res)
      
        

    //   if(result.success){
    //     console.log("[ZOD]: Data is Valid")
    //   }else{
    //     console.log("data is not valid")
    //     console.log(result.error)
    //   }

      return {
        res: "hello"
      };
    }),
});



