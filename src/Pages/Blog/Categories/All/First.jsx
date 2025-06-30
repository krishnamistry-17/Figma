import React, { useEffect, useState } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import image7 from "../../../../assets/images/image7.png";
import { IoArrowBackOutline } from "react-icons/io5";
import twits from "../../../../assets/svg/twits.svg";
import linkd from "../../../../assets/svg/linkd.svg";
import noodles from "../../../../assets/images/noodles.png";
import story1 from "../../../../assets/images/image16.png";
import story2 from "../../../../assets/images/rstory2.png";
import story3 from "../../../../assets/images/rstory3.png";
import { useNavigate, useParams } from "react-router-dom";
import BlogPlace from "../../BlogPlace/BlogPlace";
import Footer from "../../../Footer/Footer";
const First = () => {
  const data = [
    {
      image: story2,
      p1: "Chowdeck is Now in Ghana — Here’s What We Have in Store",
      d1: " After months of planning, training, and listening, we’re excited to officially launch Chowdeck in Ghana!",
      btn: "Read More",
    },
    {
      image: story3,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      image: story1,
      p1: "Beyond Delivery - Why We acquired Mira",
      d1: " Chowdeck has acquired Mira, a fast-growing provider of modern point-of-sale (POS) solutions tailored for the food and ho...",
      btn: "Read More",
    },
  ];

  const { id } = useParams();
  const blogId = parseInt(id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleClick = (id) => {
    navigate(`/blog/all/${id}`);
  };

  const data1 = [
    {
      para: [
        "After months of planning, training, and listening, we’re excited to officially launch ",
        <strong
          key="bold
        "
        >
          Chowdeck in Ghana!
        </strong>,
        "It’s our first step outside Nigeria and it feels right to begin this new chapter in Accra, a city buzzing with culture, energy, and an appetite for great food delivered fast.",
      ],
    },

    {
      para: "We’ve always believed that delivery can be more than just logistics. It’s about creating a seamless bridge between people and the things they love — whether that’s a hot plate of waakye or household essentials delivered just in time.",
    },
  ];
  const data2 = [
    {
      heading: "Investing in our riders, building with intention",
    },
    {
      para: "Building upon a successful launch in Nigeria in 2021, where we've already connected with 1.5 million users through a network of over 20,000 riders across 11 cities, our expansion into Ghana signifies a pivotal step towards a larger regional vision.",
    },
    {
      para: "Recognising that exceptional service hinges on a well-equipped rider network, we prioritised comprehensive training initiatives even before our launch in Ghana. This foundational training covers critical areas such as professional conduct, efficient navigation and utilisation of our app, exemplary customer service skills, and the meticulous handling of deliveries to ensure quality.",
    },
    {
      para: [
        "To further empower our riders and foster a culture of achievement, we've introduced ",
        <strong key="bold">Rider Games </strong>,
        ",an engaging performance-based reward system. This innovative program allows riders to earn tangible cash bonuses by consistently meeting and exceeding their delivery targets, directly incentivising efficiency and dedication.",
      ],
    },
    {
      para: [
        "Beyond immediate earnings, we are also committed to the long-term financial well-being of our riders. Through our rider loan program, active riders gain access to loans of up to ",
        <strong key="bold">GH₵ 1,000</strong>,
        " providing crucial financial flexibility and support.",
      ],
    },
    {
      para: "Importantly, our commitment to development is ongoing; these training programs and support systems are not one-time events but will be implemented periodically to ensure continuous improvement and adaptation.",
    },
    {
      para: "Our entry into Ghana is not simply a market expansion; it's a commitment to sustained growth alongside the Ghanaian community, upholding high service standards, and generating meaningful economic opportunities. We recognise the dynamic landscape of Ghana, fuelled by rapid urbanisation and a clear consumer appetite for convenience, speed, and reliability.",
    },
    {
      heading1: "Come ride with us",
    },
    {
      newpara: [
        " The ",
        <strong>Chowdeck app</strong>,
        " is available for download now on the ",
        <a className="text-green-800 font-bold underline">Google Play Store</a>,
        " and ",
        <a className="text-green-800 font-bold underline">Apple App Store.</a>,
        " Whether you’re a business looking for better logistics, a rider ready to earn more, or a customer who just wants their food on time — welcome. We’re glad you’re here.",
      ],
    },
    {
      minipara: "Let’s build this together.",
    },
    { end: " With love," },
    { end1: "Team Chowdeck" },
  ];

  return (
    <div className=" text-justify">
      <div className="bg-[#0c513f] h-[600px] w-full  overflow-hidden relative z-10">
        <div>
          <img
            src={rightcloud}
            alt="rc"
            className="w-[300px] h-[91px] md:h-[108px] md:w-[420px] top-0 right-6 absolute"
          />
          <div className=" relative z-10 top-28 ">
            <div
              className="flex justify-center items-center"
              onClick={() => window.history.back()}
            >
              <IoArrowBackOutline className="text-white/20 h-4 w-4" />
              <button className=" text-white/20 text-[20px] uppercase pl-2">
                Go Back
              </button>
            </div>
            <div className="">
              <p className="text-center text-white text-[18px] uppercase font-bold">
                Chowdeck is Now in Ghana — Here’s What We Have in Store
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={bottom} alt="btm" className=" absolute bottom-0 w-full" />
        </div>

        <div className="flex justify-center items-center">
          <div className=" absolute bottom-0 z-0 ">
            <img
              src={image7}
              alt="i7"
              className="w-[985px] md:h-[375px] px-4"
            />
          </div>
        </div>
      </div>
      {/*detail */}
      <div className="mt-20 ">
        <div className="md:flex">
          <div className="md:ml-20 ml-5">
            <div className=" lg:sticky lg:h-[calc(100vh_-_450px)] lg:top-[100px]">
              <p className=" font-bold texxt-[14px] text-black  uppercase mb-6">
                s h a r e
              </p>
              <div className=" flex gap-3">
                <div className="w-10 h-10 bg-[#ffc401] rounded-sm">
                  <img src={twits} alt="ts" className="p-2" />
                </div>
                <div className="w-10 h-10 bg-[#ffc401] rounded-sm">
                  <img src={linkd} alt="lnk" className="p-2" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {data1.map((item, index) => (
              <div key={index} className="">
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-0 pt-4">
                  {item.para}
                </p>
              </div>
            ))}
            {data2.map((item, index) => (
              <div key={index} className="">
                <h3 className="sm:text-[24px] text-[18px] text-black font-bold pt-5 md:pl-11 pl-4">
                  {item.heading}
                </h3>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black font-bold pt-5 md:pl-11 pl-4">
                  {item.heading1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.newpara}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.minipara}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 -mt-4.5">
                  {item.end1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*stories */}
      <div className="lg:pt-32 md:pt-12 pb-60">
        <div className="flex gap-2.5 xl:pl-[200px] pl-[10px]">
          <p className="font-extrabold sm:text-[63px] text-[50px] text-black py-[20.5px]">
            Stories
          </p>
          <img src={noodles} alt="ndls" />
        </div>
        <div className="flex justify-center px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="max-w-full w-[400px] flex justify-center"
              >
                <div className="border-4 rounded-xl border-black overflow-hidden max-w-[400px] w-full">
                  <img
                    src={item.image}
                    alt="s1"
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-[14px] font-extrabold text-black pt-4 px-5 bg-white uppercase">
                    {item.p1}
                  </p>

                  <p className="font-medium text-[18px] text-black pt-5 text-center px-3 bg-white">
                    {item.d1}
                  </p>

                  <div className="pt-5 flex justify-center items-center bg-white mb-3">
                    <button
                      className="font-medium text-[16px] rounded-xl text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-23 py-3 bg-gray-200"
                      onClick={() => handleClick(index)}
                    >
                      {item.btn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <BlogPlace />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default First;
