import React, { useEffect } from "react";
import rightcloud from "../../../../assets/svg/rightcloud.svg";
import bottom from "../../../../assets/images/bottom.png";
import vendore from "../../../../assets/images/vendore.png";
import limelight from "../../../../assets/images/limelight.png";
import feautures from "../../../../assets/images/feautures.png";
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

const VFirst = () => {
  const data1 = [
    {
      para: "Dear Vendors,",
    },
    {
      para1:
        "We're dedicated to ensuring your comfort, which is why we've revamped our user experience!",
    },
    {
      para2: [
        "Explore the array of new features we've recently introduced, and enhance your Chowdeck experience with all the latest enhancements",
        <br />,
        <strong>New App, Who This?</strong>,
        <br />,
        "We’ve overhauled our existing vendor dashboard for better usability, a smoother onboarding experience, and enhanced support for multiple vendors!",
      ],
    },
  ];
  const data2 = [
    {
      para: "Stay in the spotlight with our Feature section.",
    },
  ];
  const data3 = [
    {
      para1:
        "Your store has the opportunity to gain increased visibility by being spotlighted on our feature list for a small weekly fee! Through our feature list, you’ll stand out to our users, and attract more attention, leading to increased patronage and revenue.",
    },
    {
      contact: [
        "To get started, please contact ",
        <a className=" underline font-bold text-[#0c513f]">support.</a>,
        " ",
      ],
    },
    {
      heading: "Our Features are Your Features",
    },
    {
      para: "We want you to take full advantage of our customer features! We’ve listed some of our application features you can encourage your customers on Chowdeck to utilise!",
    },
  ];
  const data4 = [
    {
      para: "If you have any questions, encounter issues, or simply need assistance, our dedicated support team is here to help!",
    },
    {
      para: [
        "Feel free to reach out to us at ",
        <a className=" font-bold text-[#0c513f] underline">
          hello@chowdeck.com
        </a>,
        " and we’ll get back to you promptly.",
      ],
    },
    {
      para: "Thank you for choosing Chowdeck!",
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
                Our Vendor App Got an Upgrade!
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
              src={vendore}
              alt="vendr"
              className="w-full md:h-[375px] px-4"
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
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-4 ">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-4 ">
                  {item.para2}
                </p>
              </div>
            ))}
            <img
              src={vendore}
              alt="vndr"
              className="mt-5 max-w-full h-auto xl:px-12 px-3"
            />
            <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-4 pt-5">
              Our new dashboard will prioritise:
            </p>
            <ul className="list-disc list-inside px-3 sm:px-5 md:px-11 text-black">
              <li className="sm:text-[24px] text-[18px] pt-5">
                <b>Seamless Operations:</b> Simplify your daily tasks and
                operations using our enhanced, intuitive interface.
              </li>
              <li className="sm:text-[24px] text-[18px] pt-5">
                <b>Menu Customization:</b> Easily modify and personalize your
                menu items to maintain accuracy and keep your offerings current.
              </li>
              <li className="sm:text-[24px] text-[18px] pt-5">
                <b>Order Oversight:</b> Conveniently monitor orders by status
                and access detailed order information through our newly enhanced
                user interface.
              </li>
            </ul>

            <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5 md:pt-8 pt-4">
              Get On Our Feature List!
            </p>
            {data2.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-4">
                  {item.para}
                </p>
              </div>
            ))}
            <img
              src={limelight}
              alt="light"
              className="mt-5 w-full h-auto xl:px-12 px-3"
            />
            {data3.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 md:pt-4 pt-4">
                  {item.para1}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.contact}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black font-bold md:px-11 px-5  pt-4">
                  {item.heading}
                </p>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 ">
                  {item.para}
                </p>
              </div>
            ))}
            <img
              src={feautures}
              alt="fetrs"
              className="mt-5 w-full h-auto xl:px-12 px-3"
            />
            <ul className="list-disc list-inside px-3 sm:px-5 md:px-11 text-black">
              <li className="sm:text-[24px] text-[18px] pt-5">
                <b>Search and Filtering -</b> Your customers can search specific
                cuisines from your restaurant, making it easy for them to order
                from you!
              </li>
              <li className="sm:text-[24px] text-[18px] pt-5">
                <b>Gift Cards —</b> You can encourage your customers to purchase
                gift cards for each other, which can be used to order from you!
                Gift cards are perfect for holidays, birthdays, and
                celebrations. We have a massive selection of gift card designs,
                so no need to worry about what they look like! We’ve got you!
              </li>
              <li className="sm:text-[24px] text-[18px] pt-5">
                <b>Pay For Me — </b> Your customers can share links to their
                orders from your store for others to pay!
              </li>
            </ul>

            {data4.map((item, index) => (
              <div key={index}>
                <p className="sm:text-[24px] text-[18px] text-black md:px-11 px-5 pt-4">
                  {item.para}
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

export default VFirst;
