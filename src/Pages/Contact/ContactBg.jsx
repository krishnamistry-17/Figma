import React from "react";
import rightcloud from "../../assets/svg/rightcloud.svg";
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
          <img src={bottom} alt="btm" className=" absolute bottom-0 w-full" />
        </div>
      </div>
      <div className=" ">
        <ContactPage />
      </div>
    </div>
  );
};

export default ContactBg;
