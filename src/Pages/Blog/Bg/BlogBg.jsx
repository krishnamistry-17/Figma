import React from "react";
import rightcloud from "../../../assets/svg/rightcloud.svg";
import leftcloud from "../../../assets/svg/leftclound.svg";
import bottom from "../../../assets/images/bottom.png";
import BgStories from "./BgStories";
const BlogBg = () => {
  return (
    <div>
      <div className="bg-[#0c513f] h-[912px]  overflow-hidden relative z-10">
        <div>
          <img
            src={leftcloud}
            alt="lc"
            className="w-[137px] h-[150px] md:w-[265px] md:h-[290px] absolute top-48 left-0"
          />
          <img
            src={rightcloud}
            alt="rc"
            className="w-[300px] h-[91px] md:h-[108px] md:w-[420px] top-0 right-6 absolute"
          />
        </div>
        <div
          className=" absolute md:top-[418px] sm:top-52 top-96 sm:left-48 left-4"
          data-aos="fade-down"
        >
          <h2
            className="text-white font-bold xl:text-[112px] md:text-[80px] sm:text-[70px] text-[55px]"
            data-aos="fade-down"
          >
            Blog & Stories
          </h2>
          <p className="text-white font-bold text-[20px] lg:max-w-[500px]">
            The good stuff. Follow our social media for the latest updates,
            features and even sneak peeks 👀
          </p>
        </div>

        <div>
          <img src={bottom} alt="btm" className=" absolute bottom-0 w-full" />
        </div>

        <div className=" absolute xl:right-28 lg:right-3 right-16 top-36 z-0">
          <div className=" hidden lg:block h-[700px] overflow-y-auto scrollbar-hide">
            <BgStories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBg;
