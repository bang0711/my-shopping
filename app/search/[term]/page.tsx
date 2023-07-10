import ResultsList from "@/components/ResultsList";
import { getSearchResults } from "@/libs/getSearchResults";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term }, searchParams }: Props) {
  if (!term) {
    redirect("/");
  }

  const results = await getSearchResults(term, searchParams);

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  );
}

export default SearchPage;

// Authorization: Basic YmFuZzA3MTEyMDA0OkJhbmcwNzExMjAwNCM=
