import { searchClient } from "@algolia/client-search";

export const client = searchClient(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!
);
