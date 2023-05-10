import { z } from "zod";

const projectSchema = z.object({
  _id: z.string(),
  title: z.string(),
  logo: z.object({ imageUrl: z.string() }),
  subtitle: z.object({ text: z.any(), hasBoldText:z.boolean() }),
  slug: z.string(),
  overview: z.any(),
  body: z.any(),
  images: z.array(z.object({ imageUrl: z.string(), bigImage:z.boolean() })),
  technologies: z.array(z.object({ imageUrl: z.string(), title: z.string() })),
});

const projectSchemaArray = z.array(projectSchema);

export { projectSchema, projectSchemaArray };

// _id,
// title,
// subtitle,
// "slug":slug.current,
// overview,
// body,
// logo{"imageUrl":asset->url},
// images[]{"imageUrl":asset->url},
// technologies[]->{"imageUrl": image.asset->url, title}
