/* eslint-disable react/no-unescaped-entities */
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = { productData: any };

function Reviews({ productData }: Props) {
  return (
    <>
      <h3 className="font-bold text-2xl">
        Reviews ({productData.content.reviews.rating})
      </h3>
      <h4 className="text-xl italic">Top Review</h4>
      {productData.content.reviews.top_review && (
        <div className="border p-5 rounded-md mt-2">
          <div className="flex space-x-1">
            <p className="font-bold capitalize">
              {productData.content.reviews.top_review.author} Says:
            </p>
            <h5>{productData.content.reviews.top_review.title}</h5>
          </div>
          <div className="flex space-x-1 mb-2">
            {[
              ...Array.from({
                length: Math.round(
                  productData.content.reviews.top_review.rating
                ),
              }),
            ].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
            ))}
          </div>
          <p>"{productData.content.reviews.top_review.text}"</p>
        </div>
      )}
    </>
  );
}

export default Reviews;
