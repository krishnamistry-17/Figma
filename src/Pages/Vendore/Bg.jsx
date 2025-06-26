import React from "react";
import vendore from "../../assets/svg/vendorebg.svg";
import playstore from "../..//assets/svg/playstore.svg";
import appstore from "../../assets/svg/appstore.svg";
import BgAnimate from "./BgAnimate";

const Bg = () => {
  return (
    <div>
      <div className="relative sm:min-h-[300px] min-h-[464px] overflow-hidden">
        <img
          src={vendore}
          alt="vndr"
          className="w-screen md:block hidden object-cover"
          data-aos="fade-down"
          data-aos-delay="300"
        />
        <img
          src={vendore}
          alt="vndr"
          className="w-screen sm:hidden h-screen object-cover"
          data-aos="fade-down"
          data-aos-delay="300"
        />
        <div className="absolute top-5 left-0 px-4 max-w-full sm:left-[50px] md:top-20 md:left-[100px] md:max-w-[750px]">
          <p className="xl:text-[112px] md:text-[60px] text-[31px] text-black font-bold lg:max-w-[750px] sm:max-w-[300px]">
            Grow your Food Business
          </p>
          <p className="text-[18px] max-w-[74%] sm:max-w-[300px] md:max-w-[500px] mb-10 mt-8 text-center sm:text-left text-black font-medium">
            Join over 3,000+ businesses selling daily on Chowdeck. Enjoy a boost
            in menu item sales, growth in business value, and increased brand
            awareness. Download our Vendor app to get started.
          </p>

          <div className="w-fit mx-0">
            <div className=" hidden md:flex flex-row  items-center md:space-x-4 w-fit space-y-4 md:space-y-0">
              {/* buttons */}
              <div>
                <button
                  className="bg-black text-white 
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
                  className="bg-black text-white 
                         font-medium 
                         text-[14px] py-[12px] md:py-[20px] 
                         md:px-[24px]  px-[16px]
                         rounded-md flex items-center gap-1.5"
                >
                  <img src={appstore} alt="as" />
                  Download on App Store
                </button>
              </div>
            </div>
            <div className="sm:hidden flex flex-row items-center w-fit space-x-2">
              <div>
                <button
                  className="bg-black text-white 
                         font-medium 
                         text-[14px] py-[15px]
                          px-[16px]
                         rounded-full flex items-center gap-1.5"
                >
                  <img src={playstore} alt="ps" />
                </button>
              </div>
              <div>
                <button
                  className="bg-black text-white 
                         font-medium 
                         text-[14px] py-[15px]
                          px-[16px]
                         rounded-full flex items-center gap-1.5"
                >
                  <img src={appstore} alt="as" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative lg:-top-53.5 md:-top-38.5 -top-25">
        <BgAnimate />
      </div>
    </div>
  );
};

export default Bg;
