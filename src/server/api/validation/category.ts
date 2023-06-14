import { z } from "zod";

import { lang } from "db/schemas/locale/supportedLanguages";

import { ProjectSchema } from "./project";

export type CategorySchemaModel = z.infer<typeof CategorySchema>;


const PhotographySchema = z.object({
  src:z.string(),
  alt:z.string(),
  height:z.number(),
  width:z.number()
})

const CategorySchema = z.object({
  _id: z.string(),
  styles: z.object({
    textAccent: z.string(),
    accent: z.string(),
    titlePosition: z.string(),
    bubbleColor:z.string().optional()
  }),
  title: z.string(),
  slug: z.string(),
  headline: z.record(
    z.enum(lang),
    z.array(
      z.object({
        style: z.string(),
        children: z.array(
          z.object({ text: z.string(), marks: z.array(z.string()) })
        ),
      })
    )
  ),
  image: z.object({
    imageUrl: z.string(),
    alt: z.string(),
  }),
  projects: z.array(ProjectSchema).or(z.null()).or(z.undefined()),
  photographs:z.array(PhotographySchema).or(z.null()).or(z.undefined())
});

export const CategoriesSchema = z.array(CategorySchema);
export { CategorySchema };
