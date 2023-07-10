/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  productData: any;
};

function Images({ productData }: Props) {
  return (
    <div className="md:p-10 md:pl-0 mx-auto">
      <div className="flex gap-4">
        <img
          src={productData.content.images?.full_size[0]}
          alt=""
          className="h-80 w-80 border rounded-md object-contain p-5"
        />
        <div className="flex flex-col justify-between">
          {productData.content.images?.full_size
            .slice(1, 3)
            .map((image: any) => (
              <img
                src={image}
                key={image}
                className="w-[9.5rem] h-[9.5rem] object-contain border rounded-md"
                alt=""
              />
            ))}
        </div>
      </div>

      <div className="flex space-x-6 overflow-x-scroll py-2 md:w-[30rem]">
        {productData.content.images?.full_size.slice(3).map((image: any) => (
          <div key={image}>
            <img src={image} className="w-20 h-20 object-contain" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
