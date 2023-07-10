import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type Props = { productData: any };

function RelatedItems({ productData }: Props) {
  return (
    <section>
      <hr className="my-10" />
      <h3 className="font-bold text-2xl mb-5">Related Items</h3>
      {productData.content.related_items.map((item: any) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
          key={item.title}
        >
          {item.items
            .filter((item: any) => !item.url.includes("url?url="))
            .map((item: any) => (
              <Link
                href={item.url.split("?")?.[0]}
                key={item.title}
                className="border rounded-2xl flex flex-col hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="border-b p-5 flex-1 space-y-2">
                  <p className="text-[#1b66d2]">{item.title}</p>
                  {item.rating && (
                    <div className="flex space-x-1">
                      {[...Array.from({ length: Math.round(item.rating) })].map(
                        (rating) => (
                          <StarIcon
                            key={1}
                            className="w-5 h-5 text-yellow-500"
                          />
                        )
                      )}
                    </div>
                  )}
                </div>

                <div className="px-5 py-2 not-italic">
                  <p className="font-light">
                    {item.price} {item.currency}
                  </p>
                  <p className="text-[#1b66d2] font-semibold"></p>
                </div>
              </Link>
            ))}
        </div>
      ))}
    </section>
  );
}

export default RelatedItems;
