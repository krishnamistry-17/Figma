import React from "react";
import thunder1 from "../../assets/svg/thunder1.svg";
import stack1 from "../../assets/svg/stack1.svg";
import stack2 from "../../assets/svg/stack2.svg";
import stack3 from "../../assets/svg/stack3.svg";

const Need = () => {
  return (
    <div>
      <img
        src={thunder1}
        alt="t1"
        className="w-full lg:-mb-23.5 md:-mb-18.5 -mb-5.5"
      />
      <div className="bg-[#990038]">
        <div>
          <h2 className="md:text-[70px] text-[50px] text-[#ffb3ce] md:pt-56 pt-20 text-center font-bold">
            You need it?
          </h2>
          <p className="md:text-[76px] text-[54px] text-white pt-0 text-center font-bold">
            We’ll bring it!
          </p>
        </div>
        <div className=" flex flex-col"></div>
      </div>
    </div>
  );
};

export default Need;
