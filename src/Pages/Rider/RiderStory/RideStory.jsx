import React from "react";
import noodles from "../../../assets/images/noodles.png";
import image7 from "../../../assets/images/image7.png";
import image8 from "../../../assets/images/image8.png";
import image9 from "../../../assets/images/image9.png";

const RideStory = () => {
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
    <div className="pt-[40px] pb-[144px]">
      <div className="sm:flex gap-2.5 xl:pl-[96px] pl-[10px]">
        <p className="font-extrabold text-[63px] text-black py-[20.5px]">
          Stories
        </p>
        <img src={noodles} alt="ndls" />
      </div>
      <div className="pt-[32px] xl:px-[96px] px-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 ">
          {data.map((item, index) => (
            <div key={index}>
              <div className="border-4 rounded-2xl border-black max-w-[363.33px] max-h-[446px]">
                <img src={item.image} alt="s1" />
                <p className="text-[14px] font-extrabold text-black pt-[16px] px-[20.6px]">
                  {item.p1}
                </p>

                <p className="font-medium text-[18px] text-black pt-[19px]   text-center items-center px-[10px]">
                  {item.d1}
                </p>

                <div className="pt-[31px] flex justify-center items-center">
                  <button
                    className="font-medium text-[16px]
                 rounded-2xl
                  text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-18 py-3 opacity/5 mb-3"
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

export default RideStory;
