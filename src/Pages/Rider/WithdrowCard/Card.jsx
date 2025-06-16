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

const WIthdrowCard = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const imgRef = useRef(null);
  const intervalRef = useRef(null);

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextImage = currentImage === 3 ? 1 : currentImage + 1;
      changeImage(nextImage);
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, [currentImage]);

  const handleButtonClick = (num) => {
    clearInterval(intervalRef.current);
    changeImage(num);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border-4 border-black rounded-3xl p-10 bg-white md:h-[800px] pb-32 md:w-[1044px] md:mx-0 mx-[10px]">
        <div className="relative flex flex-col h-full animate__animated animate__fadeIn">
          <h2
            className="text-black lg:text-[64px] sm:text-[32px] text-[30px] font-bold aos-init aos-animate lg:max-w-[480px]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Unlock new levels of growth.
          </h2>
          <p
            className="text-black text-[18px] pt-5 max-w-[320px]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Own your hours, be your own boss, ride your vehicle, take loans,
            call shots, grow and learn with your team.
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
              className="hidden md:block md:absolute self-center py-0 md:w-3/5 right-0 -bottom-20 lg:w-[600px] animate__animated animate__fadeIn"
            />
          </div>

          <div className="flex space-x-4 items-center md:mt-auto mt-5">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`relative p-2 rounded-full border border-black overflow-hidden ${
                  currentImage === num
                    ? "bg-black text-white"
                    : "bg-gray-300 text-black"
                }`}
                onClick={() => handleButtonClick(num)}
                style={{ width: "40px", height: "40px" }}
              >
                {num.toString().padStart(2, "0")}

                {/* Progress bar */}
                {currentImage === num && (
                  <span
                    className="absolute bottom-0 left-0 h-1 bg-green-500"
                    style={{
                      width: "100%",
                      animation: "progressBar 4s linear forwards",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar keyframes */}
      <style>{`
        @keyframes progressBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default WIthdrowCard;
