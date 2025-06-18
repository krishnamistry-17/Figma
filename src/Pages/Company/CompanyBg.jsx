import React from "react";
import cloud from "../../assets/svg/cloud.svg";
const CompanyBg = () => {
  return (
    <div>
      <div className=" bg-[#ffedb3] size-[300px] z-0 bg-position-[0 200px] w-full min-h-[100vh] relative">
        <img src={cloud} alt="cld" className=" absolute z-10 top-56" />
        <div>
          <h2
            data-aos="fade-down"
            data-aos-delay="200"
            className="  text-black font-bold  text-center
                  xl:text-[112px] lg:text-[78px] md:text-[74px] text-[50px] 
                  absolute z-20 md:top-48 top-32 xl:left-64 lg:left-56 md:left-44"
          >
            Delivering Happiness
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CompanyBg;
