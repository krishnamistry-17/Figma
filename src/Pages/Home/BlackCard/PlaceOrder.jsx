import React from "react";
import order1 from "../../../assets/images/order1.png";
import bottle from "../../../assets/images/bottle.png";
import promo from "../../../assets/images/promo.png";
import p from "../../../assets/images/p.png";
import playstore from "../../../assets/svg/playstore.svg";
import gapple from "../../../assets/svg/gapple.svg";
import bag from "../../../assets/images/bag.png";
import ycstar from "../../../assets/svg/ycstar.svg";
// import Faq from "../WhiteCard/Faq";
import FaqAccordian from "../WhiteCard/FaqAccordian";
const PlaceOrder = () => {
  return (
    <>
      <div className="bg-black relative ">
        <div className="relative -top-55 ">
          <FaqAccordian />
        </div>
        <div className="">
          <div className="lg:flex lg:px-[96px] px-4 gap-6 ">
            <div className="flex-1 bg-[#0C513F] relative rounded-2xl">
              <h2 className="font-extrabold sm:text-[58px] text-[32px] text-white pl-[40px] pt-[39px]">
                Place your order in seconds
              </h2>
              <div className="sm:flex flex-col hidden pt-[33px] pl-[40px]">
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
              {/*mobile */}
              <div className="sm:hidden flex gap-2 pt-[33px] pl-[40px]">
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

              <div className="sm:pt-[165px] pt-6 sm:pl-[28px]">
                <img src={promo} alt="pm" />
              </div>
              <div className="pt-[8px] sm:pl-[40px] pl-[15px]">
                <button className="text-[18px] font-bold text-black flex bg-[#FFC501] border-black border-4 rounded-2xl p-[13px] ">
                  <span className="bg-[#0C513F] border-4 rounded-full border-black h-4 w-4 mt-1 mr-2  "></span>
                  CDNWEB
                </button>
              </div>
              <div>
                <p className="sm:text-[16px] text-[14px] text-white pt-[7px] md:max-w-[319px] sm:max-w-[230px] max-w-[178px] sm:pl-[40px] pl-[18px] pb-2">
                  Get <span className="text-[#FFC501]">₦300 off</span> your
                  first order when you use this promo code!
                </p>
              </div>
              <div className=" absolute bottom-0 right-0 w-auto">
                <img
                  src={bottle}
                  alt="btl"
                  className="
              md:w-[210px] md:h-[472px]
              sm:w-[162px] sm:h-[348px]
              w-[109px] h-[222px]
              "
                />
              </div>
            </div>
            <div className="hidden md:flex flex-1  lg:pt-0 md:pt-6 sm:pt-7 pt-8">
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

export default PlaceOrder;
