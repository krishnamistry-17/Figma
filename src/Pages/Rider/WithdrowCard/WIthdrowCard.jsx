import React from "react";
import playstore from "../../../assets/svg/playstore.svg";
import appstore from "../../../assets/svg/appstore.svg";
import grow1 from "../../../assets/images/grow1.png";
import grow2 from "../../../assets/images/grow2.png";
import grow3 from "../../../assets/images/grow3.png";
import "animate.css";

const WIthdrowCard = () => {
  
  const data = [
    {
      image: grow1,
    },
    {
      image: grow2,
    },
    { image: grow3 },
  ];

  return (
    <div className=" flex justify-center items-center">
      <div className=" border-4 border-black rounded-3xl p-10 bg-white md:h-[800px] pb-32 md:w-[1044px] md:mx-0 mx-[10px]">
        <div className=" relative flex flex-col h-full animate__animated animated__fadeIn">
          <h2
            className=" text-black lg:text-[64px] sm:text-[32px] text-[30px] font-bold aos-init aos-animate lg:max-w-[480px]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Unlock new levels of growth.
          </h2>
          <p
            className=" text-black text-[18px] pt-5 max-w-[320px]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Own your hours, be your own boss, ride your vehicle, take loans,
            call shots, grow and learn with your team.
          </p>

          <div
            className="flex gap-2 pt-[33px] "
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div>
              <img
                src={playstore}
                alt="ps"
                className="bg-[#0c513f] rounded-full p-[15px]"
              />
            </div>
            <div className="">
              <img
                src={appstore}
                alt="as"
                className="bg-[#0c513f] rounded-full p-[15px] "
              />
            </div>
          </div>

          <div>
            <img
              src={grow1}
              alt="g1"
              className=" hidden md:block md:absolute self-center py-0 md:w-3/5 right-0 -bottom-20 lg:w-[600px] animate__animated animated__fadeIn"
            />
          </div>

          <div className=" flex space-x-4 items-center md:mt-auto mt-5">
            <button className="  bg-black text-white p-5 rounded-full border-transparent items-center justify-center text-center">
              01
            </button>
            <button className="  bg-black text-white p-5 rounded-full border-transparent items-center justify-center text-center">
              02
            </button>
            <button className="  bg-black text-white p-5 rounded-full border-transparent items-center justify-center text-center">
              03
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIthdrowCard;
