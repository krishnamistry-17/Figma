import React, { useEffect, useState } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import image7 from "../../../../assets/images/fifth.png";
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

const Fifth = () => {
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
      para: "We're thrilled to announce a landmark partnership between Chowdeck and Chicken Republic, aimed at bringing you stress-free, affordable meals this August and beyond.",
    },
    { heading: "The Big News " },
    {
      para: "Chowdeck has become the exclusive delivery partner for Chicken Republic in Lagos and Ibadan. This collaboration extends our existing relationship, which already covers eight Nigerian cities and over 90 Chicken Republic outlets.",
    },
  ];
  const data2 = [
    {
      heading: "What This Means for You",
    },
    {
      para: [
        "1. Enhanced Quality: Our partnership ensures your favorite Chicken Republic meals reach you in prime condition on time. ",
        <br />,
        "2. Affordable Delivery: We've optimized our processes to bring down delivery costs for more accessibility.",
        <br />,
        "3. More Affordable Meals: Enjoy special deals and offers exclusive to only Chowdeck users.",
      ],
    },
    { heading1: "August Special: Refuel Price Don Crash!" },
    {
      para1: [
        "To kick off this partnership, we're offering the popular Refuel Combo for just ",
        <strong>₦1000 </strong>,
        " - that's 50% off the regular price of ₦2000",
      ],
    },
    { heading2: "How to Order" },
    {
      para3: [
        "1. Open your Chowdeck app",
        <br />,
        "2. Choose your meals and complete your order",
        <br />,
        "3. Sit back and relax while we deliver your food",
      ],
    },
    {
      para4:
        "This August, let Chowdeck and Chicken Republic handle your meals so you can focus on what really matters. Whether you're working late, too tired to cook, or simply craving some delicious chicken, we've got you covered.",
    },
    {
      minipara: "Stay tuned for more exciting offers and updates!",
    },
    { end: " Bon appétit!" },
    { end1: "Chowdeck" },
  ];

  {
    /*import { useEffect } from "react";
import { useParams } from "react-router-dom";

const First = () => {
  const { id } = useParams(); // get blog id from route

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top on load
  }, []);
  
  const blogId = parseInt(id); // if you need it

  // render content based on blogId here
  ...
};
 */
  }
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
                <p className="sm:text-[24px] text-[18px] font-bold text-black md:px-11 px-5  pt-4">
                  {item.heading}
                </p>
              </div>
            ))}
            {data2.map((item, index) => (
              <div key={index} className="">
                <h3 className="sm:text-[24px] text-[18px] text-black font-bold pt-4  md:pl-11 pl-4">
                  {item.heading}
                </h3>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para}
                </p>
                <h3 className="sm:text-[24px] text-[18px] text-black font-bold pt-4  md:pl-11 pl-4">
                  {item.heading1}
                </h3>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para1}
                </p>
                <h3 className="sm:text-[24px] text-[18px] text-black font-bold  md:pl-11 pl-4">
                  {item.heading2}
                </h3>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para3}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para4}
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

export default Fifth;
