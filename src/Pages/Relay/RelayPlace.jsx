import React from "react";
import order1 from "../../assets/images/relayimage.png";
import playstore from "../../assets/svg/playstore.svg";
import gapple from "../../assets/svg/gapple.svg";
import bag from "../../assets/images/bag.png";
import ycstar from "../../assets/svg/ycstar.svg";
import order from "../../assets/svg/order.svg";
import relaycarpet from "../../assets/svg/relaycarpet.svg";
import promo1 from "../../assets/svg/promo1.svg";
import relaypackage from "../../assets/svg/package.svg";
import RelayAccord from "./RelayAccord";
const RelayPlace = () => {
  return (
    <>
      <div className="bg-black relative ">
        <div className="absolute xl:-top-83 md:-top-68 -top-115 ">
          <RelayAccord />
        </div>

        <div className="pt-[1755px] sm:pt-[1600px] md:pt-[1340px] lg:pt-[720px]">
          <div className="flex flex-col sm:flex-row lg:px-[96px] gap-6 pt-[298px]">
            <div className="flex-1 bg-[#990038] relative rounded-2xl py-4 z-0">
              {/* Headline */}
              <h2 className="text-[32px] md:text-[50px] xl:text-[60px] absolute z-10 pt-2 pb-5 pl-2 xl:pl-9 text-white font-bold tracking-tighter max-w-xs md:max-w-sm">
                <span className="text-[#ffb3ce]">Send </span>
                <span>and </span>
                <span className="text-[#ffb3ce]">Receive </span>
                <span className="text-white">swiftly</span>
              </h2>

              {/* Images for medium and up */}
              <div className="hidden sm:block">
                <img
                  src={relaycarpet}
                  alt="recp"
                  className="absolute right-0 xl:w-[298px] xl:h-[215px] w-[200px] h-[200px]"
                />
                <img
                  src={relaypackage}
                  alt="pkg"
                  className="absolute bottom-0 right-0 xl:w-[287px] xl:h-[354px] w-[200px] h-[300px]"
                />
                <img
                  src={promo1}
                  alt="p1"
                  className="hidden lg:block absolute bottom-0 left-0 xl:w-[607px] xl:h-[405px] w-[550px] h-[350px]"
                />
              </div>

              {/* Desktop Buttons */}
              <div className="hidden xl:flex flex-col pl-4 absolute z-10 top-[22rem] md:top-[19rem]">
                <button className="bg-white text-[#0C513F] font-medium text-[16px] py-[12px] md:py-[20px] md:px-[24px] px-[16px] rounded-md flex items-center gap-1.5">
                  <img src={playstore} alt="ps" />
                  Download on Google Play
                </button>
                <button className="bg-white text-[#0C513F] font-medium text-[16px] py-[12px] md:py-[20px] md:px-[24px] px-[16px] rounded-md flex items-center mt-4">
                  <img
                    src={gapple}
                    alt="as"
                    className="pr-[8px] w-[42px] h-[25px]"
                  />
                  Download on App Store
                </button>
              </div>

              {/* Mobile Buttons */}
              <div className="xl:hidden flex gap-2 pt-[180px] pl-[12px] ">
                <img
                  src={playstore}
                  alt="ps"
                  className="bg-white rounded-full p-[15px] w-[60px] h-[60px]"
                />
                <img
                  src={gapple}
                  alt="as"
                  className="bg-white rounded-full p-[15px] w-[60px] h-[60px]"
                />
              </div>

              {/* Promo Text */}
              <div className="absolute left-2 bottom-0 sm:bottom-[80px]">
                <div>
                  <p
                    className="text-black text-[18px] font-bold uppercase px-6 py-4 bg-[#ffb3ce] absolute
                   lg:bottom-14 md:bottom-[-74px] bottom-16 lg:left-10 left-0.5 flex gap-3 border-4 border-black rounded-xl"
                  >
                    <span className="w-[20px] h-[20px] rounded-full bg-[#ffc501] border-4 border-black mt-0.5"></span>
                    userelay
                  </p>
                </div>
                <p className="text-white text-[14px] sm:text-[16px] pt-2 max-w-[64%] lg:pl-8 pl-2">
                  Get <span className="text-[#FFC501]">₦300 off</span> your
                  first order when you use this promo code!
                </p>
              </div>
            </div>

            {/* Side Image (Desktop only) */}
            <div className="hidden md:flex flex-1 pt-8 sm:pt-7 md:pt-6 lg:pt-0">
              <img
                src={order1}
                alt="o1"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center pt-[96px] lg:pl-[96px]">
          <div className="flex">
            <img src={ycstar} alt="ys" />
            <p className="font-extrabold md:text-[47px] sm:text-[37px] text-[24px] text-white pl-[8px] pr-[17px]">
              Cool stuff only
            </p>
            <button className="text-[16px] text-[#FFEDB3] pt-[24px]">
              Subscribe to our newsletter
            </button>
          </div>
          <div>
            <img
              src={bag}
              alt="bag"
              className="lg:pr-[96px]  md:pt-0 pt-3
  
              "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RelayPlace;
