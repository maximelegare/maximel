/* eslint-disable @typescript-eslint/no-unsafe-return */
import { env } from "~/env.mjs";
import { createClient } from "next-sanity";
import { getQuery } from "./sanity-queries";
import { groq } from "next-sanity";
import type { Query } from "./sanity-queries";

export async function getData(query:Query, lang:string) {

  const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2023-05-03",
    dataset: "prod",
  });
  
  return await client.fetch(
    groq`${getQuery(query, lang)}`);
}
