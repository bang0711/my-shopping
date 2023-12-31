/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { hrtime } from "process";
import React from "react";

type Props = {
  results: any;
  term: string;
};

function ResultsList({ results, term }: Props) {
  return (
    <div className="flex md:px-5">
      <div className="w-36 md:w-64">
        {results.results.map((result: PageResult) => (
          <div key={result.job_id} className="space-y-2">
            {result.content.results.filters?.map((filter) => (
              <div
                key={filter.name}
                className="border rounded-r-lg md:rounded-lg p-5"
              >
                <p className="font-bold">{filter.name}</p>
                <div className="flex flex-col">
                  {filter.values.map((value) => (
                    <Link
                      key={value.url}
                      prefetch={false}
                      href={`https://www.google.com${value.url}`}
                    >
                      {value.value}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="px-5 md:p-10 md:pt-0 space-y-5 flex-1">
        {results.results.map((result: PageResult, i: any) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
            key={result.job_id}
          >
            {i !== 0 && <hr className="w-full col-span-full" />}

            <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 py-5">
              <div className="flex space-x-2 items-center divide-x-2">
                <h1>Shop On Google</h1>
              </div>

              <h3 className="font-extralight">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Showing results of "{decodeURIComponent(term)}"
              </h3>
            </div>

            {result?.content?.results?.organic
              ?.filter((item) => !item.url.includes("url?url="))
              .map(async (item) => {
                const response = await fetch(
                  `https://my-shopping-phi.vercel.app/api/shopping/product/${item.url
                    .split("?")?.[0]
                    .replace("/shopping/product/", "")}`
                );

                const productData = (await response.json()) as ProductData;

                if (!productData.content.pricing) {
                  notFound();
                }

                return (
                  <Link
                    key={item.pos}
                    prefetch={false}
                    href={item.url.split("?")?.[0]}
                    className={`border rounded-2xl flex flex-col hover:shadow-lg transition-all duration-300 ease-in-out`}
                  >
                    <div className="border-b p-5 flex-1">
                      <p className="text-[#1b66d2] truncate">{item.title}</p>
                      <img
                        loading="lazy"
                        src={productData.content.images?.full_size[0]}
                        alt={item.title}
                        className="h-40 w-40 border rounded-md object-contain p-5 mx-auto mt-5"
                      />
                    </div>

                    <div className="px-5 py-2 not-italic">
                      <p className="font-light">
                        {item.price_str} {item.currency}
                      </p>
                      <p className="text-[#1b66d2] font-semibold truncate">
                        {item.merchant.name}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
