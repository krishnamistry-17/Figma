import React from "react";
import slide1 from "../../../assets/images/slide1.png";
import slide2 from "../../../assets/images/slide2.png";
import slide3 from "../../../assets/images/slide3.png";
import slide4 from "../../../assets/images/slide4.png";
import slide5 from "../../../assets/images/slide5.png";
import slide6 from "../../../assets/images/slide6.png";
import slide7 from "../../../assets/images/slide7.png";
import slide8 from "../../../assets/images/slide8.png";

const CoreValues = () => {
  return (
    <div className="py-20">
      <div className="pb-36">
        <div className=" flex md:pl-12">
          <h2 className=" text-black font-bold text-[64px]">Core Values</h2>
          <p className="text-[#8c77ec] font-medium text-[18px] pt-13 pl-2.5">
            What keeps us grounded
          </p>
        </div>
        <div className="pt-20">
          <div className="flex overflow-x-hidden will-change-transform pb-16 ">
            <div className="flex items-center space-x-10 px-5 min-w-fit  animate-marquee">
              <span className="min-w-[320px] rounded-2xl  bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide1}
                      alt="s1"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>

              <span className="min-w-[320px]  rounded-2xl bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide2}
                      alt="s2"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>

              <span className="min-w-[320px]  rounded-2xl bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide3}
                      alt="s3"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>

              <span className="min-w-[320px]  rounded-2xl bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide4}
                      alt="s4"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>

              <span className="min-w-[320px]  rounded-2xl bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide5}
                      alt="s5"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>

              <span className="min-w-[320px]  rounded-2xl bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide6}
                      alt="s6"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>

              <span className="min-w-[320px]  rounded-2xl bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide7}
                      alt="s7"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>

              <span className="min-w-[320px]  rounded-2xl bg-gray-200">
                <span className=" box-border inline-block overflow-hidden relative max-w-[100%]">
                  <span className=" box-border block relative max-w-[100%]">
                    <img
                      src={slide8}
                      alt="s8"
                      className="  box-border block
                    min-w-[100%] max-w-[100%]
                    min-h-[100%] max-h-[100%]
                    "
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
