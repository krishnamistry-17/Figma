import React from "react";
import vendore from "../../assets/svg/vendorebg.svg";
import playstore from "../..//assets/svg/playstore.svg";
import appstore from "../../assets/svg/appstore.svg";
import BgAnimate from "./BgAnimate";
const Bg = () => {
  return (
    <div>
      <div className=" relative">
        <img src={vendore} alt="vndr" className="w-screen relative " />
        <div className="absolute md:mt-20 xl:pl-[100px] sm:pl-[50px] pl-[20px] top-5">
          <p className="xl:text-[112px] md:text-[60px] text-[31px] text-black  font-bold  lg:max-w-[750px] sm:max-w-[300px]">
            Grow your Food Business
          </p>
          <p className="text-[18px] w-[50%] mb-10 mt-8 lg:mt-0  sm:text-left text-center text-black font-medium">
            Join over 3,000+ businesses selling daily on Chowdeck. Enjoy a boost
            in menu item sales, growth in business value, and increased brand
            awareness. Download our Vendor app to get started.
          </p>
          <div className="w-fit mx-0">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-fit space-y-4 md:space-y-0">
              <div>
                <button
                  className="bg-black text-white 
                         font-medium 
                         text-[14px] py-[12px] md:py-[20px] 
                         md:px-[24px]  px-[16px]
                         rounded-md flex items-center gap-1.5"
                >
                  <img src={playstore} alt="ps" />
                  Download on Google Play
                </button>
              </div>
              <div>
                <button
                  className="bg-black text-white 
                         font-medium 
                         text-[14px] py-[12px] md:py-[20px] 
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
      <div>
        <BgAnimate />
      </div>
    </div>
  );
};

export default Bg;
// git remote add origin https://github.com/krishnamistry-17/Figma.git
// git branch -M main
// git push -u origin main


// echo "# Figma" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/krishnamistry-17/Figma.git
// git push -u origin main