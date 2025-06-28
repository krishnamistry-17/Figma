import React, { useEffect } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import { IoArrowBackOutline } from "react-icons/io5";
import image7 from "../../../../assets/images/ten.png";
import twits from "../../../../assets/svg/twits.svg";
import linkd from "../../../../assets/svg/linkd.svg";
import noodles from "../../../../assets/images/noodles.png";
import yogurt from "../../../../assets/images/kfc.png";
import story1 from "../../../../assets/images/image16.png";
import story2 from "../../../../assets/images/rstory2.png";
import story3 from "../../../../assets/images/rstory3.png";
import { useNavigate, useParams } from "react-router-dom";
import BlogPlace from "../../BlogPlace/BlogPlace";
import Footer from "../../../Footer/Footer";

const NFive = () => {
  const data1 = [
    { head: "Dear Chowstars," },
    {
      para1:
        "As Africa’s fastest growing on-demand online food, grocery, and medicine delivery service, we remain committed to bringing you one step closer to global excellence. As such, we are pleased to welcome the newest member of our ever evolving ecosystem of restaurant partners, KFC!",
    },
  ];
  const data2 = [
    {
      ita: "Image Credit: L-R: Kennedy Offor, Head of Sales and Partnerships, Satender Singh, CEO, KFC Nigeria, Femi Aluko, CEO and Co-Founder of Chowdeck, and Abhishek Kumar, Operations Lead, KFC Nigeria.",
    },
    {
      para1: [
        " ",
        <strong>Satender Singh, CEO, KFC Nigeria</strong>,
        " said “At ",
        <strong>KFC Nigeria</strong>,
        " we are thrilled to embark on this partnership with Chowdeck. This collaboration represents an exciting opportunity for us to expand our reach and enhance convenience for our valued customers across Nigeria. As we join forces with Chowdeck, we are committed to delivering the same high-quality food and service that KFC is renowned for, now with added accessibility through Chowdeck's delivery platform. We believe that this partnership will not only streamline the ordering process but also elevate the overall dining experience for our customers. We look forward to working closely with Chowdeck to bring the irresistible taste of KFC to even more households across Nigeria”.",
      ],
    },
    {
      para: [
        "Customers of Chowdeck can now order from over 40 stores, with more to be onboarded in the following weeks with outlets spanning across various cities including ",
        <strong className=" font-bold">Lagos, Abuja, Port Harcourt</strong>,
        " and ",
        <strong className=" font-bold">Ibadan.</strong>,
        "Delicious meals can be purchased and delivered without hassle via the Chowdeck mobile application, available on the ",
        <strong className=" font-bold text-[#0c513f]">Web, App Store</strong>,
        " and the ",
        <strong className=" font-bold text-[#0c513f]">
          Google Play Store
        </strong>,
        "",
      ],
    },

    {
      heading2: "What are you waiting for? Hurry and order now!",
    },
    { end: "With love," },
    { end1: "Team Chowdeck" },
  ];

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
  });
  const handleClick = (id) => {
    navigate(`/blog/all/${id}`);
  };
  return (
    <div>
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
                Sparkle with Shaaré
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
                <p className="sm:text-[24px] text-[18px] text-black md:px-28 px-5  md:pt-4 pt-4">
                  {item.head}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-28 px-5  md:pt-4">
                  {item.para1}
                </p>
              </div>
            ))}
            <img
              src={yogurt}
              alt="yogrt"
              className="md:px-28 px-4 w-full pt-8"
            />
            {data2.map((item, index) => (
              <div key={index} className="">
                <p className="sm:text-[24px] text-[18px] italic text-black md:px-28 px-5 pt-8 md:pt-4">
                  {item.ita}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-28 px-5 pt-2 md:pt-4">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-28 px-5 ">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px] font-bold text-black md:px-28 px-5 md:pt-4">
                  {item.heading2}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-28 px-5  md:pt-4">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-28 px-5 md:-mt-8.5 -mt-4.5">
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

export default NFive;
