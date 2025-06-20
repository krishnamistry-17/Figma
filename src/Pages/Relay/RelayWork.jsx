import React from "react";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/svg/step2.svg";
import step3 from "../../assets/svg/step3.svg";
import step4 from "../../assets/svg/step4.svg";
import step5 from "../../assets/svg/step5.svg";
import step6 from "../../assets/svg/step6.svg";
import step7 from "../../assets/svg/step7.svg";
import step8 from "../../assets/images/step8.png";
import bg1 from "../../assets/svg/bg1.svg";
import bg2 from "../../assets/svg/bg2.svg";
import bg3 from "../../assets/svg/bg3.svg";
import bg4 from "../../assets/svg/bg4.svg";
import bg5 from "../../assets/svg/bg5.svg";
import bg6 from "../../assets/svg/bg6.svg";
import bg7 from "../../assets/svg/bg7.svg";
import previous from "../../assets/svg/previous.svg";
import next from "../../assets/svg/next.svg";

const RelayWork = () => {
  return (
    <div className=" py-28">
      <div>
        <h2 className=" text-black text-[64px] font-bold pl-25">
          How Relay works
        </h2>
        <div className=" lg:flex justify-between  gap-4 py-16 lg:h-[500px]">
          <div className="flex-col h-full w-[300px]">
            <div className=" rounded-[20px] h-[300px] w-[100%] flex-col items-start relative">
              <img src={bg1} alt="bg1" />
              <img src={step1} alt="s1" className=" absolute top-0" />
            </div>
            <div className="flex justify-end mt-20 gap-2">
              <div className="bg-[#990038] w-[50px] h-[50px] rounded-full p-5">
                <img src={previous} alt="prs" />
              </div>
              <div className="bg-[#990038] w-[50px] h-[50px] rounded-full p-5">
                <img src={next} alt="prs" />
              </div>
            </div>
          </div>
          <div className="px-4"></div>
          <div className="flex-col h-full w-[300px]">
            <div className=" rounded-[20px] h-[300px] w-[100%] relative">
              <img src={bg5} alt="bg5" />
              <img src={step5} alt="s5" className=" absolute top-0" />
            </div>
            <div className=" flex justify-items-start">
              <button className="bg-[#990038] text-white py-4 px-4 rounded-md mt-20">
                Try it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelayWork;
