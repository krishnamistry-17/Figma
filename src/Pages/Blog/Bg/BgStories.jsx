import React from "react";

import image7 from "../../../assets/images/image7.png";
import image8 from "../../../assets/images/image8.png";
import image9 from "../../../assets/images/image9.png";

const BgStories = () => {
  const data = [
    {
      image: image7,
      p1: "Chowdeck is Now in Ghana — Here’s What We Have in Store",
      d1: " After months of planning, training, and listening, we’re excited to officially launch Chowdeck in Ghana!",
      btn: "Read More",
    },
    {
      image: image8,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image9,
      p1: "Get Free Deliveries and Reduced Service Fees with Chowpass!",
      d1: " What if we told you there’s a way to save on delivery fees, service charges, and surge fees? It's called Chowpass!",
      btn: "Read More",
    },
  ];

  return (
    <div>
      <div className="grid  gap-8 ">
        {data.map((item, index) => (
          <div key={index}>
            <div className="border-4 rounded-4xl border-black max-w-[360.33px] max-h-[446px] overflow-hidden">
              <img src={item.image} alt="s1" className=" overflow-hidden" />
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
                  text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-20 py-3 opacity/5 mb-3 bg-gray-200"
                >
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BgStories;
