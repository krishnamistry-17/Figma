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
      <img
        src={mail2}
        alt="mail2"
        className="absolute bottom-32 left-0 z-10 md:block hidden"
      />
      <img
        src={mail1}
        alt="mail1"
        className="absolute top-82 right-0 z-10 md:block hidden"
      />
      <img
        src={mail}
        alt="mail"
        className="absolute top-28 left-1/2 transform -translate-x-1/2 z-10 md:block hidden"
      />
      <img
        src={mail2}
        alt="mail2"
        className="absolute bottom-6 left-0 z-10 sm:hidden w-[260px] h-[160px]"
      />
      <img
        src={mail1}
        alt="mail1"
        className="absolute top-96 right-0 z-10 sm:hidden w-[282px] h-[134px]"
      />
      <img
        src={mail}
        alt="mail"
        className="absolute bottom-34 left-1/2 transform -translate-x-1/2 z-10 w-[272px] h-[245px] sm:hidden"
      />

      {/* Text Content Layer */}
      <div className="absolute z-20 top-28 md:flex justify-between items-center">
        <h2
          className="text-white text-[40px] md:text-[54px] lg:text-[70px] text-center lg:text-left 
          leading-[50px] lg:leading-[80px] xl:w-[50%] font-bold lg:pl-36"
        >
          Sell More with Chowpass
        </h2>
        <p className="text-center xl:text-left text-white text-[18px] xl:w-[25%] xl:pt-0 lg:pt-4 md:pt-3 pt-2 lg:pr-10 sm:px-0 px-4 font-bold">
          Enjoy increased sales, reduced service fees to your customers, and a
          premium vendor listing. Chowpass customers order more frequently and
          place larger orders compared to non-subscribers.
        </p>
      </div>
      <button
        className="mt-6 bg-white text-black absolute top-[504px] md:left-1/2 md:transform md:-translate-x-1/2 z-10
      rounded-md shadow-md hover:bg-gray-200 transition md:block hidden
         md:py-3 md:px-6 px-3 py-4  "
      >
        Learn more about ChowPass
      </button>
      <div className=" flex justify-center items-center">
        <button className="sm:hidden  bottom-24 absolute bg-white text-black z-10 px-5 py-3 rounded-md shadow-md hover:bg-gray-200">
          Learn more about ChowPass
        </button>
      </div>
    </div>
  );
};

export default ChowPass;
