import React from "react";

import rider from "../../assets/svg/rider.svg";
import ridebg from "../../assets/svg/ridebg.svg";
import playstore from "../..//assets/svg/playstore.svg";
import appstore from "../../assets/svg/gapp.svg";

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
          className=" absolute top-40 left-32 py-12"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <p
            className="lg:text-[112px] md:text-[60px] text-[30px]
            lg:max-w-[508px]
          text-white font-bold"
          >
            Become a Champion
          </p>
          <div className="w-fit mx-0">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-fit space-y-4 md:space-y-0">
              {/* buttons */}
              <div>
                <button
                  className="bg-white text-[#0C513F]
                                   font-medium 
                                   text-[14px] py-[12px] md:py-[20px] 
                                   md:px-[24px]  px-[16px]
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
                                   text-[14px] py-[12px] md:py-[20px] 
                                   md:px-[24px]  px-[16px]
                                   rounded-md flex items-center gap-1.5"
                >
                  <img src={appstore} alt="as" className="text-[#0C513F]" />
                  Download on App Store
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className=" absolute bottom-8 right-16"
        >
          <img src={rider} alt="rider" />
        </div>
      </div>
    </div>
  );
};

export default RideBg;
