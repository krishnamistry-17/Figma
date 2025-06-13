import React from "react";
import playstore from "../../../assets/svg/playstore.svg";
import appstore from "../../../assets/svg/appstore.svg";
import message from "../../../assets/svg/message.svg";
import scooty from "../../../assets/svg/scooty.svg";

const Bg = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-delay="0">
        <h1
          className="text-black md:text-[112px] text-[55px] 
        text-center md:pt-[57px] pt-[40px] font-roboto leading-tight tracking-tighter"
        >
          <span className=" animate__animated hidden">Se o ti jeun?</span>
          <span className=" animate__animated hidden">You don chow?</span>
          <span className=" animate__animated hidden">I riela nri?</span>
          <span className=" animate__animated hidden">Kun ci abinci?</span>
          <span className=" animate__animated ">Have you eaten?</span>
        </h1>
        <div
          className="flex flex-col md:flex-row justify-center
         items-center gap-4 mt-6"
        >
          <div>
            <button
              className="bg-green-950 text-white 
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
              className="bg-green-950 text-white 
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
      <div>
        <div className="md:pt-[353px] pt-[100px] flex justify-end">
          <img src={message} alt="msg" />
        </div>
        <div className="pt-[98px] xl:pl-[136px]">
          <img src={scooty} alt="scoty" />
        </div>
      </div>
    </>
  );
};
export default Bg;
