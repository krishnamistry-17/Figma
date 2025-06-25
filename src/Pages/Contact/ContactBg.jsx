import React from "react";
import rightcloud from "../../assets/svg/rightcloud.svg";
import leftcloud from "../../assets/svg/leftclound.svg";
import bottom from "../../assets/images/bottom.png";
import ContactPage from "./ContactPage";

const ContactBg = () => {
  return (
    <div>
      <div className="bg-[#0c513f] h-[469px]  overflow-hidden relative">
        <div>
          <img
            src={rightcloud}
            alt="rc"
            className="w-[300px] h-[91px] md:h-[108px] md:w-[420px] top-0 right-6 absolute"
          />
        </div>
        <div>
          <img
            src={leftcloud}
            alt="lc"
            className="w-[137px] h-[150px] md:w-[190px] md:h-[200px] absolute md:top-48 bottom-0 left-0"
          />
        </div>
        <div>
          <h2
            className=" text-white md:text-[64px] text-[40px] max-w-md
          font-bold text-center absolute top-52 md:left-52"
            data-aos="fade-up"
          >
            Get In Contact With Us
          </h2>
        </div>
        <div>
          <img src={bottom} alt="btm" className=" absolute bottom-0 w-full" />
        </div>
      </div>
      <div className="">
        <ContactPage />
      </div>
    </div>
  );
};

export default ContactBg;
