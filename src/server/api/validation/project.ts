import { array, z } from "zod";

export type BlockContentModel = z.infer<typeof ProjectSchema.shape.subtitle>



const lang = ['fr','en'] as const;

export type Lang = (typeof lang)[number];



const ProjectSchema = z.object({
  _id: z.string(),
  title: z.string(),
  logo: z.object({ imageUrl: z.string() }),
  subtitle: z.object({
    text: z.record(
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
    hasBoldText: z.boolean(),
  }),
  slug: z.string(),
  overview: z.any(),
  body: z.any(),
  images: z.array(z.object({ imageUrl: z.string(), bigImage: z.boolean() })),
  technologies: z.array(z.object({ imageUrl: z.string(), title: z.string() })),
});

const ProjectSchemaArray = z.array(ProjectSchema);

export { ProjectSchema, ProjectSchemaArray };



// _id,
// title,
// subtitle,
// "slug":slug.current,
// overview,
// body,
// logo{"imageUrl":asset->url},
// images[]{"imageUrl":asset->url},
// technologies[]->{"imageUrl": image.asset->url, title}
