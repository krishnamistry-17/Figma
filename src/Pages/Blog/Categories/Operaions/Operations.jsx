import React from "react";
import nostory from "../../../../assets/images/nostrory.png";

const Operations = () => {
  return (
    <div>
      <div className=" bg-white">
        <div
          className=" flex flex-col justify-center items-center"
          data-aos="fadeIn"
        >
          <img src={nostory} alt="ns" />
          <p className=" text-[36px] font-medium text-gray-400">
            No stories at the moment, check again later!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Operations;
