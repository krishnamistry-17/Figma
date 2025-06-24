import React from "react";
import hero from "../../assets/svg/hero.svg";
import playstore from "../../assets/svg/playstore.svg";
import appstore from "../../assets/svg/appstore.svg";
import thunder from "../../assets/svg/thunder.svg";
import box from "../../assets/svg/box.svg";

const RelayBg = () => {
  return (
    <div>
      <div className="bg-[#ffb3ce] flex flex-col min-h-[90vh] mb-70 relative z-0">
        <img src={hero} alt="hro" className=" relative z-0" />
        <div className=" text-center container absolute top-36 lg:left-16">
          <h2
            className="text-black xl:text-[112px] md:text-[75px] text-[55px] font-bold tracking-tighter "
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Delivery On-The-Go
          </h2>
          <p
            className=" text-black text-[20px] mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Send and receive packages easily with Relay!
          </p>
          <div
            className="flex flex-col md:flex-row justify-center
         items-center gap-4 mt-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <button
                className="bg-[#990038] text-white 
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
                className="bg-[#990038] text-white 
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
        </div>
        <div className=" flex flex-col items-center text-center  mb-[-10%] lg:mt-[-20%] md:mt-[-8%] mt-[99%] w-[100%]">
          <img src={box} alt="box" className="w-[70%] lg:w-1/2 relative" />
          <img
            src={thunder}
            alt="thnder"
            className="w-full -mt-20 md:-mt-[150px] lg:-mt-[25%]"
          />
        </div>
      </div>
    </div>
  );
};

export default RelayBg;
