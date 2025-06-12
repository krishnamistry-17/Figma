import React from "react";
import meal from "../../../assets/images/meal.png";
import ystar from "../../../assets/svg/ystar2.svg";
import pstar from "../../../assets/svg/pstar.svg";
import ohalf from "../../../assets/svg/ohalf.svg";
import phalf from "../../../assets/svg/phalf.svg";
import glocation from "../../../assets/svg/glocation.svg";
import phone1 from "../../../assets/images/phone1.png";
import phone2 from "../../../assets/images/phone2.png";
import phone3 from "../../../assets/images/phone3.png";
import phone4 from "../../../assets/images/phone4.png";
import Categories from "../Categories/Categories";

const GreenCard = () => {
  return (
    <>
      <div className="relative pt-14 sm:pt-[96px]">
        <div
          className="absolute 
        top-5 left-4
        sm:top-7 xl:left-52 md:left-3 
        sm:w-[95%] sm:max-w-[1248px]  md:w-[97%] w-[90%] "
        >
          <Categories />
        </div>
        <div className="bg-[#0C513F] pt-[810px] sm:pt-[720px] pb-24 sm:pb-[100px]">
          <div className="xl:px-[96px] md:px-[20px] sm:px-[73px] px-[20px] pt-[64px]">
            <div className="xl:flex justify-between">
              <div className="xl:flex">
                <p className="lg:text-[63px] md:text-[52px] text-[30px] text-white font-extrabold xl:max-w-[441px] ">
                  Chowdeck has you covered
                </p>
                <img
                  src={meal}
                  alt="mil"
                  className="xl:pt-[43px] xl:ml-[-25px]"
                />
              </div>
              <div className="xl:flex justify-end items-center ">
                <p className="sm:text-[24px] text-[20px] text-white px-[16px] md:max-w-[500px]">
                  Hungry? Too tired to cook? Have friends over, or do you simply
                  need to chop life? Download Chowdeck, and let’s deliver
                  happiness to your doorstep in minutes.
                </p>
              </div>
            </div>

            <div className="pt-[80px] grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8">
              <div className="flex gap-2 rounded-md py-[12px] px-[28px] bg-white/25">
                <img src={ystar} alt="str" className="w-[24px] h-[24px]" />
                <p className="font-semibold text-[16px] text-white">
                  Quick and easy onboarding
                </p>
              </div>
              <div className="flex rounded-md py-[22px] px-[28px] bg-white/25 ">
                <img src={ohalf} alt="str" className="w-[35px] h-[16px]" />
                <p className="font-semibold text-[16px]  text-white">
                  Quality meal choices
                </p>
              </div>
              <div className="flex gap-2   rounded-md py-[22px] px-[28px] bg-white/25 ">
                <img src={pstar} alt="str" className="w-[35px] h-[24px]" />
                <p className="font-semibold text-[16px] text-white">
                  Live updates on orders
                </p>
              </div>
              <div className="flex gap-2   rounded-md py-[22px] px-[28px] bg-white/25 ">
                <img src={glocation} alt="str" className="w-[21px] h-[24px]" />
                <p className="font-semibold text-[16px] text-white">
                  Highly rated riders
                </p>
              </div>
              <div className="flex gap-2   rounded-md py-[12px] px-[28px] bg-white/25 ">
                <img src={phalf} alt="str" className="w-[35px] h-[16px]" />
                <p className="font-semibold text-[16px] text-white">
                  20/7 support for customers and vendors
                </p>
              </div>
            </div>

            <div className="pt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              <div>
                <img src={phone1} alt="p1" />
              </div>
              <div>
                <img src={phone2} alt="p2" className="pt-[32px]" />
              </div>
              <div>
                <img src={phone3} alt="p3" />
              </div>
              <div>
                <img src={phone4} alt="p4" className="pt-[32px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenCard;
