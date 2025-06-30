import React, { useEffect } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import relayblog from "../../../../assets/images/relayblog.png";
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

const NSix = () => {
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
              src={relayblog}
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
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-0 pt-6">
              Dear Chowstars,
            </p>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5">
              We are beyond thrilled to introduce you to Relay, our on-demand
              logistics innovation, here to revolutionise package deliveries one
              at a time!
            </p>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5">
              We've been working behind the scenes to create something truly
              special just for you! Relay is not just another logistics
              solution—it's a game-changer designed to make your life easier and
              smoother than ever before.
            </p>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5">
              Relay’s got some cool features too! Check them out:
            </p>
            <ul>
              <li className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5 flex">
                <p className="w-2 h-2 bg-black rounded-full mr-4 mt-2.5 "></p>
                <b> Package Protection-</b>Your parcels can be insured against
                any incidents for a small fee!
              </li>
              <li className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5 flex">
                <p className="w-2 h-2 bg-black rounded-full mr-4 mt-2.5 "></p>
                <b> Delivery Notes -</b>Leave customised delivery instructions
                for each rider on their trips!
              </li>
              <li className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5 flex">
                <p className="w-2 h-2 bg-black rounded-full mr-4 mt-2.5 "></p>
                <b>Delivery Pin-</b>Secure your deliveries with our nifty pin
                feature! Deliveries can only be confirmed when you offer a pin!
              </li>
            </ul>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-13">
              To celebrate our launch, we’re offering all Chowstars a special
              first-time use discount code! Use ‘RELAY’ at checkout to redeem a
              10% discount on your first package delivery!
            </p>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5">
              We’re thoroughly excited for our journey ahead! Thank you for
              staying on track with us!
            </p>
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-5">
              With love,
              <br /> Team Chowdeck
            </p>
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

export default NSix;
