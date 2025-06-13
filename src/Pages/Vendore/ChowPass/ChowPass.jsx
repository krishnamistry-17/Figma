import React from "react";
import mail1 from "../../../assets/svg/mail1.svg";
import mail2 from "../../../assets/svg/mail2.svg";
import wstar from "../../../assets/svg/wstar.svg";
import mail from "../../../assets/svg/mail.svg";
const ChowPass = () => {
  return (
    <div className=" bg-[#8c77ec]">
      <div>
        <div className=" xl:flex justify-between  md:pt-40 pt-10">
          <p
            className=" text-white text-[40px] md:text-[54px] lg:text-[70px] text-center lg:text-left 
          leading-[50px] lg:leading-[80px] xl:w-[50%] font-bold lg:pl-36"
          >
            Sell More with Chowpass
          </p>
          <p className="text-center xl:text-left text-white text-[18px] xl:w-[25%] xl:pt-0 lg:pt-4 md:pt-3 pt-2 lg:pr-10 font-bold">
            Enjoy increased sales, reduced service fees to your customers, and a
            premium vendor listing. Chowpass customers order more frequently and
            place larger orders compared to non-subscribers.
          </p>
        </div>

        <div>
          <div className="xl:flex">
            <img
              src={mail2}
              alt="m2"
              className="
            md:w-[311px] md:h-[160px]
            w-[273px] h-[114px]
            "
            />
            <img
              src={wstar}
              alt="str"
              className=" bg-contain bg-no-repeat mx-auto bg-position-[50%]"
            />
            <img
              src={mail1}
              alt="m1"
              className="
            md:w-[282px] md:h-[167px]
            w-[226px] h-[161px]
            "
            />
          </div>
        </div>

        <div className=" flex flex-col items-center mt-10">
          <span className="w-[258px]  md:w-[472px]  block relative -mt-8">
            <span className=" overflow-hidden box-border block absolute xl:-top-[500px] lg:-top-[700px] md:-top-[600px] sm:-top-[400px] -top-[350px]">
              <img src={mail} alt="mail" className="" />
              <div className=" flex justify-center items-center mt-[-32px]">
                <button className="bg-white text-black py-[15px] px-[15px] rounded-md">
                  Learn more about ChowPass
                </button>
              </div>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChowPass;
