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
        style: z.string().or(z.null()),
        children: z
          .array(z.object({ text: z.string(), marks: z.array(z.string()) }))
          .or(z.null()),
        imageUrl: z.string().or(z.null()).or(z.undefined()),
      })
    )
  ),

  slug: z.string(),
  overviewCard: z
    .object({
      imagePosition:z.string(),
      image: z.object({ imageUrl: z.string(), alt: z.string() }),
      text: z.record(
        z.enum(lang),
        z.array(
          z.object({
            style: z.string().or(z.null()),
            children: z
              .array(z.object({ text: z.string(), marks: z.array(z.string()) }))
              .or(z.null()),
            imageUrl: z.string().or(z.null()).or(z.undefined()),
          })
        )
      ),
    })
    .or(z.null())
    .or(z.undefined()),
  overview: z.record(
    z.enum(lang),
    z.array(
      z.object({
        style: z.string().or(z.null()),
        children: z
          .array(z.object({ text: z.string(), marks: z.array(z.string()) }))
          .or(z.null()),
        imageUrl: z.string().or(z.null()).or(z.undefined()),
      })
    )
  ),
  body: z.record(
    z.enum(lang),
    z.array(
      z.object({
        style: z.string().or(z.null()),
        children: z
          .array(z.object({ text: z.string(), marks: z.array(z.string()) }))
          .or(z.null()),
        imageUrl: z.string().or(z.null()).or(z.undefined()),
      })
    )
  ),
  images: z.array(z.object({ imageUrl: z.string(), bigImage: z.boolean() })),
  technologies: z.array(z.object({ imageUrl: z.string(), title: z.string() })),
  links: z.array(z.object({ href: z.string(), type: z.string() })),
});

export const ProjectsSchema = z.array(ProjectSchema);
export { ProjectSchema };
