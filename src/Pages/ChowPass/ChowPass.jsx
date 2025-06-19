import React from "react";
import chowdot from "../../assets/svg/chowdots.svg";
import chowdotmob from "../../assets/svg/chowdotmob.svg";
import hand from "../../assets/svg/hand.svg";

import Member from "./Member";
import Card from "./Card";
import ChowPassPlace from "./ChowPassPlace";

const ChowPass = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden bg-[#D1C9F7]">
        {/* Desktop background image */}
        <img
          src={chowdot}
          alt="cd"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Mobile background image */}
        <img
          src={chowdotmob}
          alt="mv"
          className="block md:hidden absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Container */}
        <div className="container relative z-10 py-16">
          <div className="flex flex-col text-center items-center">
            <h2
              className="text-[#271386] font-bold px-10 my-7 
        lg:max-w-[886px] lg:text-[80px] md:text-[65px] text-[35px]"
            >
              Unlock Free Deliveries and Reduced Fees!
            </h2>
            <p className="text-[#333333] px-10 my-7">
              For just ₦3500, you can enjoy savings on orders with Chowpass
            </p>
            <button className="bg-[#271386] text-white py-4 px-7 rounded-md">
              Subscribe now
            </button>
          </div>
        </div>

        {/* Bottom hand image */}
        <div className="relative z-10">
          <img
            src={hand}
            alt="hnd"
            className="min-h-[220px] w-full object-cover"
          />
        </div>

        {/* Card overlapping from the bottom */}
        <div className=" relative left-1/2 bottom-16 transform -translate-x-1/2 z-20">
          <Card />
        </div>
      </div>

      <div>
        <Member />
      </div>
      <div>
        <ChowPassPlace />
      </div>
    </div>
  );
};

export default ChowPass;
