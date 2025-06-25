import React, { useEffect, useRef, useState } from "react";
import drink from "../../../assets/images/drinks.png";
import ystar from "../../../assets/svg/ystar.svg";
import forward from "../../../assets/svg/forward.svg";
import back from "../../../assets/svg/back.svg";
import location from "../../../assets/svg/location.svg";
import first from "../../../assets/svg/first.svg";
import second from "../../../assets/svg/second.svg";
import fourth from "../../../assets/svg/fourth.svg";
import fifth from "../../../assets/svg/fifth.svg";

const Categories = () => {
  const images = [
    { image: first },
    { image: second },
    { image: drink },
    { image: fourth },
    { image: fifth },
  ];

  const headings = [
    { heading: "Get started in 3" },
    { heading: "Download the app" },
    { heading: "Explore categories" },
    { heading: "Place your orders" },
    { heading: "Enjoy your meal" },
  ];

  const [currentImage, setCurrentImage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(headings.length - 1);

  const imageRef = useRef(null);
  const headingRef = useRef(null);

  const imageIntervalRef = useRef(null);
  const headingIntervalRef = useRef(null);

  const changeImage = (num) => {
    if (num === currentImage) return;

    const imgEl = imageRef.current;

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
        setCurrentIndex(headings.findIndex((d) => d.heading === newHeading));
        headEl.classList.remove("animate__fadeOut");
        headEl.classList.add("animate__fadeIn");
      },
      { once: true }
    );
  };

  // useEffect(() => {
  //   imageIntervalRef.current = setInterval(() => {
  //     const nextImage = currentImage === 3 ? 1 : currentImage + 1;

  //     changeImage(nextImage);
  //   }, 4000);

  //   return () => clearInterval(imageIntervalRef.current);
  // }, [currentImage]);

  useEffect(() => {
    imageIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        const nextImage = images[nextIndex].image;
        changeHead(nextImage);

        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(imageIntervalRef.current);
  }, [currentImage]);

  useEffect(() => {
    headingIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % headings.length;
        const nextHeading = headings[nextIndex].heading;
        changeHead(nextHeading);

        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(headingIntervalRef.current);
  }, []);

  const handleButtonClick = (num) => {
    clearInterval(imageIntervalRef.current);
    clearInterval(headingIntervalRef.current);
    changeImage(num);
  };

  return (
    <div>
      <div>
        <div className="bg-[#FFC501] rounded-lg ">
          <h2
            className="font-extrabold lg:text-[71px] text-[45px] text-black text-center pt-[51px]"
            ref={headingRef}
          >
            {headings[currentIndex]?.heading}
          </h2>

          <div className="flex justify-center items-center">
            <img
              ref={imageRef}
              src={images[currentImage].image}
              alt={`categories${currentImage}`}
              className=" pt-[37px] 
              md:w-[249px] md:h-[560px]
              sm:w-[240px] sm:h-[440px]
              w-[224px] h-[382px]
              "
            />
          </div>

          <div
            className="sm:flex justify-between items-center
              sm:pt-0 pt-10 pb-[32px]
              sm:pl-[32px] pl-[5px]
              "
          >
            <div className="flex items-center md:gap-2 sm:gap-0 gap-2">
              <img
                src={location}
                alt="lcn"
                className="sm:p-[16.5px] p-[14px] bg-black rounded-full"
              />
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
                        className="text-black"
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
              <img
                src={ystar}
                alt="star"
                className="sm:p-[5.5px] p-[5px] bg-black rounded-full"
              />
            </div>
            <div className="flex justify-end items-center gap-2 pr-[32px] ">
              <div className="bg-black rounded-full">
                <button>
                  <img src={back} alt="bk" className="sm:p-[20px] p-[16px]" />
                </button>
              </div>
              <div className="bg-black rounded-full">
                <button>
                  <img
                    src={forward}
                    alt="bk"
                    className="sm:p-[20px] p-[16px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{/*add location and ystar in map bcz it had image like first and fifth
  progress bar is not move on next properly
  */}
export default Categories;
