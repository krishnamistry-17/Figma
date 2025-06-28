import React, { useEffect } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import womens from "../../../../assets/images/womens.png";
import Iya from "../../../../assets/images/Iya.png";
import sooyah from "../../../../assets/images/sooyah.png";
import burger from "../../../../assets/images/burger.png";
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

const Second = () => {
  const data1 = [
    {
      para: "The world flourishes when women lead. Their voices, ideas, and resilience shape industries, challenge outdated systems, and push society forward. Yet, despite their undeniable contributions, women in leadership still face structural barriers — ranging from access to funding to the glass ceiling that persists in boardrooms worldwide.",
    },

    {
      para: [
        "Globally, women make up ",
        <strong>40% of the workforce</strong>,
        "but hold only ",
        <strong>28% of managerial positions.</strong>,
        " Less than ",
        <strong>11% of Fortune 500 CEOs</strong>,
        " are women, and the funding gap remains stark — ",
        <strong>
          female-led startups receive just 2% of venture capital funding,
        </strong>,
        " despite generating more revenue per dollar invested. In Africa, where women are at the heart of entrepreneurship, these challenges are even more pronounced. However, history proves that where barriers exist, women break them.",
      ],
    },
  ];
  const data2 = [
    {
      para: [
        "This International Women’s Day, ",
        <strong>#AcceleratingYou,</strong>,
        "our special vendor spotlight, is not just a campaign; it is a movement. It is about acknowledging the women who have built empires from scratch, transformed industries, and redefined leadership. It is about celebrating the trailblazers who have turned adversity into opportunity, proving that leadership is not merely about gender — it is about vision, impact, and the courage to carve new paths.",
      ],
    },
    {
      para: "At Chowdeck, we believe in action beyond recognition. We are proud to champion these women, providing them with data-driven insights, operational support, and the digital tools necessary to accelerate their success. Their stories deserve to be told — not just to celebrate their achievements but to inspire the next generation of women entrepreneurs and leaders.",
    },

    { end: "Mrs Kehinde Yakubu A.K.A Iya Moria" },
    { end1: "Founder, Iya Moria" },
    {
      paras: [
        "If you’ve ever set foot on the University of Lagos (UNILAG) campus, you’ve likely heard the name ",
        <strong>
          <i>Iya Moria.</i>
        </strong>,
        " More than a food vendor, she is a cultural icon — a provider of comfort, nostalgia, and community. For thousands of students, alumni, and faculty, her meals have been more than sustenance; they have been a taste of home.",
      ],
    },
  ];
  const data3 = [
    {
      para: "Her story is one of audacity and adaptability. She started with a modest stall, selling snacks and later simple Indomie dishes. Then came a pivotal moment — one student, one suggestion: Why don’t you start selling full meals? That single idea sparked a transformation. Today, she is renowned for her unforgettable amala, gbegiri, and ewedu, served with well-seasoned orisirisi, delectable organ meats, that have earned her a legendary reputation.",
    },
    {
      para1: [
        "This February marked her ",
        <strong>13th year in business,</strong>,
        " a milestone that speaks volumes about her resilience and dedication. Her journey is a testament to how women in informal economies shape communities, drive employment, and sustain local growth. With the support of Chowdeck, she has expanded her reach, leveraging digital solutions to streamline her operations and enhance customer engagement.",
      ],
    },
    {
      story: [
        "Her journey is proof that passion, perseverance, and community support can turn a simple idea",
        <br />,
        " into a lasting legacy. Watch her story ",
        <strong>
          <i className="text-blue-700 underline">
            <a href="https://www.youtube.com/watch?v=IIdhM-PmhQ4&feature=youtu.be">
              here:
            </a>
          </i>
        </strong>,
        "",
      ],
    },
  ];
  const data4 = [
    { end: "Olamidun Ogundoyin" },
    { end1: "Founder, Sooyah Bistro" },
    {
      para: [
        "Olamidun Ogundoyin is a force! A woman who does not merely follow trends but creates them. As the founder of ",
        <strong>Sooyah Bistro,</strong>,
        " she has redefined one of Nigeria’s most beloved street foods, transforming suya from a night-time roadside delicacy into an upscale, gourmet experience.",
      ],
    },
  ];
  const data5 = [
    {
      para: [
        "Before Sooyah Bistro, she was a trailblazer in education, serving as the ",
        <strong>Country Director of Nexford University, </strong>,
        " where she played a critical role in making affordable, high-quality education accessible to thousands of Africans. Her ability to build and scale a brand, whether in education or food, stems from her deep understanding of strategy, consumer behaviour, and market innovation.",
      ],
    },
    {
      para1:
        "Her success with Sooyah Bistro is no accident. It is the result of careful research, impeccable execution, and an unrelenting commitment to quality. With Chowdeck’s data analytics and operational insights, she has been able to refine her logistics, expand customer engagement, and optimise her business model.",
    },
    {
      story: [
        "Her story is one of fearless ambition and a relentless drive to innovate. Watch her story here:",
        <strong>
          <i className="text-blue-700 underline">
            <a href="https://www.youtube.com/watch?v=AnYk5eVucSA&feature=youtu.be">
              here:
            </a>
          </i>
        </strong>,
        "",
      ],
    },
  ];
  const data6 = [
    { end: "Lerato Makume" },
    { end1: "Marketing Director, Burger King Nigeria" },
    {
      para: [
        "Lerato Makume is a master storyteller — except her medium is not words but brands. With ,  ",
        <strong>
          15 years of experience in the beverage and liquor industry,
        </strong>,

        " she has played a crucial role in shaping global brands, including at ",
        <strong>Allied Food & Confectionary Services Limited,</strong>,
        " the master franchisee for ",
        <strong> Burger King </strong>,
        " and ",
        <strong> Kinglace Ice cream. </strong>,
        " She’s driving their market expansion across Africa.",
      ],
    },
  ];
  const data7 = [
    {
      para: "Her expertise lies in understanding consumer psychology and leveraging trends to build unforgettable brand experiences. Having worked across Nigeria and South Africa, she is adept at navigating dynamic markets, crafting compelling value propositions, and executing high-impact marketing campaigns that drive growth.",
    },
    {
      story: [
        "Her ability to forge strategic relationships and seamlessly manage cross-functional teams makes her an indispensable leader in the industry. She thrives in fast-paced, ever-evolving environments — proof that the future of marketing belongs to those who understand both data and human connection. Watch her story ",
        <strong>
          <i className="text-blue-700 underline">
            <a href="https://www.youtube.com/watch?v=mT8y90O_PMY&feature=youtu.bee">
              here:
            </a>
          </i>
        </strong>,
        "",
      ],
    },
  ];
  const data8 = [
    {
      para: "These women are not just business leaders. They are architects of the future, mentors, and visionaries who continue to push boundaries and redefine possibilities.",
    },
    {
      para1: [
        "At Chowdeck, we are not just celebrating their success — we are investing in it. Through ",
        <strong>data-driven solutions, operational support,</strong>,
        "and ",
        <strong>expansion tools, </strong>,
        "we are committed to helping women-led businesses scale, compete, and thrive in an increasingly digital world.",
      ],
    },
    {
      para2: [
        "The future is not just female. It is now, and it is ",
        <strong> #AcceleratingYou.</strong>,
        "",
      ],
    },
    { para3: "What’s Next?" },
    {
      para4:
        "Join the conversation. Share your stories. Support women-led businesses. Because when we accelerate together, we go further.",
    },
    { end: "With love and power," },
    { end1: "Denise Eseimokumoh for Team Chowdeck" },
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
    <div>
      <div className="bg-[#0c513f] sm:h-[600px] h-[500px] w-full  overflow-hidden relative z-10">
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
                #AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck
                Ecosystem
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={bottom} alt="btm" className=" absolute bottom-0 w-full" />
        </div>

        <div className="flex justify-center items-center">
          <div className=" absolute sm:bottom-0 bottom-16 z-0 ">
            <img
              src={womens}
              alt="womns"
              className="w-[1000px] md:h-[375px] px-4"
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
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-0 pt-4 ">
                  {item.para}
                </p>
              </div>
            ))}
            {data2.map((item, index) => (
              <div key={index} className="">
                <p
                  className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-9 pt-4
                "
                >
                  {item.para}
                </p>

                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 md:pt-7 pt-4">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 md:-mt-8.5 -mt-4.5">
                  {item.end1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 md:pt-7 pt-4">
                  {item.paras}
                </p>
              </div>
            ))}
            <img
              src={Iya}
              alt="img"
              className="mt-5 max-w-full h-auto xl:px-12 px-3"
            />
            {data3.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 pt-7">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 md:pt-7 ">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 md:pt-7">
                  {item.story}
                </p>
              </div>
            ))}
            <img
              src="https://files.chowdeck.com/images/0308_3_e43b702848.gif"
              alt="cele"
              className="md:ml-11 pt-[55px] md:px-0 px-3"
            />
            {data4.map((item, index) => (
              <div key={index} className="">
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 pt-7">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 -mt-5.5">
                  {item.end1}
                </p>
                <p
                  className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 md:pt-7 pt-4
                "
                >
                  {item.para}
                </p>
              </div>
            ))}
            <img
              src={sooyah}
              alt="img"
              className="mt-5 max-w-full h-auto xl:px-12 px-3"
            />
            {data5.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 md:pt-17 pt-4">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 ">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5">
                  {item.story}
                </p>
              </div>
            ))}
            <img
              src="https://files.chowdeck.com/images/0308_2_be23a23319.gif"
              alt="cele"
              className="md:ml-11 pt-[55px] md:px-0 px-3"
            />
            {data6.map((item, index) => (
              <div key={index} className="">
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 pt-7">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 -mt-5.5">
                  {item.end1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 md:pt-7 pt-3">
                  {item.para}
                </p>
              </div>
            ))}
            <img
              src={burger}
              alt="img"
              className="mt-5 max-w-full h-auto xl:px-12 px-3"
            />
            {data7.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5 md:pt-17 pt-4">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black  md:px-11 px-5">
                  {item.story}
                </p>
              </div>
            ))}
            <img
              src="https://files.chowdeck.com/images/0308_4_e3d9224010.gif"
              alt="cele"
              className="md:ml-11 pt-[55px] md:px-0 px-3"
            />
            <h1 className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 md:pt-20 pt-4">
              The Future is Now — And It Is Female
            </h1>
            {data8.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-9 pt-4">
                  {item.para}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para2}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 font-bold">
                  {item.para3}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para4}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 pt-7">
                  {item.end}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 md:-mt-8.5 -mt-4.5">
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

export default Second;
