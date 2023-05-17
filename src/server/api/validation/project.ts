import { z } from "zod";

export type BlockContentModel = z.infer<typeof ProjectSchema.shape.headline>;
export type LinksModel = z.infer<typeof ProjectSchema.shape.links>;

import { lang } from "db/schemas/locale/supportedLanguages";

export type ProjectSchemaModel = z.infer<typeof ProjectSchema>;

const ProjectSchema = z.object({
  _id: z.string(),
  styles: z.object({ textAccent: z.string(), accent: z.string() }),
  title: z.string(),
  logo: z.object({ imageUrl: z.string(), alt: z.string() }),
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

  slug: z.string(),
  overview: z.record(
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
  body: z.record(
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
  images: z.array(z.object({ imageUrl: z.string(), bigImage: z.boolean() })),
  technologies: z.array(z.object({ imageUrl: z.string(), title: z.string() })),
  links: z.array(z.object({ href: z.string(), type: z.string() })),
});

export const ProjectsSchema = z.array(ProjectSchema);
export  {ProjectSchema}
