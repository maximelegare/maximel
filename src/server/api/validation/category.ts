import { z } from "zod";

import { lang } from "db/schemas/locale/supportedLanguages";

import { ProjectSchema } from "./project";

export type CategorySchemaModel = z.infer<typeof CategorySchema>;

const CategorySchema = z.object({
  _id: z.string(),
  styles: z.object({
    textAccent: z.string(),
    accent: z.string(),
    marginTop: z.boolean(),
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
  projects: z.array(ProjectSchema),
});

export const CategoriesSchema = z.array(CategorySchema);
export { CategorySchema };
