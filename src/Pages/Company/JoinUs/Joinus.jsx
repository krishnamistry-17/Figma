import React from "react";
import join from "../../../assets/svg/join.svg";
import rightarow from "../../../assets/svg/rightarow.svg";

const Joinus = () => {
  return (
    <div className="  md:py-30 pb-20 lg:px-24 px-2">
      <div className=" border-4 border-black rounded-2xl bg-white p-6 lg:p-10">
        <p className=" flex justify-between items-center">
          <span className=" text-black font-bold sm:text-[64px] text-[50px]">
            Join us.
          </span>
          <img src={join} alt="jn" className=" w-[60px] lg:w-[110px]" />
        </p>
        <div className="mt-4">
          <div className="py-5 hover:bg-[#0c513f] rounded-lg flex justify-between items-center">
            <p className=" text-[18px] font-bold pl-3"> Check Out Open Roles</p>
            <div className=" flex ml-auto items-center">
              <span className=" hidden md:inline-block text-black font-bold mr-3 uppercase">
                apply now
              </span>
              <img src={rightarow} alt="rarow" className="mr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
