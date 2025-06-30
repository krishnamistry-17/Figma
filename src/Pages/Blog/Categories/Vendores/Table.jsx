import React, { useEffect, useState } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import image7 from "../../../../assets/images/eleven.png";
import { IoArrowBackOutline } from "react-icons/io5";
import twits from "../../../../assets/svg/twits.svg";
import linkd from "../../../../assets/svg/linkd.svg";
import noodles from "../../../../assets/images/noodles.png";
import story2 from "../../../../assets/images/image22.png";
import story3 from "../../../../assets/images/image24.png";
import { useNavigate, useParams } from "react-router-dom";
import BlogPlace from "../../BlogPlace/BlogPlace";
import Footer from "../../../Footer/Footer";
const VFirst = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);
  console.log("post :", post);

  const { id } = useParams();
  const blogId = parseInt(id);
  const navigate = useNavigate();

  const data = [
    {
      id: 15,
      image: image7,
      p1: "Our Vendor App Got an Upgrade!",
      d1: " Vendors, explore the array of new features we've recently introduced, and enhance your Chowdeck experience with all the ...",
      btn: "Read More",
    },
    {
      id: 16,
      image: story2,
      p1: "Get It Here: Jollof Rice",
      d1: "Craving a particular meal and have no clue what restaurant to order from? In Get It..",
      btn: "Read More",
    },
    {
      id: 17,
      image: story3,
      p1: "Comfort Extended with Eden Life",
      d1: "Chowdeck and Eden Life have partnered to provide extended comfort to our beloved Chowstars with ease.",
      btn: "Read More",
    },
  ];

  useEffect(() => {
    const url =
      "https://chowdeck.com/_next/data/TlbYud3iKeJnL9kbWQRhC/blog/chowdeck-vendor-app-gets-an-upgrade.json?slug=chowdeck-vendor-app-gets-an-upgrade";

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network Error");
        return response.json();
      })
      .then((data) => {
        setPost([data]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  //   useEffect(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, []);

  const handleClick = (id) => {
    navigate(`/blog/all/${id}`);
  };

  //   const data1 = [
  //     {
  //       para: "We're excited to announce that Chowdeck has been accepted to Y Combinator’s Summer Batch 2022, joining a league of extraordinary companies like Stripe, Airbnb, Paystack, and more, who’ve been through the YC process.",
  //     },

  //     {
  //       para: "This year, the batch was super selective, with roughly 1.2% of companies accepted out of 19 000; we do not take Chowdeck’s place in this cohort for granted. Over the next couple of weeks, we’ll be learning everything it takes to be better entrepreneurs and to serve our customers better. ",
  //     },
  //   ];
  //   const data2 = [
  //     {
  //       heading: "Running a business is both hard and rewarding",
  //     },
  //     {
  //       para: "As first-time founders, my co-founders and I are learning to embrace the highs and lows of building a product and are now at a stage where it’s critical for us to get better at being entrepreneurs.",
  //     },
  //     {
  //       para: "As part of the 2022 Summer cohort, we’ll be working hard over the next couple of weeks to learn everything it takes to serve you and get you your meals even faster ",
  //     },

  //     {
  //       heading1: "We’re not perfect, but we promise to always do better",
  //     },
  //     {
  //       newpara:
  //         "With every growth stage comes new kinds of challenges. It’ll be dishonest to not acknowledge the times we stepped on your toes by messing up your deliveries. Sincerely, we apologise. There are no excuses, and so we promise to do better.",
  //     },
  //     {
  //       newpara:
  //         "Your constant feedback has gotten us this far, but there’s so much more to do.",
  //     },
  //     {
  //       newpara:
  //         "If there are issues you currently experience while using Chowdeck, you can always email us via our contact page. We are constantly improving the experience of our products and your feedback will be critical in helping us get our priorities right.",
  //     },
  //     {
  //       minipara: "Thank you for being here. ",
  //     },
  //   ];

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
            <div className="text-center text-white text-[18px] uppercase font-bold">
              {post.map((item, index) => (
                <div key={index}>
                  <p>{item?.pageProps?.data?.title}</p>
                </div>
              ))}
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
            {post.map((item, index) => (
              <div
                key={index}
                className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-0 pt-4"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.pageProps?.data?.body,
                  }}
                />
              </div>
            ))}
            {/* {data1.map((item, index) => (
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
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 -mt-4.5 md:pb-0 pb-7">
                  {item.end1}
                </p>
              </div>
            ))} */}
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

export default VFirst;
