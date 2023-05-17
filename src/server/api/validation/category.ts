import { z } from "zod";


import { ProjectSchema } from "./project";

const CategorySchema = z.object({
  _id: z.string(),
  styles: z.object({ textAccent: z.string(), accent: z.string() }),
  title: z.string(),
  slug: z.string(),
  image:z.object({
    imageUrl:z.string(),
    alt:z.string()
  }),
  projects:z.array(ProjectSchema)
});


export const CategoriesSchema = z.array(CategorySchema) 
export { CategorySchema }
