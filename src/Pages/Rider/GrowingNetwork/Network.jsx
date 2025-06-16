import React, { useEffect } from "react";
import arrow from "../../../assets/svg/downarrow.svg";
import pstar from "../../../assets/svg/pstar.svg";
import star from "../../../assets/svg/star.svg";
import half from "../../../assets/svg/half.svg";
import rightarrow from "../../../assets/svg/rightarrow.svg";
import image6 from "../../../assets/images/image6.png";
import lemon from "../../../assets/images/lemon.png";
import cartoon from "../../../assets/images/cartoon.png";
import blocation from "../../../assets/svg/blocation.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Network = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" pt-[650px]">
      <div className=" flex justify-center items-center gap-0.5 pt-3.5">
        <p className="md:text-[64px] sm:text-[40px] text-[30px] text-gray-300 text-center">
          Join our growing network
        </p>
        <img src={arrow} alt="arow" />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center 
            lg:px-auto px-[10px] gap-2 pt-[40px] pb-[58px]"
      >
        {/*grid1 */}
        <div data-aos="fade-up" data-aos-delay="0">
          <div className="border-4 rounded-2xl border-black max-w-[402.66px] max-h-auto">
            <img src={blocation} alt="st" className="pt-[28px] pl-[24px]" />
            <h2 className="font-extrabold text-[27px] text-black pt-[19px] pl-[24px]">
              Order in 3 steps
            </h2>
            <p className="text-[16px] text-black pt-[20px] pl-[24px]">
              Hungry ? Too tired to cook ? Having friends over or you just wan
              chop life ? Get started and allow us deliver happiness to your
              door step.
            </p>
            <button className="font-extrabold text-[14px]  text-black pt-[35px] pl-[24px] pb-[44px] flex">
              SEE MORE
              <img src={rightarrow} alt="ra" className="pl-[2px]" />
            </button>
            <div>
              <img src={image6} alt="lm" />
            </div>
          </div>
        </div>
        {/*grid2 */}
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="border-4 rounded-2xl border-black max-w-[402.66px] max-h-auto">
            <img src={star} alt="st" className="pt-[28px] pl-[24px]" />
            <h2 className="font-extrabold text-[27px] text-black pt-[19px] pl-[24px]">
              Start selling
            </h2>
            <p className="text-[16px] text-black pt-[20px] pl-[24px]">
              Are you a restaurant owner looking to grow your business? Reach
              new customers when you join our network.
            </p>

            <button className="font-extrabold text-[14px]  text-black pt-[35px] pl-[24px] pb-[44px] flex">
              SEE MORE
              <img src={rightarrow} alt="ra" className="pl-[2px]" />
            </button>
            <div>
              <img src={lemon} alt="lm" />
            </div>
          </div>
        </div>
        {/*grid3 */}
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="border-4 rounded-2xl border-black max-w-[402.66px] max-h-auto">
            <img src={pstar} alt="st" className="pt-[28px] pl-[24px]" />
            <h2 className="font-extrabold text-[27px] text-black pt-[19px] pl-[24px]">
              Behind the scenes
            </h2>
            <p className="text-[16px] text-black pt-[20px] pl-[24px]">
              If you are passionate about helping us achieve our goal to deliver
              meals seamlessly, come join the team.
            </p>

            <button className="font-extrabold text-[14px]  text-black pt-[35px] pl-[24px] pb-[44px] flex">
              SEE MORE
              <img src={rightarrow} alt="ra" className="pl-[2px]" />
            </button>
            <div>
              <img src={cartoon} alt="lm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
