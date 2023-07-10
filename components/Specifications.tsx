import React from "react";

type Props = { productData: any };

function Specifications({ productData }: Props) {
  return (
    <section>
      <hr className="my-10" />
      <h3 className="font-bold text-2xl">Specification</h3>
      <div className="flex flex-wrap space-x-5">
        {productData.content.specifications.map((specification: any) => (
          <div key={specification.section_title}>
            <h4 className="font-bold my-2 text-xl">
              {specification.section_title}
            </h4>
            {specification.items.map((item: any) => (
              <div className="text-sm" key={item.title}>
                <h5 className="font-bold">{item.title}</h5>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specifications;
