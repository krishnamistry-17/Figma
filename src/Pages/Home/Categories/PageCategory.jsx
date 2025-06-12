import React from "react";
import forward from "../../../assets/svg/forward.svg";
import back from "../../../assets/svg/back.svg";
import location from "../../../assets/svg/location.svg";
import ystar from "../../../assets/svg/ystar.svg";

const PageCategory = ({
  PostPerPage,
  setCurrentPage,
  currentPage,
  totalPosts,
}) => {
  const totalPage = Math.ceil(totalPosts / PostPerPage);
  //take page number
  let pageNumber = [];
  //push page 1
  pageNumber.push(1);
  //push page 2
  pageNumber.push(2);
  //push page 3
  pageNumber.push(3);

  const Paginate = (pageNumber, e) => {
    e.preventDefault();
    console.log("pageNumber :", pageNumber);
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < totalPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
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
        {pageNumber.map((number, index) => (
          <button
            key={number}
            className={`bg-black px-[17px] py-[11px] sm:py-[15px] sm:px-[19px] gap-2 ${
              currentPage === number
                ? " border-4 border-black rounded-full text-[16px] bg-yellow-400 text-black font-medium"
                : "bg-black rounded-full text-[16px] font-medium text-[#FFC501]"
            }`}
            onClick={(e) => Paginate(number, e)}
          >
            {number}
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
          <button onClick={handlePrevious}>
            <img src={back} alt="bk" className="sm:p-[20px] p-[16px]" />
          </button>
        </div>
        <div className="bg-black rounded-full">
          <button onClick={handleNext}>
            <img src={forward} alt="bk" className="sm:p-[20px] p-[16px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageCategory;
