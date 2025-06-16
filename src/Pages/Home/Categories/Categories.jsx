import React, { useEffect, useRef, useState } from "react";
import drink from "../../../assets/images/drinks.png";
import mobile from "../../../assets/images/mobile.png";
import pastry from "../../../assets/svg/pastry.svg";
import PageCategory from "./PageCategory";
import ystar from "../../../assets/svg/ystar.svg";
import forward from "../../../assets/svg/forward.svg";
import back from "../../../assets/svg/back.svg";
import location from "../../../assets/svg/location.svg";
const Categories = () => {
  const images = {
    1: mobile,
    2: drink,
    3: pastry,
  };
  // const [postsPerPage] = useState(1);

  // const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(2);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const totalPages = Math.ceil(posts.length / postsPerPage);

  // const handlePageChange = (pageNumber) => {
  //   if (pageNumber <= 1 && pageNumber <= totalPages) {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  const [currentImage, setCurrentImage] = useState(2);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextImage = currentImage === 3 ? 1 : currentImage + 1;

      changeImage(nextImage);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [currentImage]);

  const handleButtonClick = (num) => {
    clearInterval(intervalRef.current);
    changeImage(num);
  };

  return (
    <div>
      <div>
        <div className="bg-[#FFC501] rounded-lg ">
          <h2 className="font-extrabold lg:text-[71px] text-[45px] text-black text-center pt-[51px]">
            Explore categories
          </h2>

          <div className="flex justify-center items-center">
            <img
              ref={imageRef}
              src={images[currentImage]}
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
              {[1, 2, 3].map((number, index) => (
                <button
                  key={index}
                  className={`bg-black px-[17px] py-[11px] sm:py-[15px] sm:px-[19px] gap-2 relative rounded-full ${
                    currentImage === number
                      ? " border-black text-[16px] bg-yellow-400 text-black font-medium"
                      : "text-[16px] font-medium text-[#FFC501]"
                  }`}
                  onClick={() => handleButtonClick(number)}
                >
                  {number.toString().padStart(2, "0")}

                  {currentImage === number && (
                    <svg
                      className="absolute top-0 left-0 w-full h-full"
                      viewBox="0 0 36 36"
                    >
                      <circle
                        className="text-gray-300"
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

          {/* <div className="sm:flex justify-between items-center sm:pt-0 pt-10 pb-[32px]">
            <div className="flex items-center gap-2 sm:pl-[32px] pl-[5px]">
              <div className="bg-black rounded-full">
                <img
                  src={location}
                  alt="lcn"
                  className="sm:p-[16.5px] p-[15px]"
                />
                disabled={currentPage === 1}
                disabled={currentPage === totalPage}
              </div> */}
          {/* <div>
            <PageCategory
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              handlePageChange={handlePageChange}
            />
          </div> */}
          {/* <div className="bg-black rounded-full text-[16px] font-medium text-[#FFC501]">
                <button className="sm:p-[18px] p-[15px]">01</button>
              </div>
              <div className="border-black border-4 rounded-full text-[16px] text-black font-medium">
                <button className="sm:p-[18px] p-[15px]">02</button>
              </div>
              <div className="bg-black rounded-full text-[16px] font-medium text-[#FFC501]">
                <button className="sm:p-[18px] p-[15px]">03</button>
              </div> */}
          {/* <div className="bg-black rounded-full">
                <img src={ystar} alt="star" className="sm:p-[10.5px] p-[8px]" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
