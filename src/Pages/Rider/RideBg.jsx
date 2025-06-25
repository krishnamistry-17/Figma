import React from "react";
import rider from "../../assets/svg/rider.svg";
import ridebg from "../../assets/svg/ridebg.svg";
import playstore from "../..//assets/svg/playstore.svg";
import appstore from "../../assets/svg/gapp.svg";
import Card from "./WithdrowCard/Card";

const RideBg = () => {
  return (
    <div>
      <div className=" relative">
        <div data-aos="fade-down" data-aos-delay="200">
          <img
            src={ridebg}
            alt="bg"
            className="z-0 w-[100%] h-[100%] bg-no-repeat bg-cover bg-position[50%]"
          />
        </div>

        <div
          className=" absolute z-20 md:top-40 top-3 lg:left-32 py-12"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <p
            className="lg:text-[112px] md:text-[60px] text-[26px]
            lg:max-w-[508px] md:pl-0 pl-4
          text-white font-bold"
          >
            Become a Champion
          </p>
          <div className="w-fit mx-0">
            <div className="md:flex flex-col md:flex-row md:items-center md:space-x-4 w-fit space-y-4 md:space-y-0   hidden">
              <div>
                <button
                  className="bg-white text-[#0C513F]
                                   font-medium 
                                   text-[14px] 
                                   md:px-[24px] md:py-[20px]
                                   sm:px-[16px] sm:py-[12px]
                                   px-[7px] py-[10px]
                                   rounded-md flex items-center gap-1.5"
                >
                  <img src={playstore} alt="ps" />
                  Download on Google Play
                </button>
              </div>
              <div>
                <button
                  className="bg-white text-[#0C513F]
                                   font-medium 
                                   text-[14px] 
                                   py-[12px] px-[16px]
                                   md:py-[20px]  md:px-[24px] 
                                   rounded-md flex items-center gap-1.5"
                >
                  <img src={appstore} alt="as" className="text-[#0C513F]" />
                  Download on App Store
                </button>
              </div>
            </div>
            <div className="flex flex-row md:items-center  w-fit space-x-2 pt-4 pl-4  sm:hidden">
              <div>
                <button
                  className="bg-white text-[#0C513F]
                                   font-medium 
                                   text-[14px] 
                                 
                                 p-[10px]
                                   rounded-full flex items-center gap-1.5"
                >
                  <img src={playstore} alt="ps" />
                </button>
              </div>
              <div>
                <button
                  className="bg-white text-[#0C513F]
                                   font-medium 
                                   text-[14px] 
                                 p-[15px]
                                  
                                   rounded-full flex items-center gap-1.5"
                >
                  <img src={appstore} alt="as" className="text-[#0C513F]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" container h-full relative"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className=" absolute z-20 sm:bottom-28 bottom-4 sm:right-16 right-0">
            <img
              src={rider}
              alt="rider"
              className="
              lg:w-[512px] lg:h-[687px]
              sm:w-[300px] sm:h-[330px]
              w-[200px] h-[200px]
              "
            />
          </div>
        </div>

        <div className=" absolute md:-mt-40 container pb-32  ">
          {/* <WIthdrowCard /> */}
          <Card />
        </div>
      </div>
    </div>
  );
};

export default RideBg;
