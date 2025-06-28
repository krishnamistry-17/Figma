import React, { useEffect } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import { IoArrowBackOutline } from "react-icons/io5";
import image7 from "../../../../assets/images/nine.png";
import twits from "../../../../assets/svg/twits.svg";
import linkd from "../../../../assets/svg/linkd.svg";
import noodles from "../../../../assets/images/noodles.png";
import yogurt from "../../../../assets/images/yogurt.png";
import story1 from "../../../../assets/images/image16.png";
import story2 from "../../../../assets/images/rstory2.png";
import story3 from "../../../../assets/images/rstory3.png";
import { useNavigate, useParams } from "react-router-dom";
import BlogPlace from "../../BlogPlace/BlogPlace";
import Footer from "../../../Footer/Footer";

const NThird = () => {
  const data1 = [
    {
      para1: [
        " ",
        <strong>Lagos, Nigeria — Femi Aluko</strong>,
        "Co-Founder and Chief Executive Officer at ",
        <strong>Chowdeck</strong>,
        " welcomes ",
        <strong>Eat ‘N’ Go Africa</strong>,
        " the master franchisee of Cold Stone Creamery and Pinkberry Gourmet Yogurt into the delivery service’s ecosystem as a new restaurant partner.",
      ],
    },
  ];
  const data2 = [
    {
      para: "Chowdeck, Africa’s fastest growing on-demand online food and grocery delivery service successfully delivers hundreds of thousands of orders monthly, and will work with Eat'N’Go to provide the delicious, creamy ice-cream and frozen yoghurt through Cold Stone Creamery, and Pinkberry Yoghurt, to dairy-loving Nigerians across the country.",
    },
    {
      para: "Eat’N’Go Africa remains committed to customer satisfaction and service improvement in the form of quick and reliable logistics. This is evident in the several measures taken to evolve their services such as the commencement of operations on nearly 200 stores across Africa, call centres, improved applications, and websites, amongst others. This desire to improve the customer experience necessitates their partnership with Chowdeck.",
    },
    {
      para: [
        "Speaking on this partnership, ",
        <strong>Mr. Patrick McMicheal</strong>,
        " CEO of Eat’N’Go Africa said, “The need to always be in front of the innovation regarding delivery technology has always been an important aspect of Eat’N’Go’s mission. We prioritize customer experience and the ease with which they get the meals they desire in a fast and safe way. Home delivery is a booming enterprise and partnering with companies to ensure that customers get to have the best of this experience is a priority to us. Working with Chowdeck is in line with our goals as we look forward to continuously improving our customer experience”.",
      ],
    },
    {
      para: [
        "Customers of Chowdeck can now order from over 40 stores, with more to be onboarded in the following weeks. Cold Stone Creamery, and Pinkberry Yoghurt’s restaurant outlets span across various cities including ",
        <strong className=" font-bold">Lagos, Abuja, Port Harcourt</strong>,
        " and ",
        <strong className=" font-bold">Ibadan.</strong>,
        "Treats can be purchased and delivered without hassle via the Chowdeck mobile application, available on the ",
        <strong className=" font-bold text-[#0c513f]">Web, App Store </strong>,
        " and the ",
        <strong className=" font-bold text-[#0c513f]">
          Google Play Store
        </strong>,
        ".",
      ],
    },
    {
      heading: "About Chowdeck",
    },
    {
      para1:
        "Chowdeck is Africa’s leading on-demand online food and grocery delivery service. With operations spanning across several cities in Nigeria including Lagos, Port Harcourt, Abuja, and Ibadan, Chowdeck serves thousands of customers monthly, delivering meals, groceries, and medicine with ease, alleviating the burden of long queues and waiting times.",
    },
    {
      para1:
        "Chowdeck was founded in October 2021 by Femi Aluko, Olumide Ojo, and Lanre Yusuf.",
    },
    {
      para1: [
        "For more information, please visit ",
        <strong className=" font-bold text-[#0c513f]">Chowdeck.com</strong>,
        "or contact ",
        <strong className=" text-black font-bold">Press</strong>,
        " at ",
        <strong className=" font-bold text-[#0c513f]">
          press@chowdeck.com.
        </strong>,
        "",
      ],
    },
    { heading: "About Eat N’ Go" },
    {
      para1:
        "Eat'N'Go is Africa's leading expert franchisee for the Domino's Pizza, Cold Stone Creamery, and Pinkberry Gourmet Frozen Yogurt brands. Renowned for being an expert deliverer of high-quality food and service.",
    },
    {
      para1:
        "Launched in 2012 in Nigeria, Eat'N'Go’s remains committed to their vision to become the premier food operator in Africa. Today, it continues to deliver on this promise by successfully rolling out the globally recognised brands Cold Stone Creamery and Domino's Pizza across Africa. The company continues to expand its presence in key markets by fusing company goals with new strategic development goals.",
    },
    {
      para1: [
        "Eat'N'Go is dedicated to bringing the best global food brands and concepts across Africa. For more information, please visit ",
        <strong className=" font-bold text-[#0c513f]">
          {" "}
          bi.eatngo-africa.com.
        </strong>,
        "",
      ],
    },
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
                <p className="sm:text-[24px] text-[18px] text-black md:px-28 px-5 pt-8 md:pt-4">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] font-bold text-black md:px-28 px-5 md:pt-4">
                  {item.heading}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-28 px-5 ">
                  {item.para1}
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

export default NThird;
