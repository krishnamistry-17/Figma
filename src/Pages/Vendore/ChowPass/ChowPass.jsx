import React from "react";
import mail1 from "../../../assets/svg/mail1.svg";
import mail2 from "../../../assets/svg/mail2.svg";
import wstar from "../../../assets/svg/wstar.svg";
import mail from "../../../assets/svg/mail.svg";

const ChowPass = () => {
  return (
    <div className="bg-[#8c77ec] relative w-full min-h-[800px] z-0">
      {/* Background Star Image */}
      <img
        src={wstar}
        alt="star"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Decorative Mail Images */}
      <img src={mail2} alt="mail2" className="absolute bottom-32 left-0 z-10" />
      <img src={mail1} alt="mail1" className="absolute top-82 right-0 z-10" />
      <img
        src={mail}
        alt="mail"
        className="absolute top-28 left-1/2 transform -translate-x-1/2 z-10"
      />

      {/* Text Content Layer */}
      <div className="absolute z-20 top-28 md:flex justify-between items-center">
        <h2
          className="text-white text-[40px] md:text-[54px] lg:text-[70px] text-center lg:text-left 
          leading-[50px] lg:leading-[80px] xl:w-[50%] font-bold lg:pl-36"
        >
          Sell More with Chowpass
        </h2>
        <p className="text-center xl:text-left text-white text-[18px] xl:w-[25%] xl:pt-0 lg:pt-4 md:pt-3 pt-2 lg:pr-10 font-bold">
          Enjoy increased sales, reduced service fees to your customers, and a
          premium vendor listing. Chowpass customers order more frequently and
          place larger orders compared to non-subscribers.
        </p>
      </div>
      <button
        className="mt-6 bg-white text-black md:py-3 md:px-6 px-0 py-4  absolute top-[504px] left-1/2 transform -translate-x-1/2 z-10
      rounded-md shadow-md hover:bg-gray-200 transition"
      >
        Learn more about ChowPass
      </button>
    </div>
  );
};

export default ChowPass;
