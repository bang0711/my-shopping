/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Highlights from "@/components/Highlights";
import Images from "@/components/Images";
import ProductDetails from "@/components/ProductDetails";
import RelatedItems from "@/components/RelatedItems";
import Reviews from "@/components/Reviews";
import Specifications from "@/components/Specifications";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function ProductPage({ params: { id } }: Props) {
  const response = await fetch(
    `http://localhost:3000/api/shopping/product/${id}`
  );

  const productData = (await response.json()) as ProductData;

  if (!productData.content.pricing) {
    notFound();
  }

  console.log(productData.content.related_items);

  return (
    <div className="p-12 pt-0">
      <h1 className="text-2xl">{productData.content.title}</h1>
      {productData.content.reviews && (
        <div className="flex space-x-1">
          {[
            ...Array.from({
              length: Math.round(productData.content.reviews.rating),
            }),
          ].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
          ))}
          {[
            ...Array.from({
              length: 5 - Math.round(productData.content.reviews.rating),
            }),
          ].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-gray-200" />
          ))}
        </div>
      )}

      <section className="flex flex-col lg:flex-row mt-5 md:mt-0">
        <Images productData={productData} />
        <div className="pt-10 flex-1">
          <div>
            {productData.content.pricing.online[0].details && (
              <ProductDetails productData={productData} />
            )}

            {productData.content.highlights && (
              <Highlights productData={productData} />
            )}
          </div>
        </div>
      </section>

      <section>
        <hr className="my-10" />
        {productData.content.reviews ? (
          <Reviews productData={productData} />
        ) : (
          <div>
            <h3 className="font-bold text-2xl">Reviews</h3>
            <h4 className="text-lg italic">No Reviews yet</h4>
          </div>
        )}
      </section>

      {productData.content.specifications && (
        <Specifications productData={productData} />
      )}

      {productData.content.related_items && (
        <RelatedItems productData={productData} />
      )}
    </div>
  );
}

export default ProductPage;
