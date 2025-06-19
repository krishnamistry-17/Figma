import React from "react";
import mailleft from "../../assets/svg/mailleft.svg";
import mailright from "../../assets/svg/mailright.svg";
const Member = () => {
  return (
    <div className="relative bg-[#e8e4fb] -translate-y-[100px] overflow-hidden">
      {/* Background decorations */}
      <img src={mailleft} alt="ml" className="absolute top-0 left-0 z-0" />
      <img src={mailright} alt="mr" className="absolute bottom-0 right-0 z-0" />

      {/* Text content must be on top */}
      <div className="container relative z-10 mx-auto px-4 max-w-[1024px] py-16">
        <h3 className="text-[14px] mb-6 font-bold text-black text-center">
          CHOWPASS PLANS
        </h3>
        <h1 className="lg:text-[80px] md:text-[65px] text-[32px] text-center px-4 text-[#271386] font-semibold leading-tight">
          Become a member with a plan curated just for you
        </h1>
      </div>
    </div>
  );
};

export default Member;
