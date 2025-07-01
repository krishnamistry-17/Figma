import React, { useEffect, useState } from "react";
import ystar2 from "../../../assets/svg/ystar2.svg";
import bstar from "../../../assets/svg/bstar.svg";
import { useLocation } from "react-router-dom";

const RideAccord = () => {
  const items = [
    {
      ques: " What tools / items are given to riders from Chowdeck?",
      ans: "Riders are handed Chowdeck delivery bags, Helmets and branded merchandise. ",
    },
    {
      ques: " What is the payment plan for riders?",
      ans: "Riders can accrue bonuses and money earned on deliveries on a weekly basis. They also can withdraw from in-app wallet to their verified bank account anytime.",
    },
    {
      ques: " How do I sign up as a rider on Chowdeck?",
      ans: "Go to Playstore or App Store on your phone, search for Chowdeck Rider and download the app. Create an account in minutes by entering your personal details and indicate if you will like to be a full time or part time rider. Your profile will be reviewed by the operations team before you'll be full onboarded as a rider. ",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faqs") {
      const el = document.getElementById("faqs");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="faqs">
      <div className="lg:px-[96px] px-[17px]  pt-[143px]">
        <div className="border-4 border-black bg-white rounded-xl">
          <div className="lg:px-[36px] px-2 pt-[36px] pb-[28px]">
            <div className="lg:flex hidden lg:gap-8">
              <div className="flex-1">
                <h2 className="font-extrabold text-[63px] text-[#0C513F]">
                  FAQs.
                </h2>
                {items.map((item, index) => (
                  <div key={index} onClick={() => setActiveIndex(index)}>
                    <div className="flex-col pt-[40px] ">
                      <div
                        className={`
                      ${
                        activeIndex === index
                          ? "flex justify-between items-center cursor-pointer bg-black text-white rounded-md"
                          : "flex justify-between items-center bg-white text-[#0C513F] rounded-md"
                      }
                      `}
                      >
                        <p className="font-extrabold text-[18px] pt-[14px] pb-[7px] pl-[21px] ">
                          {item.ques}
                        </p>
                        {activeIndex === index && (
                          <img
                            src={ystar2}
                            alt="ys2"
                            className="py-[23px] pr-[23px] "
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                <h2 className="font-extrabold text-[63px] text-[#0C513F]">
                  Ans.
                </h2>
                <div className="pt-[40px]">
                  <div className="bg-[#FFC501] rounded-md pb-[320px]">
                    <img src={bstar} alt="bs" className="pt-[32px] pl-[32px]" />
                    <p className="text-[24px] text-black pt-[32px] px-[33px] ">
                      {items[activeIndex]?.ans}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:hidden">
              <h2 className="font-extrabold text-[63px] text-[#0C513F]">
                FAQs.
              </h2>
              {items.map((item, index) => (
                <div key={index} onClick={() => handleItemClick(index)}>
                  <div className="flex-col pt-[40px] ">
                    <div
                      className={`
                      ${
                        activeIndex === index
                          ? "flex justify-between items-center cursor-pointer bg-black text-white rounded-md mb-4"
                          : "flex justify-between items-center bg-white text-[#0C513F] rounded-md"
                      }
                      `}
                    >
                      <p className="font-extrabold text-[18px] pt-[14px] pb-[7px] pl-[21px] ">
                        {item.ques}
                      </p>
                      {activeIndex === index && (
                        <img
                          src={ystar2}
                          alt="ys2"
                          className="py-[23px] pr-[23px] "
                        />
                      )}
                    </div>
                    {activeIndex === index && (
                      <div
                        className={`
                          ${
                            activeIndex === index
                              ? "bg-[#FFC501] rounded-md py-4 h-auto"
                              : "Not Open"
                          }
                          `}
                      >
                        <img
                          src={bstar}
                          alt="bs"
                          className="pt-[32px] pl-[32px]"
                        />
                        <p className="text-[24px] text-black pt-[32px] px-[33px] ">
                          {items[activeIndex]?.ans}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RideAccord;
