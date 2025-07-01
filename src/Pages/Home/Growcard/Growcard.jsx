import React, { useEffect, useRef, useState } from "react";
import arrow from "../../../assets/svg/downarrow.svg";
import star from "../../../assets/svg/star.svg";
import pstar from "../../../assets/svg/pstar.svg";
import half from "../../../assets/svg/half.svg";
import rightarrow from "../../../assets/svg/rightarrow.svg";
import lemon from "../../../assets/images/lemon.png";
import box from "../../../assets/images/box.png";
import cartoon from "../../../assets/images/cartoon.png";
import { useNavigate } from "react-router-dom";

const Growcard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openIndexes, setOpenIndexes] = useState({});

  const [seeMore, setSeeMore] = useState(false);

  const ref = useRef();
  const refpara = useRef(null);
  const navigate = useNavigate();
  // const data = [
  //   {
  //     image: star,
  //     heading: "Start selling",
  //     detail:
  //       "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
  //     btn: " SEE MORE",
  //     arrowimage: rightarrow,
  //     mainimage: lemon,
  //     message:
  //       "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
  //   },
  //   {
  //     image: half,
  //     heading: "Deliver happiness",
  //     detail: "J",
  //     btn: " SEE MORE",
  //     arrowimage: rightarrow,
  //     mainimage: box,
  //     message:
  //       "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
  //   },
  //   {
  //     image: pstar,
  //     heading: "Behind the scenes",
  //     detail: " ",
  //     btn: " SEE MORE",
  //     arrowimage: rightarrow,
  //     mainimage: cartoon,
  //     message:
  //       "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it. Reach new customers when you join our network.Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
  //   },
  // ];

  const limit = 100;

  useEffect(() => {
    if (refpara.current) {
      const isOverflowing =
        refpara.current.scrollHeight > refpara.current.clientHeight;
      setSeeMore(isOverflowing);
    }
  }, []);

  const handleVendore = () => {
    navigate("/vendores");
  };

  const handleRider = () => {
    navigate("/riders");
  };

  const handleCompany = () => {
    navigate("/company");
  };
  return (
    <div ref={ref}>
      <div className="flex justify-center items-center gap-0.5 px-0.5">
        <p className="md:text-[64px] sm:text-[40px] text-[33px] text-center pt-[32px] text-[#D1D5DB]">
          Join our growing network
        </p>
        <img src={arrow} alt="dr" className="md:pt-[47px] pt-7" />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center 
      lg:px-auto px-[10px] gap-2 pt-[40px] pb-[58px]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="border-4 rounded-[6px] overflow-hidden border-black max-w-[402.66px] max-h-auto"
        >
          <img src={star} alt="st" className="pt-[28px] pl-[24px]" />
          <h2 className="font-extrabold text-[27px] text-black pt-[19px] pl-[24px]">
            Start selling
          </h2>

          <p className="text-[16px] text-black pt-[20px] pl-[24px]">
            Are you a restaurant owner looking to grow your business? Reach new
            customers when you join our network.
          </p>

          <button
            className="font-extrabold text-[14px]  text-black pt-[35px] pl-[24px] pb-[44px] flex hover:underline"
            onClick={handleVendore}
          >
            SEE MORE
            <img src={rightarrow} alt="ra" className="pl-[2px]" />
          </button>
          <div>
            <img
              src={lemon}
              alt="lm"
              className=" rounded-bl-[9px] rounded-br-[9px]"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="border-4 rounded-[6px] overflow-hidden border-black max-w-[402.66px] max-h-auto"
        >
          <img src={half} alt="st" className="pt-[28px] pl-[24px]" />
          <h2 className="font-extrabold text-[27px] text-black pt-[19px] pl-[24px]">
            Deliver happiness
          </h2>

          <p className="text-[16px] text-black pt-[20px] pl-[24px]">
            oin our elite league of delivery riders delivering happiness to
            customers and earn to achieve your dreams while at it.
          </p>

          <button
            className="font-extrabold text-[14px]  text-black pt-[35px] pl-[24px] pb-[44px] flex hover:underline"
            onClick={handleRider}
          >
            SEE MORE
            <img src={rightarrow} alt="ra" className="pl-[2px]" />
          </button>
          <div>
            <img
              src={box}
              alt="lm"
              className=" rounded-bl-[9px] rounded-br-[9px]"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="border-4 rounded-[6px] overflow-hidden border-black max-w-[402.66px] max-h-auto"
        >
          <img src={pstar} alt="st" className="pt-[28px] pl-[24px]" />
          <h2 className="font-extrabold text-[27px] text-black pt-[19px] pl-[24px]">
            Behind the scenes
          </h2>

          <p className="text-[16px] text-black pt-[20px] pl-[24px]">
            If you are passionate about helping us achieve our goal to deliver
            meals seamlessly, come join the team.
          </p>

          <button
            className="font-extrabold text-[14px]  text-black pt-[35px] pl-[24px] pb-[44px] flex hover:underline"
            onClick={handleCompany}
          >
            SEE MORE
            <img src={rightarrow} alt="ra" className="pl-[2px]" />
          </button>
          <div>
            <img
              src={cartoon}
              alt="lm"
              className=" rounded-bl-[9px] rounded-br-[9px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growcard;
