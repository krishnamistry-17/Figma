import React, { useEffect, useRef, useState } from "react";
import playstore from "../../../assets/svg/playstore.svg";
import appstore from "../../../assets/svg/appstore.svg";
import message from "../../../assets/svg/message.svg";
import scooty from "../../../assets/svg/scooty.svg";

const data = [
  {
    heading: "Se o ti jeun?",
  },
  {
    heading: "You don chow?",
  },
  {
    heading: "I riela nri?",
  },
  {
    heading: "Kun ci abinci?",
  },
  {
    heading: "Have you eaten?",
  },
];

const Bg = () => {
  const [currentHeading, setCurrentHeading] = useState(5);
  const headingRef = useRef();
  const intervalRef = useRef(null);

  const chnageHead = () => {
    if (num === currentHeading) return;

    const headEl = headingRef.current;

    imgEl.classList.remove("animate__fadeIn");
    imgEl.classList.add("animate__fadeOut");

    imgEl.addEventListener(
      "animationend",
      () => {
        setCurrentImage(num);
        imgEl.classList.remove("animate__fadeOut");
        imgEl.classList.add("animate__fadeIn");
      },
      { once: true }
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextHead =
        currentHeading === "Have you eaten?"
          ? "Se o ti jeun?"
          : currentHeading + 1;
      chnageHead(nextHead);
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, [currentHeading]);

  const handleButtonClick = (num) => {
    clearInterval(intervalRef.current);
    chnageHead(num);
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-delay="0">
        <h1
          className="text-black md:text-[112px] text-[55px] 
        text-center md:pt-[57px] pt-[40px] font-roboto leading-tight tracking-tighter"
        >
          <span ref={headingRef} className=" animate__animated ">
            Have you eaten?
          </span>
        </h1>
        <div
          className="flex flex-col md:flex-row justify-center
         items-center gap-4 mt-6"
        >
          <div>
            <button
              className="bg-green-950 text-white 
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
              className="bg-green-950 text-white 
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
      <div>
        <div className="md:pt-[353px] pt-[100px] flex justify-end">
          <img src={message} alt="msg" />
        </div>
        <div className="pt-[98px] xl:pl-[136px]">
          <img src={scooty} alt="scoty" />
        </div>
      </div>
    </>
  );
};
export default Bg;
