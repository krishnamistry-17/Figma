import React, { useState, useRef, useEffect } from "react";
import "animate.css";
import playstore from "../../../assets/svg/playstore.svg";
import appstore from "../../../assets/svg/appstore.svg";
import grow1 from "../../../assets/images/grow1.png";
import grow2 from "../../../assets/images/grow2.png";
import grow3 from "../../../assets/images/grow3.png";

const images = {
  1: grow1,
  2: grow2,
  3: grow3,
};

const data = [
  {
    heading: "Track your metrics & bonuses earned",
    para: "Monitor your growth and earn huge bonuses as you go.",
  },
  {
    heading: "Withdraw straight to your account",
    para: "No delays, withdraw from your wallet and into you account with ease.",
  },
  {
    heading: "Unlock new levels of growth.",
    para: "Own your hours, be your own boss, ride your vehicle, take loans,call shots, grow and learn with your team.",
  },
];

const WIthdrowCard = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);

  const imgRef = useRef(null);
  const headingRef = useRef(null);

  const imageIntervalRef = useRef(null);
  const headingIntervalRef = useRef(null);

  const changeImage = (num) => {
    if (num === currentImage) return;

    const imgEl = imgRef.current;

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
    imageIntervalRef.current = setInterval(() => {
      const nextImage = currentImage === 3 ? 1 : currentImage + 1;
      changeImage(nextImage);
    }, 5000);

    return () => clearInterval(imageIntervalRef.current);
  }, [currentImage]);

  useEffect(() => {
    headingIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        const nextHeading = data[nextIndex].heading;
        changeHead(nextHeading);
        console.log("nextIndex  :", nextIndex);
        console.log("nextHeading :", nextHeading);
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(headingIntervalRef.current);
  }, []);

  const handleButtonClick = (index) => {
    clearInterval(imageIntervalRef.current);
    clearInterval(headingIntervalRef.current);
    changeImage(index);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border-4 border-black rounded-3xl p-10 bg-white md:h-[800px] pb-32  lg:w-[1280px] md:w-[1044px] relative z-0 ">
        <div className="relative flex flex-col h-full ">
          <h2
            className="text-black lg:text-[64px] sm:text-[32px] text-[30px] font-bold aos-init aos-animate lg:max-w-[480px]
            animate__animated animate__fadeIn
            "
            ref={headingRef}
            data-aos="fade-up"
            data-aos-delay="0"
          >
            {data[currentIndex].heading}
          </h2>
          <p
            className="text-black text-[18px] pt-5 max-w-[320px] relative z-10
            "
            ref={headingRef}
          >
            {data[currentIndex].para}
          </p>

          <div
            className="flex gap-2 pt-[33px]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div>
              <img
                src={playstore}
                alt="ps"
                className="bg-[#0c513f] rounded-full p-[15px]"
              />
            </div>
            <div>
              <img
                src={appstore}
                alt="as"
                className="bg-[#0c513f] rounded-full p-[15px]"
              />
            </div>
          </div>

          <div>
            <img
              ref={imgRef}
              src={images[currentImage]}
              alt={`grow${currentImage}`}
              className="absolute self-center py-0 
              w-3/4 md:w-4/6  lg:w-[600px] 
              -right-10 md:right-0 
              lg:-bottom-20 md:bottom-8 -bottom-29
              animate__animated animate__fadeIn"
            />
          </div>

          <div className="flex space-x-4 items-center md:mt-auto mt-5">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`relative p-4 rounded-full  overflow-hidden ${
                  currentImage === num
                    ? " border-black  text-black"
                    : "bg-black text-white"
                }`}
                onClick={() => handleButtonClick(num)}
              >
                {num.toString().padStart(2, "0")}

                {/* Progress bar */}
                {currentImage === num && (
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
                      className="text-green-400"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      style={{
                        animation: "progressCircle 4s linear forwards",
                      }}
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIthdrowCard;
