import React from "react";

import image7 from "../../../../assets/images/image25.png";
import image8 from "../../../../assets/images/image26.png";
import image10 from "../../../../assets/images/image19.png";
import image11 from "../../../../assets/images/image20.png";
import image12 from "../../../../assets/images/image12.png";
import image13 from "../../../../assets/images/image13.png";
import image14 from "../../../../assets/images/image14.png";
import image16 from "../../../../assets/images/image16.png";

const Partnerships = () => {
  const data = [
    {
      image: image7,
      p1: "Love Is In The Grey with Grey",
      d1: "To celebrate sweet, sweet devotion on Valentine's Day, we partnered with Grey to present Love Is In The Grey.",
      btn: "Read More",
    },
    {
      image: image8,
      p1: "Everything’s Better With Love and Chocolates with Chocolate City",
      d1: "To commemorate Valentine’s Day, we partnered with Chocolate City Music to...",
      btn: "Read More",
    },
    {
      image: image16,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: image13,
      p1: "Chowdeck is Now in Ghana — Here’s What We Have in Store",
      d1: " After months of planning, training, and listening, we’re excited to officially launch Chowdeck in Ghana!",
      btn: "Read More",
    },
    {
      image: image10,
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
      image: image11,
      p1: "Get Free Deliveries and Reduced Service Fees with Chowpass!",
      d1: " What if we told you there’s a way to save on delivery fees, service charges, and surge fees? It's called Chowpass!",
      btn: "Read More",
    },
  ];

  return (
    <div>
      <div className="flex justify-center sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-full w-[400px] flex justify-center"
            >
              <div className="border-4 rounded-4xl border-black overflow-hidden max-w-[400px] w-full">
                <img
                  src={item.image}
                  alt="s1"
                  className="w-full h-auto object-cover"
                />
                <p className="text-[14px] font-extrabold text-black pt-4 px-5 bg-white">
                  {item.p1}
                </p>

                <p className="font-medium text-[18px] text-black pt-5 text-center px-3 bg-white">
                  {item.d1}
                </p>

                <div className="pt-5 flex justify-center items-center bg-white mb-3">
                  <button className="font-medium text-[16px] rounded-xl text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-10 py-3 bg-gray-200">
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

export default Partnerships;
