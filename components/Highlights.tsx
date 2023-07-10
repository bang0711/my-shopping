import React from "react";

type Props = { productData: any };

function Highlights({ productData }: Props) {
  return (
    <div className="mt-t space-y-2">
      <h3 className="font-bold text-2xl">Products Highlights</h3>
      <hr />
      <ul className="space-y-2">
        {productData.content.highlights?.map((highlight: any) => (
          <li className="list-disc" key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Highlights;
