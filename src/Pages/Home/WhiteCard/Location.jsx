import React from "react";
import span from "../../../assets/svg/span.svg";
import mapcart from "../../../assets/svg/mapcart.svg";
import CardMap from "../WhiteCard/Map";
// import map from "../../../assets/images/map.png";

const Location = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-[100px]">
        <div className="md:flex border-4 border-black rounded-xl">
          <div className="lg:flex-1">
            <CardMap />
            {/* <img src={map} alt="mp" /> */}
          </div>
          <div className="lg:flex-none">
            <div className="flex py-[20px] pr-[90px] pl-[20px] gap-1.5  bg-[#99C8FF]">
              <img src={span} alt="sn" className="" />
              <p className="font-semibold text-[28px]  text-black">
                Restaurants
              </p>
            </div>
            <div className="flex-col px-[20px] pt-[12px] gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-black py-[25px] pl-[17px] xl:pr-[249px]">
                  Sweet Sensation
                </p>
                <img src={mapcart} alt="cart" className="" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-black py-[25px] pl-[17px]">
                  Sweet Sensation
                </p>
                <img src={mapcart} alt="cart" className="" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-black py-[25px] pl-[17px]">
                  Sweet Sensation
                </p>
                <img src={mapcart} alt="cart" className="" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-black py-[25px] pl-[17px]">
                  Sweet Sensation
                </p>
                <img src={mapcart} alt="cart" className="" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-black py-[25px] pl-[17px]">
                  Sweet Sensation
                </p>
                <img src={mapcart} alt="cart" className="" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-black py-[25px] pl-[17px]">
                  Sweet Sensation
                </p>
                <img src={mapcart} alt="cart" className="" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-black py-[25px] pl-[17px]">
                  Sweet Sensation
                </p>
                <img src={mapcart} alt="cart" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
