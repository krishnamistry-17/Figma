import React from "react";
import meal from "../../../assets/images/meal.png";
import ystar from "../../../assets/svg/ystar2.svg";
import pstar from "../../../assets/svg/pstar.svg";
import ohalf from "../../../assets/svg/ohalf.svg";
import phalf from "../../../assets/svg/phalf.svg";
import glocation from "../../../assets/svg/glocation.svg";
import phone1 from "../../../assets/images/phone1.png";
import phone2 from "../../../assets/images/phone2.png";
import phone3 from "../../../assets/images/phone3.png";
import phone4 from "../../../assets/images/phone4.png";
import Categories from "../Categories/Categories";

const GreenCard = () => {
  return (
    <>
      <div className="relative pt-14 sm:pt-[96px]">
        <div
          className="absolute 
        top-5 left-4
        sm:top-7 xl:left-52 md:left-3 
        sm:w-[95%] sm:max-w-[1248px]  md:w-[97%] w-[90%] "
        >
          <Categories />
        </div>
        <div className="bg-[#0C513F] pt-[810px] sm:pt-[720px] pb-24 sm:pb-[100px]">
          <div className=" pt-[64px]">
            {/**xl:px-[96px] md:px-[20px] sm:px-[73px] px-[20px] */}
            <div className="xl:flex justify-between">
              <div className="xl:flex">
                <p className="lg:text-[63px] md:text-[52px] text-[30px] text-white font-extrabold xl:max-w-[441px] xl:pl-0 pl-4.5">
                  Chowdeck has you covered
                </p>
                <img
                  src={meal}
                  alt="mil"
                  className="xl:pt-[43px] xl:ml-[-25px]"
                />
              </div>
              <div className="xl:flex justify-end items-center ">
                <p className="sm:text-[24px] text-[20px] text-white px-[16px] md:max-w-[500px]">
                  Hungry? Too tired to cook? Have friends over, or do you simply
                  need to chop life? Download Chowdeck, and let’s deliver
                  happiness to your doorstep in minutes.
                </p>
              </div>
            </div>

            {/*animate-marquee */}
            {/* <div className=" relative flex gap-3 overflow-x-auto w-full max-w-full ">
              <div className=" animate-marquee py-12  whitespace-nowrap flex">
                <div className="flex gap-3">
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img src={ystar} alt="ys" className="'w-[24px] h-[24px]" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Quick and easy onboarding
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px]  bg-white/25">
                    <img src={ohalf} alt="of" className="'w-[22px] h-[22px]" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Quality meal choicess
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img src={pstar} alt="ps" className="'w-[24px] h-[24px]" />
                    <p className="font-semibold text-[16px] text-white">
                      Live updates on orders
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img
                      src={glocation}
                      alt="gl"
                      className="'w-[24px] h-[24px]"
                    />
                    <p className="font-semibold text-[16px] text-white">
                      Highly rated riders
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[32px]  bg-white/25">
                    <img src={phalf} alt="pf" className="'w-[22px] h-[22px]" />
                    <p className="font-semibold text-[16px] text-white">
                      20/7 support for customers & vendores
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute top-0 animate-marquee2 py-12 px-2 whitespace-nowrap">
                <div className="flex gap-3">
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img src={ystar} alt="ys" className="'w-[24px] h-[24px]" />
                    <p className="font-semibold text-[16px] text-white">
                      Quick and easy onboarding
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img src={ohalf} alt="of" className="'w-[24px] h-[24px]" />
                    <p className="font-semibold text-[16px] text-white">
                      Quality meal choicess
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img src={pstar} alt="ps" className="'w-[24px] h-[24px]" />
                    <p className="font-semibold text-[16px] text-white">
                      Live updates on orders
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img
                      src={glocation}
                      alt="gl"
                      className="'w-[24px] h-[24px]"
                    />
                    <p className="font-semibold text-[16px] text-white">
                      Highly rated riders
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-md py-[22px] px-[28px] bg-white/25">
                    <img src={phalf} alt="pf" className="'w-[22px] h-[22px]" />
                    <p className="font-semibold text-[16px] text-white">
                      20/7 support for customers & vendores
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="relative flex items-start gap-3 overflow-x-hidden w-full max-w-full flex-wrap">
              <div className="animate-marquee py-12 whitespace-nowrap flex">
                <div className="flex gap-3">
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={ystar} alt="ys" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Quick and easy onboarding
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 sm:px-7 px-8 bg-white/25">
                    <img src={ohalf} alt="of" className="'w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Quality meal choicess
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={pstar} alt="ps" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Live updates on orders
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={glocation} alt="gl" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Highly rated riders
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={phalf} alt="pf" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      20/7 support for customers & vendores
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 animate-marquee2 py-12 px-2 whitespace-nowrap flex truncate">
                <div className="flex gap-3">
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={ystar} alt="ys" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Quick and easy onboarding
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={ohalf} alt="of" className="'w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Quality meal choicess
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={pstar} alt="ps" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Live updates on orders
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={glocation} alt="gl" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      Highly rated riders
                    </p>
                  </div>
                  <div className="flex truncate gap-2 rounded-md py-6 px-7 bg-white/25">
                    <img src={phalf} alt="pf" className="w-6 h-6" />
                    <p className="font-semibold text-[14px] sm:text-[16px] text-white break-words max-w-[150px] sm:max-w-full">
                      20/7 support for customers & vendores
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*animate-marquee */}
            <div className=" relative flex overflow-x-hidden">
              {/*marquee-1 */}
              <div className=" animate-marquee py-12 whitespace-nowrap">
                <div className=" flex gap-2">
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute ">
                        <img src={phone1} alt="p1" className=" " />
                      </span>
                    </span>
                  </div>
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute">
                        <img src={phone2} alt="p2" />
                      </span>
                    </span>
                  </div>
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute">
                        <img src={phone3} alt="p3" />
                      </span>
                    </span>
                  </div>
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute">
                        <img src={phone4} alt="p4" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/*marquee-2 */}
              <div className=" absolute top-0 animate-marquee2 py-12 whitespace-nowrap">
                <div className=" flex">
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute ">
                        <img src={phone1} alt="i1" className=" " />
                      </span>
                    </span>
                  </div>
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute">
                        <img src={phone2} alt="i2" />
                      </span>
                    </span>
                  </div>
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute">
                        <img src={phone3} alt="i3" />
                      </span>
                    </span>
                  </div>
                  <div className="min-w-max mx-2 md:mx-0">
                    <span className="w-[292px] md:w-[416px] h-[559px] md:h-[720px] block relative">
                      <span className=" overflow-hidden block box-border p-0 m-0 border-0 absolute">
                        <img src={phone4} alt="i4" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenCard;
