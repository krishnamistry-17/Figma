import React, { useEffect, useRef, useState } from "react";
import playstore from "../../../assets/svg/playstore.svg";
import appstore from "../../../assets/svg/appstore.svg";
import message from "../../../assets/svg/message.svg";
import scooty from "../../../assets/svg/scooty.svg";
import cloud from "../../../assets/svg/cloud.svg";

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
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);

  const headingRef = useRef();
  const intervalRef = useRef(null);

  const changeHead = (newHeading) => {
    const headEl = headingRef.current;

    headEl.classList.remove("animate__fadeIn");
    headEl.classList.add("animate__fadeOut");

    headEl.addEventListener(
      "animationend",
      () => {
        setCurrentIndex(data.findIndex((d) => d.heading === newHeading));
        headEl.classList.remove("animate__fadeOut");
        headEl.classList.add("animate__fadeIn");
      },
      { once: true }
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        const nextHeading = data[nextIndex].heading;
        changeHead(nextHeading);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleButtonClick = (num) => {
    clearInterval(intervalRef.current);
    changeHead(num);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="bg-[#ffedb3] size-[300px] z-0 bg-position-[0 200px] min-h-[100vh] w-full relative"
      >
        <img src={cloud} alt="cld" className=" absolute bottom-48 z-10" />
        <img src={cloud} alt="cld" className=" absolute top-72 right-2 z-10" />

        <div className=" absolute top-52 z-10">
          <img src={message} alt="msg" />
        </div>
        <div className=" absolute bottom-16 right-2 z-10">
          <img src={scooty} alt="scoty" />
        </div>

        <div className=" absolute z-20 inset-0">
          <h1
            className="text-black md:text-[112px] text-[55px] font-bold
        text-center md:pt-[57px] pt-[40px] font-roboto leading-tight tracking-tighter"
          >
            <span
              ref={headingRef}
              className=" animate__animated animate__fadeIn"
            >
              {data[currentIndex].heading}
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
      </div>
    </>
  );
};
export default Bg;
