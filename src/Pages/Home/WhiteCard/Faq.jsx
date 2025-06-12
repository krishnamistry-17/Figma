import React from "react";
import ystar2 from "../../../assets/svg/ystar2.svg";
import bstar from "../../../assets/svg/bstar.svg";

const Faq = () => {
  return (
    <div className="lg:px-[96px] bg-white pt-[143px]">
      <div className="border-4 border-black rounded-md">
        <div className="lg:px-[36px] pt-[36px] pb-[28px]">
          <div className="lg:flex lg:gap-8">
            <div className="flex-1">
              <h2 className="font-extrabold text-[63px] text-[#0C513F]">
                FAQs.
              </h2>
              <div className="flex-col pt-[40px] ">
                <div className="flex justify-between items-center bg-black rounded-md">
                  <p className="font-extrabold text-[18px] text-white pt-[20px] pb-[22px] pl-[21px] ">
                    What is Chowdeck?
                  </p>
                  <img
                    src={ystar2}
                    alt="ys2"
                    className="py-[23px] pr-[23px] "
                  />
                </div>
                <div className="pt-[16px] rounded-md">
                  <p className="font-extrabold text-[18px] text-[#0C513F] pt-[20px] pb-[22px] pl-[21px] ">
                    What locations do we currently deliver to?
                  </p>
                </div>
                <div className="pt-[16px] rounded-md">
                  <p className="font-extrabold text-[18px] text-[#0C513F] pt-[20px] pb-[22px] pl-[21px]">
                    What is Chowdeck wallet?
                  </p>
                </div>
                <div className="pt-[16px] rounded-md">
                  <p className="font-extrabold text-[18px] text-[#0C513F] pt-[20px] pb-[22px] pl-[21px]">
                    What is Chowscore?
                  </p>
                </div>
                <div className="pt-[16px] rounded-md">
                  <p className="font-extrabold text-[18px] text-[#0C513F] pt-[20px] pb-[22px] pl-[21px]">
                    What is Service fee?
                  </p>
                </div>
                <div className="pt-[16px] rounded-md">
                  <p className="font-extrabold text-[18px] text-[#0C513F] pt-[20px] pb-[22px] pl-[21px]">
                    Why do we charge Service fee?
                  </p>
                </div>
                <div className="pt-[16px] rounded-md">
                  <p className="font-extrabold text-[18px] text-[#0C513F] pt-[20px] pb-[22px] pl-[21px]">
                    What is Surge fee?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-[63px] text-[#0C513F]">
                Ans.
              </h2>
              <div className="pt-[40px]">
                <div className="bg-[#FFC501] rounded-md pb-[320px]">
                  <img src={bstar} alt="bs" className="pt-[32px] pl-[32px]" />
                  <p className="text-[24px] text-black pt-[32px] px-[33px] ">
                    Chowdeck is a technology company that provides logistics
                    services to both vendors and consumers. This potentially
                    allows food vendors to deliver meals seamlessly while also
                    providing consumers with an easy platform to order meals
                    from their favourite restaurants in their city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
