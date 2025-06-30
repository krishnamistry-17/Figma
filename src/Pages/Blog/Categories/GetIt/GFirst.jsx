import React, { useEffect } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
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

const GFirst = () => {
  const data1 = [
    {
      para: "Isn't it frustrating when you're craving a particular meal and you just have no clue what restaurant to order it from? No need to dwell on your frustrations anymore because our new series has got you covered!",
    },
    {
      para1: [
        "In ",
        <strong className=" font-bold ">Get It Here</strong>,
        "we'll highlight restaurants serving your favourite meals, all available to be delivered straight to you on ",
        <strong className=" font-bold text-[#0c513f] underline">
          Chowdeck
        </strong>,
        " Africa's leading on-demand online food delivery service. From  salads, smokey jollof rice, abula, burgers to creamy pasta, pizza, and more, we'll let you know who serves and deliver it to you quick and easy. ",
      ],
    },
    {
      para2: [
        "Today, we'll highlight the best restaurants on Chowdeck to order Nigeria's most popular dish ",
        <br />,
        <strong>Jollof Rice.</strong>,
      ],
    },
  ];
  const data2 = [
    {
      heading: "November Cubes",
    },
    {
      detail: [
        " ",
        <strong>Delivering To:</strong>,
        " Gwarinpa, Jahi, Maitama, Garki, Jabi, Utako, Mabushi, Katampe, Kado, Wuye, Central Business Area, Wuse, and its environs. ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Opening Hours:</strong>,
        " 9:00 AM - 9:00 PM from Mondays to Fridays. 10:00 AM - 8:00 PM on Sundays. ",
      ],
    },
    {
      detail: [" ", <strong>Restaurant Rating:</strong>, "4.67 out of 5."],
    },
    {
      quote: "Highly quality. I really enjoyed it the meal",
    },
    {
      quoteby: "- Michael, Chowstar.",
    },
    {
      heading: "The Place",
    },
    {
      detail: [
        " ",
        <strong>Where:</strong>,
        "  All major cities in Lagos and Abuja. ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Delivering To:</strong>,
        "  All major cities in Lagos and Abuja. ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Opening Hours:</strong>,
        " 9:00 AM - 8:00 PM from Mondays to Sundays.",
      ],
    },
    {
      detail: [" ", <strong>Restaurant Rating:</strong>, " 4.67 out of 5."],
    },
    {
      quote: "Always a delight",
    },
    {
      quoteby: "- Hannah, Chowstar.",
    },
    {
      heading: "Molabat Kitchen",
    },
    {
      detail: [
        " ",
        <strong>Where: </strong>,
        <a className=" text-[#0c513f] underline">
          14 Agungi Ajiran Rd, Lekki Penninsula II, 106104, Lekki, Lagos,
          Nigeria.
        </a>,
        " ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Delivering To:</strong>,
        " Ikoyi, Victoria Island, Lekki Phase I, Ikate, Jakande, Osapa London, Igbo Efon, Ologolo, Agungi, and its environs.  ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Opening Hours:</strong>,
        " 10:00 AM - 8:00 PM from Mondays to Fridays, 10:00 AM - 6:00 PM on Saturdays and 12:00 PM - 6:00 PM on Sundays.  ",
      ],
    },
    {
      detail: [" ", <strong>Restaurant Rating:</strong>, "4.47 out of 5."],
    },
    {
      quote:
        "“Nice packaging. Very tasty. Worth it. Highly recommend. The food was lovely! Packaging was also nice” ",
    },
    {
      quoteby: "- Ebiakpo, Chowstar.",
    },
    {
      heading: "HNH Restaurant",
    },
    {
      detail: [
        " ",
        <strong>Where: </strong>,
        <a className=" text-[#0c513f] underline">
          27 Fola Agoro St, Igbobi, Road, Nigeria.
        </a>,
        " ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Delivering To:</strong>,
        " Yaba, Sabo, UNILAG, Adekunle, and its environs.   ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Opening Hours:</strong>,
        " 9:00 AM - 7:00 PM from Mondays to Saturdays. Closed on Sundays.  ",
      ],
    },
    {
      detail: [" ", <strong>Restaurant Rating:</strong>, "4.58 out of 5."],
    },
    {
      quote:
        "How can one restaurant be so amazing? Every meal a hit! What is all this? ",
    },
    {
      quoteby: "- Martha, Chowstar.",
    },
    {
      heading: "Talenu Bukka",
    },
    {
      detail: [
        " ",
        <strong>Where:</strong>,
        " 4C73+8R4, 32 Cres, Gwarinpa Estate 900108, Gwarinpa, Federal Capital Territory. ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Delivering To:</strong>,
        " Gwarinpa, Jahi, Maitama, Garki, Jabi, Utako, Mabushi, Katampe, Kado, Wuye, Central Business Area, Wuse, and its environs. ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Opening Hours:</strong>,
        " 9:00 AM - 9:00 PM from Mondays to Saturdays. 9:00 AM - 9:00 PM on Sundays.  ",
      ],
    },
    {
      detail: [" ", <strong>Restaurant Rating:</strong>, "4.44 out of 5."],
    },
    {
      quote: "Really tasty and awesome meal",
    },
    {
      quoteby: "- Meghan, Chowstar.",
    },
    {
      heading: "Mega Chicken",
    },
    {
      detail: [" ", <strong>Where: </strong>, " Ikeja, Ikota, and Lekki."],
    },
    {
      detail: [
        " ",
        <strong>Delivering To:</strong>,
        " All major cities in Lagos. ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Opening Hours:</strong>,
        " 9:00 AM - 9:15 PM from Mondays to Saturdays. 9:00 AM - 8:00 PM on Sundays. ",
      ],
    },
    {
      detail: [" ", <strong>Restaurant Rating:</strong>, "4.36 out of 5."],
    },
    {
      quote: "  Nice packaging. Worth it. Loved it and delivery was prompt",
    },
    {
      quoteby: "- Damilola, Chowstar.",
    },
    {
      heading: "King Glab Cuisine",
    },
    {
      detail: [
        " ",
        <strong>Where: </strong>,
        " Ikeja, Victoria Island, anad Yaba.",
      ],
    },
    {
      detail: [
        " ",
        <strong>Delivering To:</strong>,
        " Yaba, Sabo, UNILAG, Ikeja, Ogudu, Alausa, Ikoyi, Victoria Island, Lekki Phase I, and its environs.  ",
      ],
    },
    {
      detail: [
        " ",
        <strong>Opening Hours:</strong>,
        " 11:00 AM - 10:00 PM from Mondays to Thursdays, 10:30 AM - 10:00 PM on Fridays, 11:00 AM - 10:00 PM on Saturdays and 10:30 AM - 8:00 PM on Sundays. ",
      ],
    },
    {
      detail: [" ", <strong>Restaurant Rating:</strong>, "4.36 out of 5."],
    },
    {
      quote:
        " Highly recommended, very tasty, and nice packaging. High quality and worth it. King Glab is the best. Thanks for the affordable tasty meal. I work without worry knowing you got me for lunch",
    },
    {
      quoteby: "- Glory, Chowstar.",
    },
    {
      para: "Eat your jollof rice where you like! Chowdeck delivers food across numerous cities in Lagos and Abuja including Yaba, Alausa, Ikoyi, Ogudu, Wuse, Gwarinpa, Lekki, Victoria Island, Ikeja, Surulere, Festac, Amuwo Odofin, Egbeda, Alimosho, Gbagada, Ikoyi, Jahi, Maitama, Garki, Jabi, Utako, Mabushi, Katampe, Kado Wuye, Central Business Area, Apo, Gudu, Life Camp, 1st Avenue, Asokoro, Jahi, Wuse and Central Areas with ongoing expansions to other major cities across the continent.",
    },
    {
      lastpara: [
        "We're eager to serve you! Order food online and have it delivered to you immediately or at a scheduled time. Alternatively, order ahead online and pickup at your favourite restaurants. Order and schedule deliveries now on our ",
        <a className=" underline font-bold text-[#0c513f]">app</a>,
        " or ",
        <a className="underline font-bold text-[#0c513f]">website!</a>,
        "",
      ],
    },
    {
      para1: "We’ll be back with more exciting restaurant highlights soon.",
    },
    {
      para2: "See you in a bit!",
    },
    { end: "With love," },
    { end1: "Chowdeck" },
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
  const { id, category } = useParams();
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
      <div className="bg-[#0c513f] sm:h-[500px] h-[500px] w-full  overflow-hidden relative z-10">
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
              <p className="text-center text-white text-[18px] uppercase font-bold pt-4">
                Get It Here: Jollof Rice
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={bottom} alt="btm" className=" absolute bottom-0 w-full" />
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
              <div key={index} className=" italic">
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-0 pt-4 ">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-2 ">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-2 ">
                  {item.para2}
                </p>
              </div>
            ))}
            {data2.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-[#0c513f] font-bold underline md:px-11 px-5  pt-4 ">
                  {item.heading}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5   ">
                  {item.detail}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5  ">
                  {item.quote}
                </p>
                <p className="sm:text-[24px] text-[18px] font-bold text-black md:px-11 px-5  ">
                  {item.quoteby}
                </p>
                <p className="sm:text-[24px] text-[18px]  text-black md:px-11 px-5  ">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px]  text-black md:px-11 px-5  ">
                  {item.lastpara}
                </p>
                <p className="sm:text-[24px] text-[18px]  text-black md:px-11 px-5  ">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px]  text-black md:px-11 px-5  ">
                  {item.para2}
                </p>
                <p className="sm:text-[24px] text-[18px]  text-black md:px-11 px-5  ">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px]  text-black md:px-11 px-5  -mt-1.5">
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

export default GFirst;
