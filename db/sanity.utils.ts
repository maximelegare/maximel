/* eslint-disable @typescript-eslint/no-unsafe-return */
import { env } from "~/env.mjs";
import { createClient } from "next-sanity";

import { groq } from "next-sanity";

export async function getData() {
  const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2023-05-03",
    dataset: "prod",
  });

  return await client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      subtitle,
      "slug":slug.current,
      overview,
      body,
      logo{"imageUrl":asset->url},
      images[]{"imageUrl":asset->url, alt, bigImage},
      technologies[]->{"imageUrl": image.asset->url, title}
    }`);
}
