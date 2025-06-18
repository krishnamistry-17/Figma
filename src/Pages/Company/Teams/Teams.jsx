import React, { useState } from "react";
import chowstar from "../../../assets/svg/chowstar.svg";
import ystar2 from "../../../assets/svg/teamstar.svg";

const Teams = () => {
  const items = [
    {
      num: "01",
      team: "Growth",
      focus:
        "Our Growth team is the driving force behind expansion. They are dedicated to increasing our user base, and penetrating new markets. With a focus on data-driven strategies, ground-breaking partnerships and innovative marketing, the Growth org ensures we’re continually reaching new heights and discovering fresh opportunities to expand our business.",
    },
    {
      num: "02",
      team: "Business",
      focus:
        "The Business org is the backbone of our operations, ensuring smooth and efficient management of the company’s daily activities. This team handles essential functions such as People, Finance, and Legal, providing the infrastructure and support needed to keep the company running smoothly while planning for long-term growth and stability.",
    },
    {
      num: "03",
      team: "Product & Engineering",
      focus:
        "Our Product & Engineering team is at the heart of creating and refining our product offerings. With a focus on delivering seamless and delightful user experiences, this org is responsible for building and enhancing both internal and external products. Engineers, designers, and product managers work together to drive innovation, ensure system reliability, and keep us a step ahead of user needs.",
    },
    {
      num: "04",
      team: "Operations",
      focus:
        "The Operations team is all about execution. They manage the critical logistics required to ensure that meals, medicine, and groceries are delivered to our customers efficiently and on time. By overseeing day-to-day operations and providing stellar support, they make sure that our services run like clockwork, delivering excellence every time.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className=" bg-[#0c513f] relative">
      <div className=" absolute -top-19 right-5">
        <img src={chowstar} alt="str" />
      </div>
      <div className="lg:px-[36px] pt-[36px] pb-[28px]">
        <div className=" hidden md:flex lg:gap-8">
          <div className="flex-1">
            <h2 className="font-extrabold text-[63px] text-white">Teams.</h2>
            {items.map((item, index) => (
              <ul key={index} onClick={() => setActiveIndex(index)}>
                <div className="flex flex-col pt-[40px]">
                  <div
                    className={`flex
                            ${
                              activeIndex === index
                                ? "text-[#FFC501]  font-bold"
                                : "text-white font-bold "
                            }
                            `}
                  >
                    <li className="md:text-[25px] text-[18px] md:pt-8 pt-4 font-bold ">
                      {item.num}
                    </li>
                    <li className="md:text-[65px] text-[40px] font-bold md:pl-8 pl-4">
                      {item.team}
                    </li>
                  </div>
                </div>
              </ul>
            ))}
          </div>
          <div className="flex-1">
            <h2 className="font-extrabold text-[63px] text-white md:pt-0 pt-4">
              Focus.
            </h2>
            <div className="pt-[40px]">
              <div className="bg-[#ffedb3] rounded-md pb-[320px]">
                <img src={ystar2} alt="bs" className="pt-[32px] pl-[32px]" />
                <p className="text-[24px] text-black pt-[32px] px-[33px] ">
                  {items[activeIndex].focus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:hidden ">
          <h2 className="font-extrabold text-[32px] text-white pl-8 pt-8">
            Teams.
          </h2>
          <div className="mt-8 flex gap-20 items-start pb-16 h-fit overflow-y-hidden overflow-x-auto scrollbar-hide">
            {items.map((item, index) => (
              <div key={index} onClick={() => setActiveIndex(index)}>
                <div className="h-[400px] min-w-[150%]">
                  <span className="pl-8">
                    <span className="text-[#FFC501] text-[15px]">
                      {item.num}
                    </span>
                    <span className="pl-2.5 font-bold text-[12px] text-[#FFC501]">
                      {item.team}
                    </span>
                  </span>
                  <p className="h-[100%] overflow-y-auto bg-[#ffedb3] p-6 rounded-xl ml-5 mt-2">
                    <img src={ystar2} alt="ys" />
                    <p className=" text-black text-[16px] pt-4">{item.focus}</p>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
