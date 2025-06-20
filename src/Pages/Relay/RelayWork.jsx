import React, { useEffect, useRef, useState } from "react";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/svg/step2.svg";
import step3 from "../../assets/svg/step3.svg";
import step4 from "../../assets/svg/step4.svg";
import step5 from "../../assets/svg/step5.svg";
import step6 from "../../assets/svg/step6.svg";
import step7 from "../../assets/svg/step7.svg";
import step8 from "../../assets/images/step8.png";
import bg1 from "../../assets/svg/bg1.svg";
import bg2 from "../../assets/svg/bg2.svg";
import bg3 from "../../assets/svg/bg3.svg";
import bg4 from "../../assets/svg/bg4.svg";
import bg5 from "../../assets/svg/bg5.svg";
import bg6 from "../../assets/svg/bg6.svg";
import bg7 from "../../assets/svg/bg7.svg";
import bg8 from "../../assets/svg/bg8.svg";
import relay from "../../assets/svg/relay.svg";
import previous from "../../assets/svg/previous.svg";
import next from "../../assets/svg/next.svg";

const RelayWork = () => {
  const detail = [
    {
      number: "01",
      heading: "Download the Chowdeck app and tap",
      bg: bg1,
      step: step1,
    },
    {
      number: "02",
      heading: "Make sure you insure your package",
      bg: bg2,
      step: step2,
    },
    {
      number: "03",
      heading: "Prepare your package for pickup",
      bg: bg3,
      step: step3,
    },
    {
      number: "04",
      heading: "Hand your package to your rider",
      bg: bg4,
      step: step4,
    },
    {
      number: "05",
      heading: "Rider picks up your package",
      bg: bg5,
      step: step5,
    },
    {
      number: "06",
      heading: "Rider heads to the drop-off location",
      bg: bg6,
      step: step6,
    },
    {
      number: "07",
      heading: "Rider delivers your package",
      bg: bg7,
      step: step7,
    },
    {
      number: "08",
      heading: "Rate your rider & the delivery experience",
      bg: bg8,
      step: step8,
    },
  ];
  const [images, setImages] = useState([0, 1, 2]);

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  const allImageRef = [imageRef1, imageRef2, imageRef3];
  const headingRef = useRef(null);
  const imageIntervalRef = useRef(null);
  const headingIntervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(detail.length - 1);

  //   useEffect(() => {
  //     imageIntervalRef.current = setInterval(() => {
  //       setImages((prev) => {
  //         return prev.map((index) => (index + 1) % detail.length);
  //       });
  //     }, 3000);
  //     return () => clearInterval(imageIntervalRef.current);
  //   }, []);

  const changeHead = (newHeading) => {
    const headEl = headingRef.current;

    headEl.classList.remove("animate__fadeIn");
    headEl.classList.add("animate__fadeOut");

    headEl.addEventListener(
      "animationend",
      () => {
        setCurrentIndex(detail.findIndex((d) => d.heading === newHeading));
        headEl.classList.remove("animate__fadeOut");
        headEl.classList.add("animate__fadeIn");
      },
      { once: true }
    );
  };

  useEffect(() => {
    headingIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % detail.length;
        const nextHeading = detail[nextIndex]?.heading;
        changeHead(nextHeading);
        console.log("nextIndex  :", nextIndex);
        console.log("nextHeading :", nextHeading);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(headingIntervalRef.current);
  }, []);

  const handleButtonClick = () => {
    clearInterval(imageIntervalRef.current);
    setImages((prev) => prev.map((index) => (index + 1) % detail.length));
  };

  const handleNext = () => {
    clearInterval(imageIntervalRef.current);
    setImages((prev) => prev.map((index) => (index + 1) % detail.length));
  };

  const handlePrev = () => {
    clearInterval(imageIntervalRef.current);
    setImages((prev) =>
      prev.map((index) => (index - 1 + detail.length) % detail.length)
    );
  };
  useEffect(() => {
    imageIntervalRef.current = setInterval(() => {
      setImages((prev) => prev.map((i) => (i + 1) % detail.length));
    }, 3000);

    return () => clearInterval(imageIntervalRef.current);
  }, []);

  return (
    <div className=" py-28">
      <div>
        <h2 className=" text-black md:text-[64px] text-[40px] font-bold md:pl-25 pl-5">
          How Relay works
        </h2>

        <div className="lg:flex justify-between gap-4 py-16 lg:h-[500px]">
          {/* LEFT IMAGE */}
          <div className="flex-col h-full w-[300px]">
            <div className="rounded-[20px] h-[300px] w-full relative">
              <img src={detail[images[0]].bg} alt="bg-left" />
              <img
                src={detail[images[0]].step}
                alt="step-left"
                className="absolute top-0"
              />
            </div>
            <div className="flex justify-end mt-20 gap-2">
              <div
                className="bg-[#990038] w-[50px] h-[50px] rounded-full p-5"
                onClick={handlePrev}
              >
                <img src={previous} alt="previous" />
              </div>
              <div
                className="bg-[#990038] w-[50px] h-[50px] rounded-full p-5"
                onClick={handleNext}
              >
                <img src={next} alt="next" />
              </div>
            </div>
          </div>

          {/* CENTER BLOCK (TEXT + IMAGE) */}
          <div className="px-1">
            <div className="grid lg:grid-cols-2 max-w-[950px] lg:h-[500px] lg:overflow-hidden">
              <div className="flex flex-col h-full bg-[#990038] relative">
                <div className="w-[53px] h-[53px] rounded-full mt-18 ml-7  p-3 text-white relative">
                  <p ref={headingRef}>{detail[images[1]]?.number}</p>

                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      className="text-black"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className="text-white"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      style={{
                        animation: "progressCircle 3s linear forwards",
                      }}
                    />
                  </svg>
                </div>

                <p
                  className="font-medium text-white text-[50px] mt-20 ml-7"
                  ref={headingRef}
                >
                  {detail[images[1]]?.heading}
                </p>
              </div>
              <div className="flex items-center justify-center h-full w-full bg-gray-100 relative">
                <div className="relative w-full h-full">
                  <img
                    src={detail[images[1]]?.bg}
                    alt="bg-center"
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={detail[images[1]]?.step}
                    alt="step-center"
                    className="absolute top-0 left-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-col h-full w-[300px]">
            <div className="rounded-[20px] h-[300px] w-full relative">
              <img src={detail[images[2]]?.bg} alt="bg-right" />
              <img
                src={detail[images[2]]?.step}
                alt="step-right"
                className="absolute top-0"
              />
            </div>
            <div className="flex justify-items-start">
              <button className="bg-[#990038] text-white py-4 px-4 rounded-md mt-20">
                Try it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelayWork;
