import React, { useState } from "react";
import twit from "../../../assets/svg/twit.svg";
import linkdin from "../../../assets/svg/linkdin.svg";
import ceo from "../../../assets/images/ceo.png";
import ceo1 from "../../../assets/images/ceo1.png";
import ceo2 from "../../../assets/images/ceo2.png";
import ceo3 from "../../../assets/images/ceo3.png";
import ceo4 from "../../../assets/images/ceo4.png";
import ceo5 from "../../../assets/images/ceo5.png";
import ceo6 from "../../../assets/images/ceo6.png";
import ceo7 from "../../../assets/images/ceo7.png";
import ceo8 from "../../../assets/images/ceo8.png";
import ceo9 from "../../../assets/images/ceo9.png";
import ceo10 from "../../../assets/images/ceo10.png";
import ceo11 from "../../../assets/images/ceo11.png";
import ceo12 from "../../../assets/images/ceo12.png";
import ceo13 from "../../../assets/images/ceo13.png";
import ceo14 from "../../../assets/images/ceo14.png";
import ceo15 from "../../../assets/images/ceo15.png";
import ceo16 from "../../../assets/images/ceo16.png";
import ceo17 from "../../../assets/images/ceo17.png";

const People = () => {
  const data = [
    {
      image: ceo,
      name: "Babafemi Aluko",
      title: "anywork",
    },
    {
      image: ceo1,
      name: "Olumide Ojo",
      title: "engineering",
    },
    {
      image: ceo2,
      name: "Lanre Yusuf",
      title: "operations",
    },
    {
      image: ceo3,
      name: "Tomilola Aiyepola",
      title: "business",
    },
    {
      image: ceo4,
      name: "Amaka Pascal",
      title: "growth",
    },
    {
      image: ceo5,
      name: "Damian Okafor",
      title: "growth",
    },
    {
      image: ceo6,
      name: "Adekunle Ligali",
      title: "growth",
    },
    {
      image: ceo7,
      name: "Tola Agboola",
      title: "growth",
    },
    {
      image: ceo8,
      name: "Princess Ubong",
      title: "growth",
    },
    {
      image: ceo9,
      name: "Ademola Babatunde",
      title: "engineering",
    },
    {
      image: ceo10,
      name: "Sauban Lawal",
      title: "engineering",
    },
    {
      image: ceo11,
      name: "Liz Agboola",
      title: "growth",
    },
    {
      image: ceo12,
      name: "Damilola Seweje",
      title: "engineering",
    },
    {
      image: ceo13,
      name: "Adeleye Emma-Adewuyi",
      title: "operations",
    },
    {
      image: ceo14,
      name: "Raphael Akinola",
      title: "engineering",
    },
    {
      image: ceo15,
      name: "Adeola Akande",
      title: "operation",
    },
    {
      image: ceo16,
      name: "Jeremiah Izuagie",
      title: "growth",
    },
    {
      image: ceo17,
      name: "Precious Lamina",
      title: "product",
    },
  ];
  const items = [
    {
      fname: "Femi",
      ftitle: "anywork",
    },
    {
      fname: "Olumide",
      ftitle: "engineering",
    },
    {
      fname: "Lanre",
      ftitle: "operations",
    },
    {
      fname: "Tomilola",
      ftitle: "business",
    },
    {
      fname: "Amaka",
      ftitle: "growth",
    },
    {
      fname: "Damian",
      ftitle: "growth",
    },
    {
      fname: "Adekunle",
      ftitle: "growth",
    },
    {
      fname: "Tola",
      ftitle: "growth",
    },
    {
      fname: "Princess",
      ftitle: "growth",
    },
    {
      fname: "Ademola",
      ftitle: "engineering",
    },
    {
      fname: "Sauban",
      ftitle: "engineering",
    },
    {
      fname: "Liz",
      ftitle: "growth",
    },
    {
      fname: "Damilola",
      ftitle: "engineering",
    },
    {
      fname: "Adeleye",
      ftitle: "operations",
    },
    {
      fname: "Raphael",
      ftitle: "engineering",
    },
    {
      fname: "Adeola",
      ftitle: "operation",
    },
    {
      fname: "Jeremiah",
      ftitle: "growth",
    },
    {
      fname: "Precious",
      ftitle: "product",
    },
  ];

  const [isSelected, setIsSelected] = useState(0);

  return (
    <div className="py-32 px-10">
      <div className=" container">
        <p className="text-black text-[64px] mb-6 font-bold">People</p>
        {/*sm */}
        <div className=" flex gap-14 overflow-x-auto md:hidden">
          {data.map((item, index) => (
            <div key={index}>
              <div className="min-w-[120%] md:min-w-[50%]">
                <div className=" border-[3px] rounded-2xl border-black overflow-hidden">
                  <div className=" h-[300px] lg:h-full lg:max-h-[600px] overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt="ceo"
                      className=" aspect-auto scale-110 w-full translate-y-5"
                    />
                  </div>
                  <div className=" bg-[#ffc401] lg:hidden px-4 h-20 flex items-center">
                    <span className="w-4 h-4 bg-white border-[3px] border-black rounded-full block mr-4"></span>
                    <span className=" text-black text-2xl">{item.name}</span>
                  </div>
                </div>
                <div className=" flex justify-between items-center mt-2 md:hidden">
                  <span className=" uppercase tracking-[3px] font-bold text-[14px] text-[#ffc401]">
                    {item.title}
                  </span>
                  <span className=" flex items-center space-x-2">
                    <a
                      href=""
                      className="border w-10 h-10 flex items-center justify-center rounded transition-all hover:bg-[#ffc401] hover:border-[#ffc401]"
                    >
                      <img src={linkdin} alt="link" />
                    </a>
                    <a
                      href=""
                      className="border w-10 h-10 flex items-center justify-center rounded transition-all hover:bg-[#ffc401] hover:border-[#ffc401]"
                    >
                      <img src={twit} alt="link" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*lg */}
        <div className=" hidden md:grid grid-cols-5 gap-[32px]">
          <div className=" col-span-2 md:sticky md:top-[100px] md:h-[calc(100vh_-_350px)]">
            <div className=" border-[3px] border-black rounded-2xl overflow-hidden">
              <div className="h-[300px] md:h-full md:max-h-[600px] overflow-hidden bg-slate-200">
                <img
                  src={data[isSelected].image}
                  alt="ceo"
                  className=" aspect-auto scale-110 w-full translate-y-5"
                />
                <div className=" bg-[#ffc401] md:hidden px-4 h-20 flex items-center">
                  <span className="w-4 h-4 bg-white border-[3px] border-black rounded-full block mr-4"></span>
                  <span className=" text-black text-2xl">abc</span>
                </div>
              </div>
              <div className=" flex justify-between items-center mt-2 md:hidden">
                <span className=" uppercase tracking-[3px] font-bold text-[14px] text-[#ffc401]">
                  abc
                </span>
                <span className=" flex items-center space-x-2">
                  <a
                    href=""
                    className="border w-10 h-10 flex items-center justify-center rounded transition-all hover:bg-[#ffc401] hover:border-[#ffc401]"
                  >
                    <img src={linkdin} alt="link" />
                  </a>
                  <a
                    href=""
                    className="border w-10 h-10 flex items-center justify-center rounded transition-all hover:bg-[#ffc401] hover:border-[#ffc401]"
                  >
                    <img src={twit} alt="link" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className=" col-span-3 border-t border-black">
            {items.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setIsSelected(index)}
                  className={`grid grid-cols-7 gap-3 w-full border-b border-r-black
              items-center py-10 
              ${
                isSelected === index
                  ? "text-[#ffc401] border-b-black"
                  : "text-black border-b-black"
              }
              `}
                >
                  <span className=" text-left text-[32px] leading-none tracking-[-1px] font-medium col-span-3">
                    {item.fname}
                  </span>
                  <span className=" uppercase text-left text-[14px] leading-none tracking-[3px] font-bold col-span-3">
                    {item.ftitle}
                  </span>
                  <span className=" flex justify-end leading-none col-span-1">
                    <span className=" flex items-center space-x-2">
                      <a
                        href=""
                        className="border w-10 h-10 flex items-center justify-center rounded transition-all hover:bg-[#ffc401] hover:border-[#ffc401]"
                      >
                        <img src={linkdin} alt="link" />
                      </a>
                      <a
                        href=""
                        className="border w-10 h-10 flex items-center justify-center rounded transition-all hover:bg-[#ffc401] hover:border-[#ffc401]"
                      >
                        <img src={twit} alt="link" />
                      </a>
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
