import React, { useEffect, useRef, useState } from "react";
import arrow from "../../../assets/svg/downarrow.svg";
import star from "../../../assets/svg/star.svg";
import pstar from "../../../assets/svg/pstar.svg";
import half from "../../../assets/svg/half.svg";
import rightarrow from "../../../assets/svg/rightarrow.svg";
import lemon from "../../../assets/images/lemon.png";
import box from "../../../assets/images/box.png";
import cartoon from "../../../assets/images/cartoon.png";

const Growcard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openIndexes, setOpenIndexes] = useState({});

  const [seeMore, setSeeMore] = useState(false);

  const ref = useRef();
  const refpara = useRef(null);

  const data = [
    {
      image: star,
      heading: "Start selling",
      detail:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
      btn: " SEE MORE",
      arrowimage: rightarrow,
      mainimage: lemon,
      message:
        "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
    },
    {
      image: half,
      heading: "Deliver happiness",
      detail:
        "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
      btn: " SEE MORE",
      arrowimage: rightarrow,
      mainimage: box,
      message:
        "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
    },
    {
      image: pstar,
      heading: "Behind the scenes",
      detail:
        " If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
      btn: " SEE MORE",
      arrowimage: rightarrow,
      mainimage: cartoon,
      message:
        "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it. Reach new customers when you join our network.Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
    },
  ];

  const limit = 100;

  useEffect(() => {
    if (refpara.current) {
      const isOverflowing =
        refpara.current.scrollHeight > refpara.current.clientHeight;
      setSeeMore(isOverflowing);
    }
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-center items-center gap-0.5">
        <p
          className="md:text-[64px] sm:text-[40px] text-[33px] text-center pt-[32px]"
          style={{ color: "#D1D5DB" }}
        >
          Join our growing network
        </p>
        <img src={arrow} alt="dr" className="md:pt-[47px]" />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center 
      lg:px-auto px-[10px] gap-2 pt-[40px] pb-[58px]"
      >
        {data.map((item, index) => (
          <div key={index}>
            <div className="border-4 rounded-md border-black max-w-[402.66px] max-h-auto">
              <img src={item.image} alt="st" className="pt-[28px] pl-[24px]" />
              <h2 className="font-extrabold text-[27px] text-black pt-[19px] pl-[24px]">
                {item.heading}
              </h2>

              {openIndexes[index] ? (
                <p className="text-[16px] text-black pt-[20px] pl-[24px]">
                  {item.message}
                </p>
              ) : (
                <p className="text-[16px] text-black pt-[20px] pl-[24px]">
                  {item.detail}
                </p>
              )}

              <button
                onClick={() =>
                  setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }))
                }
                className="font-extrabold text-[14px]  text-black pt-[35px] pl-[24px] pb-[44px] flex"
              >
                {openIndexes[index] ? "SEE LESS" : "SEE MORE"}
                <img src={item.arrowimage} alt="ra" className="pl-[2px]" />
              </button>
              <div>
                <img src={item.mainimage} alt="lm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Growcard;
