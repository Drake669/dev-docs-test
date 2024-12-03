// import InstantSearch component from the hooks library we just installed
import { InstantSearch } from "react-instantsearch";
import { FC, PropsWithChildren } from "react";
import { client } from "./client";

const AlgoliaProvider: FC<PropsWithChildren> = ({ children }) => {
  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;
  return (
    <InstantSearch searchClient={client} indexName={indexName}>
      {children}
    </InstantSearch>
  );
};

export default AlgoliaProvider;
