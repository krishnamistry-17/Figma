import React from "react";
import pbag from "../../assets/svg/pbag.svg";
import headset from "../../assets/svg/headset.svg";
import pas from "../../assets/svg/pas.svg";
import calc from "../../assets/svg/calc.svg";
import surge from "../../assets/svg/surge.svg";
const Card = () => {
  const data = [
    {
      image: pbag,
      head: "Free Delivery",
      detail: "Enjoy free delivery on orders above ₦3,000",
    },
    {
      image: calc,
      head: "Reduced Service Fees",
      detail: "Pay lower service fees on orders",
    },
    {
      image: surge,
      head: "No Surge Fees",
      detail: "Skip surge fees, no matter the time or weather",
    },
    {
      image: pbag,
      head: "Free Delivery",
      detail: "Enjoy free delivery on orders above ₦3,000",
    },
    {
      image: pas,
      head: "Zero Third Party Ads",
      detail: "Enjoy a distraction-free experience while ordering",
    },
    {
      image: headset,
      head: "Top Notch Support",
      detail: "Enjoy timely assistance from our stellar team",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="container relative z-10 py-10">
          {/* Title with lines */}
          <div className="flex items-center justify-center">
            <span className="border-t block flex-1 border-[#2613861b]"></span>
            <span className="text-[#271386] leading-[3px] block px-5 font-bold">
              ALL BENEFITS
            </span>
            <span className="border-t block flex-1 border-[#2613861b]"></span>
          </div>

          {/* Scrollable card section */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="mt-10 flex gap-4 justify-center min-w-full">
              {data.map((item, index) => (
                <div key={index}>
                  <div className="bg-white rounded-xl p-6 h-[246px] w-[242px] flex flex-col">
                    <div className="flex justify-between items-center">
                      <img src={item.image} alt="pb" />
                      <p className="text-[#271386] text-[25px] pl-4">
                        {item.head}
                      </p>
                    </div>
                    <p className="text-[#271386] text-[18px] mt-auto">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
