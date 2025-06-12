import React from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import playstore from "../../assets/svg/playstore.svg";
import appstore from "../../assets/svg/appstore.svg";

const BgAnimate = () => {
  return (
    <div>
      {/*Animate */}
      <div className=" relative">
        <div className="flex overflow-auto will-change-transform pb-5">
          <div className=" animate-marquee-normal min-w-fit"></div>
        </div>
      </div>
      {/*Downlaod */}
      <div>
        <div className="pt-10 pb-10">
          <p className="text-black text-center xl:text-[83px] md:text-[63px] text-[43px] font-bold">
            Get started, download the app.
          </p>
          <div>
            <div
              className="flex flex-col md:flex-row justify-center
                     items-center gap-4 mt-6"
            >
              <div>
                <button
                  className="bg-green-950 text-white 
                        font-medium 
                        text-[18px] py-[12px] md:py-[20px] 
                        md:px-[24px]  px-[16px]
                        rounded-md flex items-center gap-1.5"
                >
                  <img src={playstore} alt="ps" />
                  Download on Google Play
                </button>
              </div>
              <div>
                <button
                  className="bg-green-950 text-white 
                        font-medium 
                        text-[18px] py-[12px] md:py-[20px] 
                        md:px-[24px]  px-[16px]
                        rounded-md flex items-center gap-1.5"
                >
                  <img src={appstore} alt="as" />
                  Download on App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgAnimate;
