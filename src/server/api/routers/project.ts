/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
      console.log(res[0])  


      return {
        res:projectSchemaArray.parse(res)
      }
      
      // if(result.success){
      //   console.log("[ZOD]: Data is Valid!")
      //   return {
      //     res:projectSchemaArray.parse(res)
      //   }
      // }else{
      //   console.log("data is not valid")
      //   return {
      //     res:result
      //   }
        
      // }
    }),
});



