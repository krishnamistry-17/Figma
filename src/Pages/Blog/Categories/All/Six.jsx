import React, { useEffect, useState } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import image7 from "../../../../assets/images/six.png";
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

const Six = () => {
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
      para: "We’re thrilled to announce a game-changing collaboration in our world of food delivery! This exciting partnership presents FoodCourt’s diverse and delicious menu offerings with Chowdeck’s efficient and reliable delivery service.",
    },
    { heading: "What’s Cooking? " },
    {
      para0:
        "Our partnership with FoodCourt introduces culinary delights to the Chowdeck platform. You can now enjoy menu featuring popular FoodCourt outlets:",
    },
    {
      para1: [
        "1. Chow Asian: Diverse Asian cuisines",
        <br />,
        "2. Red Pepper: Authentic Naija flavors",
        <br />,
        "3. Wrap City: Your go-to shawarmas and wraps",
        <br />,
        "4. Good Greens: Fresh, veggie-packed options",
        <br />,
        "5. Jollof & Co: Perfect Jollof and Fried rice",
        <br />,
        "6. The Cocktail Club: Cocktails and mocktails",
      ],
    },
  ];
  const data2 = [
    { heading2: "Where and How to Order" },
    {
      para: "FoodCourt is now live on Chowdeck in Lagos, serving cities on island, coming soon to the mainland. You can place your order through:",
    },
    {
      para3: [
        "1. Our ",
        <a className="underline"> Web store</a>,
        "",
        <br />,
        "2. The Chowdeck mobile app (available on both the",
        <a className=" underline"> App Store</a>,
        " and ",
        <a className=" underline">Google Play Store)</a>,
        " Whichever method you choose, you’re just a few taps away from a whole new world.",
      ],
    },
    {
      para4:
        "Try the Chowdeck app today, explore our expanded menu, and treat yourself to the best that we have to offer. Whether you’re in the mood for a spicy shawarma from Wrap City, a refreshing juice from Fresh Press, or a classic Jollof rice from Jollof & Co, we’ve got you covered.",
    },
    {
      minipara: "Thank you for choosing Chowdeck.",
    },
    { end: " Bon appétit!" },
    { end1: "The Chowdeck Team" },
  ];

  return (
    <div className="text-justify">
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
            <p className="sm:text-[24px] text-[18px] font-bold text-black md:px-11 px-5  pt-2">
              What’s Cooking?
            </p>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
              Our partnership with FoodCourt introduces culinary delights to the
              Chowdeck platform. You can now enjoy menu featuring popular
              FoodCourt outlets:
            </p>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pb-4">
              <ul className="list-decimal list-inside sm:text-[24px] text-[18px] text-black">
                <li>
                  <b>Chow Asian:</b>Diverse Asian cuisines
                </li>
                <li>
                  <b>Red Pepper:</b>Authentic Naija flavors
                </li>
                <li>
                  <b>Wrap City:</b>Your go-to shawarmas and wraps
                </li>
                <li>
                  <b>Good Greens:</b> Fresh, veggie-packed options
                </li>
                <li>
                  <b>GJollof & Co:</b> Perfect Jollof and Fried rice
                </li>
                <li>
                  <b>The Cocktail Club:</b>Cocktails and mocktails
                </li>
              </ul>
            </p>
            {data2.map((item, index) => (
              <div key={index} className="">
                <h3 className="sm:text-[24px] text-[18px] text-black font-bold  md:pl-11 pl-4 ">
                  {item.heading2}
                </h3>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para}
                </p>
              </div>
            ))}
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
              <ul className="list-disc list-inside sm:text-[24px] text-[18px] text-black pt-0">
                <li>
                  Our <a className="underline">Web store</a>
                </li>
                <li>
                  The Chowdeck mobile app (available on both the{" "}
                  <a className="underline">App Store</a> and{" "}
                  <a className=" underline">Google Play Store</a>)
                </li>
              </ul>
            </p>
            {data2.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-2">
                  {item.para4}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.minipara}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
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

export default Six;
