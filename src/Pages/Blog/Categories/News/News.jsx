import React from "react";

import image7 from "../../../../assets/images/image17.png";
import image8 from "../../../../assets/images/image18.png";
import image10 from "../../../../assets/images/image19.png";
import image11 from "../../../../assets/images/image20.png";
import image12 from "../../../../assets/images/image12.png";
import image13 from "../../../../assets/images/image13.png";
import image14 from "../../../../assets/images/image14.png";
import image16 from "../../../../assets/images/image16.png";

const News = () => {
  const data = [
    {
      image: image13,
      p1: "Chowdeck is Now in Ghana — Here’s What We Have in Store",
      d1: " After months of planning, training, and listening, we’re excited to officially launch Chowdeck in Ghana!",
      btn: "Read More",
    },
    {
      image: image16,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image7,
      p1: "Get Free Deliveries and Reduced Service Fees with Chowpass!",
      d1: " What if we told you there’s a way to save on delivery fees, service charges, and surge fees? It's called Chowpass!",
      btn: "Read More",
    },
    {
      image: image8,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image10,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image11,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image12,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image14,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image16,
      p1: "Get Free Deliveries and Reduced Service Fees with Chowpass!",
      d1: " What if we told you there’s a way to save on delivery fees, service charges, and surge fees? It's called Chowpass!",
      btn: "Read More",
    },
  ];

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-x-auto gap-10 px-25">
          {data.map((item, index) => (
            <div key={index}>
              <div className="border-4 rounded-4xl border-black max-w-[400px]  max-h-[480px] overflow-hidden">
                <img
                  src={item.image}
                  alt="s1"
                  className=" overflow-hidden w-full"
                />
                <p className="text-[14px] font-extrabold text-black pt-[16px] px-[20.6px] bg-white">
                  {item.p1}
                </p>

                <p className="font-medium text-[18px] text-black pt-[19px]   text-center items-center px-[10px] bg-white">
                  {item.d1}
                </p>

                <div className="pt-[21px] flex justify-center items-center bg-white mb-3">
                  <button
                    className="font-medium text-[16px]
                 rounded-xl
                  text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-20 py-3 opacity/5  bg-gray-200"
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
