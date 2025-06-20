import React from "react";
import mailleft from "../../assets/svg/mailleft.svg";
import mailright from "../../assets/svg/mailright.svg";
import icon from "../../assets/svg/icon.svg";
import envelop from "../../assets/svg/envelop.svg";
import locate from "../../assets/svg/locate.svg";

const Member = () => {
  const data = [
    {
      image: icon,
      heading: "Monthly",
      rupee: "₦3,500",
      btn: "Popular",
    },
    {
      image: icon,
      heading: "Quarterly",
      rupee: "₦10,000",
      btn: "Save ₦500",
    },
    {
      image: icon,
      heading: "Bi-Annually",
      rupee: "₦18,000",
      btn: "Save ₦3000",
    },
  ];
  return (
    <>
      <div className="relative bg-[#e8e4fb] -translate-y-[100px] overflow-hidden py-32">
        {/* Background decorations */}
        <img src={mailleft} alt="ml" className="absolute top-0 left-0 z-0" />
        <img
          src={mailright}
          alt="mr"
          className="absolute bottom-0 right-0 z-0"
        />

        {/* Text content must be on top */}
        <div className="container relative z-10 mx-auto px-4 max-w-[1024px] py-16">
          <h3 className="text-[14px] mb-6 font-bold text-black text-center">
            CHOWPASS PLANS
          </h3>
          <h1 className="lg:text-[80px] md:text-[65px] text-[32px] text-center px-4 text-[#271386] font-semibold leading-tight">
            Become a member with a plan curated just for you
          </h1>
        </div>
      </div>

      <div className=" -translate-y-[100px] pb-[100px]">
        <div className=" lg:bg-[#261386] lg:h-screen bg-[#8C77EC]">
          <div className=" relative container xl:pl-[150px]">
            <div className=" lg:bg-[#8c77ec]">
              <div className=" relative grid lg:grid-cols-3 gap-8 px-10 -translate-y-20">
                {data.map((item, index) => (
                  <div key={index}>
                    <span className=" rounded-[20px] flex flex-col items-center bg-white p-6 lg:h-[400px]">
                      <span className=" flex items-center w-full">
                        <span className=" border-t border-[#2613861b] block flex-1"></span>
                        <span className=" flex items-center space-x-2 font-medium text-[#271386] text-[18px] px-5">
                          <img src={item.image} alt="icn" />
                          <span className=" text-[#271386] text-[20px]">
                            {item.heading}
                          </span>
                        </span>
                        <span className=" border-t border-[#2613861b] block flex-1"></span>
                      </span>
                      <span className=" block text-[48px] font-bold text-[#261386] py-5">
                        {item.rupee}
                      </span>
                      <span className=" text-[#8c77ec] bg-[#f3f1fd] block py-1 px-4 ">
                        {item.btn}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <img
                src={envelop}
                alt="envelop"
                className=" hidden lg:block absolute top-[-1px] xl:left-14 overflow-x-hidden w-full max-w-[100%]"
              />
            </div>
            <div className=" hidden lg:block container -translate-y-20">
              <div className=" flex flex-col items-center">
                <h3 className=" max-w-[322px] md:max-w-[500px] text-[60px] text-white font-medium pl-22">
                  Start enjoying benefits now!
                </h3>
                <span className=" flex flex-col lg:flex-row lg:space-x-2 mt-10 mb-8">
                  <img src={locate} alt="lcte" />
                  <span className="pt-4 block max-w-[181px] lg:pt-0 lg:max-w-[unset] font-bold text-white text-[12px]">
                    LIVE EXCLUSIVELY IN LAGOS & ABUJA
                  </span>
                </span>
                <button className=" text-white bg-[#8c77ec] py-3 px-5 rounded-md ">
                  Join now
                </button>
              </div>
            </div>
            <div className="lg:hidden bg-[#261386] relative py-20 ">
              <div className="container">
                <div className=" flex flex-col items-center">
                  <h3 className=" text-white font-medium text-[60px] max-w-[322px] md:max-w-[450px] text-center">
                    Start enjoying benefits now!
                  </h3>
                  <span className=" flex flex-col mt-10 mb-8 items-center">
                    <img src={locate} alt="lcte" className="w-4 h-4" />
                    <span className=" text-white pt-4 font-medium text-[12px]">
                      {" "}
                      LIVE EXCLUSIVELY IN LAGOS & ABUJA
                    </span>
                  </span>
                  <button className=" text-white bg-[#8c77ec] py-3 px-5 rounded-md">
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
