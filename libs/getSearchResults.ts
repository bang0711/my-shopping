export async function getSearchResults(term: string, searchParams: any) {
  const filters: { key: any; value: any }[] = [];
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      if (key == "maxPrice") {
        if ((value = "1000+")) return;
      }

      filters.push({
        key,
        value: key === "sortBy" ? value : Number(value),
      });
    }
  });
  const body = {
    source: "google_shopping_search",
    domain: "com",
    query: term,
    pages: 1,
    parse: true,
    context: filters,
  };
  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`bang07112004:Bang07112004#`).toString("base64"),
    },
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}
