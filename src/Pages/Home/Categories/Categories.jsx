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
  // const images = [
  //   { image: first },
  //   { image: second },
  //   { image: drink },
  //   { image: fourth },
  //   { image: fifth },
  // ];

  // const headings = [
  //   { heading: "Get started in 3" },
  //   { heading: "Download the app" },
  //   { heading: "Explore categories" },
  //   { heading: "Place your orders" },
  //   { heading: "Enjoy your meal" },
  // ];

  const slides = [
    {
      image: first,
      heading: "Get started in 3",
      location: location,
      ystar: ystar,
    },
    {
      image: second,
      heading: "Download the app",
      location: location,
      ystar: ystar,
    },
    {
      image: drink,
      heading: "Explore categories",
      location: location,
      ystar: ystar,
    },
    {
      image: fourth,
      heading: "Place your orders",
      location: location,
      ystar: ystar,
    },
    {
      image: fifth,
      heading: "Enjoy your meal",
      location: location,
      ystar: ystar,
    },
  ];

  const [currentImage, setCurrentImage] = useState(1);
  // const [currentIndex, setCurrentIndex] = useState(heading.length - 1);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // useEffect(() => {
  //   imageIntervalRef.current = setInterval(() => {
  //     setCurrentIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % images.length;
  //       const nextImage = images[nextIndex].image;
  //       changeHead(nextImage);

  //       return nextIndex;
  //     });
  //   }, 4000);

  //   return () => clearInterval(imageIntervalRef.current);
  // }, [currentImage]);

  // useEffect(() => {
  //   headingIntervalRef.current = setInterval(() => {
  //     setCurrentIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % headings.length;
  //       const nextHeading = headings[nextIndex].heading;
  //       changeHead(nextHeading);

  //       return nextIndex;
  //     });
  //   }, 6000);

  //   return () => clearInterval(headingIntervalRef.current);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index) => {
    clearInterval(imageIntervalRef.current);
    clearInterval(headingIntervalRef.current);
    setCurrentSlide(index);
  };

  const handleNext = () => {
    clearInterval(imageIntervalRef.current);
    setCurrentSlide((prev) => prev.map((index) => (index + 1) % slides.length));
  };

  const handlePrevious = () => {
    clearInterval(imageIntervalRef.current);
    setCurrentSlide((prev) =>
      prev.map((index) => (index - 1 + slides.length) % slides.length)
    );
  };

  // const handleButtonClick = (num) => {
  //   clearInterval(imageIntervalRef.current);
  //   clearInterval(headingIntervalRef.current);
  //   changeImage(num);
  // };

  return (
    <div>
      <div>
        <div className="bg-[#FFC501] rounded-lg ">
          <h2
            className="font-extrabold lg:text-[71px] text-[45px] text-black text-center pt-[51px]"
            ref={headingRef}
          >
            {slides[currentSlide].heading}
          </h2>

          <div className=" flex justify-center items-center">
            <img
              ref={imageRef}
              src={slides[currentSlide].image}
              alt={`slide${currentSlide}`}
              className=" pt-[37px] 
              md:w-[249px] md:h-[560px]
              sm:w-[240px] sm:h-[440px]
              w-[224px] h-[382px]
              "
            />
          </div>
          <div className="sm:flex justify-between items-center">
            <div className="flex gap-2 pl-3 pb-3">
              <img
                src={slides[currentSlide].location}
                alt="lcn"
                className="sm:p-[16.5px] p-[14px] bg-black rounded-full"
              />
              {[0, 1, 2].map((num) => (
                <button
                  key={num}
                  onClick={() => handleButtonClick(num)}
                  className={`relative p-4 rounded-full ${
                    currentSlide === num
                      ? "bg-yellow-400 text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {String(num + 1).padStart(2, "0")}

                  {currentSlide === num && (
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
                src={slides[currentSlide].ystar}
                alt="star"
                className="sm:p-[5.5px] p-[5px] bg-black rounded-full"
              />
            </div>

            <div className="flex justify-end items-center gap-2 pr-[32px] sm:pt-0 pt-4 pb-3">
              <div className="bg-black rounded-full">
                <button onClick={handlePrevious}>
                  <img src={back} alt="bk" className="sm:p-[20px] p-[16px]" />
                </button>
              </div>
              <div className="bg-black rounded-full">
                <button onClick={handleNext}>
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

export default Categories;
