import React from "react";

type Props = { productData: any };

function ProductDetails({ productData }: Props) {
  return (
    <>
      <>
        <h3 className="font-bold text-2xl">Product Details</h3>
        <p className="text-lg">
          {productData.content.pricing.online[0].price_total}{" "}
          {productData.content.pricing.online[0].currency}
        </p>

        <div className="flex space-x-4">
          <p className="text-sm text-gray-600">
            ({productData.content.pricing.online[0].price}{" "}
            {productData.content.pricing.online[0].currency} +{" "}
            {productData.content.pricing.online[0].price_tax}{" "}
            {productData.content.pricing.online[0].currency} tax)
          </p>

          {productData.content.pricing.online.length > 1 && (
            <p className="text-sm text-blue-600">
              + {productData.content.pricing.online.length - 1} more prices
            </p>
          )}
        </div>

        <p className="txt-sm text-gray-600 mt-5">
          {productData.content.pricing.online[0].details}
        </p>
      </>
      <hr className="my-5" />
      <p>{productData.content.description}</p>
    </>
  );
}

export default ProductDetails;
