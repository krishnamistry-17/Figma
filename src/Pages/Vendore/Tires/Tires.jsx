import React from "react";
import right from "../../../assets/svg/right.svg";
import playstore from "../../../assets/svg/playstore.svg";
import appstore from "../../../assets/svg/appstore.svg";
const Tires = () => {
  return (
    <div className="bg-[#f3f1fd]">
      <div>
        <h2 className=" text-center text-[#271386] md:text-[64px] text-[45px] font-bold pt-18">
          Chowdeck vendor tiers
        </h2>
        <p className="text-center text-black pb-[70px] text-[18px] mx-auto px-4">
          If you're part of our basic, premium or Agba plan, your store will be
          highlighted to Chowpass subscribers, who enjoy zero delivery fees and
          reduced service fees.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-[50px] sm:px-[30px] px-[10px]">
        {/*grid1 */}
        <div
          className="bg-white p-[30px] 
        "
        >
          <span className=" block pb-2 text-[18px]">Free</span>
          <span className=" block font-medium text-[24px] pb-5 border-b border-slate-100">
            Early days
          </span>
          <ul className=" mt-5 space-y-6">
            <li className=" flex items-center space-x-2 col-span-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span className="text-[14px] flex-1">10% commission</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for non-Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Delivery radius above 5km</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Access to Chowpass</span>
            </li>
          </ul>
        </div>
        {/*grid2 */}
        <div className="bg-white p-[30px] ">
          <span className=" block pb-2 text-[18px]">Basic</span>
          <span className=" block font-medium text-[24px] pb-5 border-b border-slate-100">
            Ready for growth
          </span>
          <ul className=" mt-5 space-y-6">
            <li className=" flex items-center space-x-2 col-span-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span className="text-[14px] flex-1">10% commission</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for non-Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Delivery radius above 5km</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Access to Chowpass</span>
            </li>
          </ul>
        </div>
        {/*grid3 */}
        <div className="bg-white p-[30px] ">
          <span className=" block pb-2 text-[18px]">Premium</span>
          <span className=" block font-medium text-[24px] pb-5 border-b border-slate-100">
            Top tier exposure
          </span>
          <ul className=" mt-5 space-y-6">
            <li className=" flex items-center space-x-2 col-span-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span className="text-[14px] flex-1">10% commission</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for non-Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Delivery radius above 5km</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Access to Chowpass</span>
            </li>
          </ul>
        </div>
        {/*grid4 */}
        <div className="bg-white p-[30px] ">
          <span className=" block pb-2 text-[18px]">Agba</span>
          <span className=" block font-medium text-[24px] pb-5 border-b border-slate-100">
            Sustained growth
          </span>
          <ul className=" mt-5 space-y-6">
            <li className=" flex items-center space-x-2 col-span-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span className="text-[14px] flex-1">10% commission</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for non-Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>15% service charge for Chowpass subscribers</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Delivery radius above 5km</span>
            </li>
            <li className=" flex items-center space-x-2 col-span-2">
              <span className=" flex items-center justify-center  h-6 w-6 rounded-full bg-[#E8E4FB] text-[#8C77EC]">
                {" "}
                <img src={right} alt="tr" />
              </span>
              <span>Access to Chowpass</span>
            </li>
          </ul>
        </div>
      </div>
      {/*selling */}
      <div className="py-10">
        <h2 className="md:text-[64px] text-[43px] text-black font-bold text-center">
          Start selling
        </h2>
        <div>
          <div
            className="flex flex-col md:flex-row justify-center
                            items-center gap-4 mt-6"
          >
            <div>
              <button
                className="bg-green-950 text-white 
                               font-medium 
                               text-[18px] py-[12px] md:py-[20px] 
                               md:px-[24px]  px-[16px]
                               rounded-md flex items-center gap-1.5"
              >
                <img src={playstore} alt="ps" />
                Download on Google Play
              </button>
            </div>
            <div>
              <button
                className="bg-green-950 text-white 
                               font-medium 
                               text-[18px] py-[12px] md:py-[20px] 
                               md:px-[24px]  px-[16px]
                               rounded-md flex items-center gap-1.5"
              >
                <img src={appstore} alt="as" />
                Download on App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tires;
