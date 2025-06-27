import React from "react";
import order1 from "../../assets/images/order1.png";

import playstore from "../../assets/svg/playstore.svg";
import gapple from "../../assets/svg/gapple.svg";
import bag from "../../assets/images/bag.png";
import ycstar from "../../assets/svg/ycstar.svg";
import ChowPassAccord from "./ChowPassAccord";
import order from "../../assets/svg/order.svg";
const ChowPassPlace = () => {
  return (
    <>
      <div className="bg-black relative ">
        <div className="relative  -top-55 ">
          <ChowPassAccord />
        </div>
        <div className="">
          <div className="lg:flex lg:px-[96px] px-4 gap-6 ">
            <div className="flex-1 bg-[#d1c9f7] relative rounded-2xl z-0">
              <div className="">
                <h2 className=" text-[37px] absolute z-10  lg:text-[60px] md:pt-2 pt-22 pl-4  text-[#271386] font-bold  tracking-tighter md:max-w-sm">
                  Unlock Exclusive Perks with Chowpass
                </h2>
              </div>
              <div>
                <img src={order} alt="order" />
              </div>

              <div className="sm:flex flex-col hidden pt-[33px] pl-4 absolute z-10 md:bottom-34">
                <div>
                  <button
                    className="bg-white text-[#0C513F] 
                      font-medium 
                      text-[16px] py-[12px] md:py-[20px] 
                      md:px-[24px]  px-[16px]
                      rounded-md flex items-center gap-1.5"
                  >
                    <img src={playstore} alt="ps" />
                    Download on Google Play
                  </button>
                </div>
                <div className="pt-[16px]">
                  <button
                    className="bg-white text-[#0C513F] 
                      font-medium 
                      text-[16px] py-[12px] md:py-[20px] 
                      md:px-[24px]  px-[16px]
                      rounded-md flex items-center "
                  >
                    <img
                      src={gapple}
                      alt="as"
                      className="pr-[8px] w-[42px] h-[25px]"
                    />
                    Download on App Store
                  </button>
                </div>
              </div>

              <div className="sm:hidden flex gap-2 pt-[33px] pl-[40px] pb-7.5">
                <div>
                  <img
                    src={playstore}
                    alt="ps"
                    className="bg-white rounded-full p-[15px]"
                  />
                </div>
                <div className="pt-[16px]">
                  <img
                    src={gapple}
                    alt="as"
                    className="bg-white rounded-full p-[18px] mt-[-15px]"
                  />
                </div>
              </div>
            </div>

            <div className=" hidden md:flex flex-1  lg:pt-0 md:pt-6 sm:pt-7 pt-8">
              <img src={order1} alt="o1" />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center pt-[96px] lg:pl-[96px]">
          <div className="md:flex hidden">
            <img src={ycstar} alt="ys" />
            <p className="font-extrabold md:text-[47px] sm:text-[37px] text-[24px] text-white pl-[8px] pr-[17px]">
              Cool stuff only
            </p>
            <button className="text-[16px] text-[#FFEDB3] pt-[24px]">
              Subscribe to our newsletter
            </button>
          </div>
          <div className="flex sm:hidden">
            <div>
              <img src={ycstar} alt="ys" />
            </div>
            <div>
              <p className="font-extrabold  text-[24px] text-white pl-[8px] pr-[17px]">
                Cool stuff only
              </p>
              <button className="text-[16px] text-[#FFEDB3] pt-[8px] pb-21">
                Subscribe to our newsletter
              </button>
            </div>
          </div>
          <div>
            <img
              src={bag}
              alt="bag"
              className="lg:pr-[96px]  md:pt-0 pt-3 md:block hidden
                     "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChowPassPlace;
