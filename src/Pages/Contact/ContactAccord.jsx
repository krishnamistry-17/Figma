import React, { useState } from "react";
import ystar2 from "../../assets/svg/ystar2.svg";
import bstar from "../../assets/svg/bstar.svg";

const ContactAccord = () => {
  const items = [
    {
      ques: " What is Chowdeck?",
      ans: "Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
    },
    {
      ques: "How do I sign up as a vendor on Chowdeck?",
      ans: "Go to Playstore or App Store on your phone, search for Chowdeck Vendore  and download the app. Create an account in minutes by entering your personal and business details, set up your restaurant with menu items and prices, opening and closing times, average preparation time, tags and pictures. Our restaurant team will review and send a required agreement to be signed before you're fully live on the app. ",
    },
    {
      ques: "How do I create an account on Chowdeck?",
      ans: "Go to Playstore or App Store on your phone, search for Chowdeck and download the app. Create an account in seconds by entering your details and verifying your phone number and email address.  ",
    },
    {
      ques: " What is Chowdeck wallet?",
      ans: "Chowdeck wallet is a safe feature on the app where you can put in money for later use. The money in the Chowdeck wallet can be used to make payments for orders placed on the app. When an order gets rejected due to various reasons, the payment made initially when the order was placed automatically goes into your Chowdeck wallet which is accessible to make payments for future orders. You can always request a withdrawal to your local account. ",
    },
    {
      ques: "  What is Chowscore?",
      ans: "Chowscore indicates how active you are on Chowdeck as a customer. This works by combining all your overall activities on the app from the day you signed up till date and rewarding you points for it. You get points for ordering meals, rating and reviewing restaurants, rating riders and referring the app to friends. Rack up more points to move tiers and enjoy exclusive discounts and free delivery on orders.",
    },
    {
      ques: " What is Service fee?",
      ans: "The service fee is a consumer fee that appears on the price breakdown at checkout on the Chowdeck app. Unlike other consumer fees, the service fee depends on your order’s subtotal, that is, a percentage of your bill excluding the delivery fee. We understand the service fee increases as the order amount increases, so we’ve capped it to prevent it from getting too excessive. It also does not apply to all restaurants on our platform.",
    },
    {
      ques: "Why do we charge Service fee?",
      ans: "Chowdeck555 is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
    },
    {
      ques: " What is Surge fee?",
      ans: "Chowdeck6666 is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq">
      <div className="lg:px-[90px] px-[10px]  md:pt-[143px] pt-[219px]">
        <div className="border-4 border-black bg-white rounded-xl">
          <div className="lg:px-[36px] pt-[36px] pb-[28px]">
            <div className="lg:flex lg:gap-8">
              <div className="flex-1">
                <h2 className="font-extrabold text-[63px] text-[#0C513F]">
                  FAQs.
                </h2>
                {items.map((item, index) => (
                  <div key={index} onClick={() => setActiveIndex(index)}>
                    <div className="flex-col pt-[40px]">
                      <div
                        className={`
                      ${
                        activeIndex === index
                          ? "flex justify-between items-center cursor-pointer bg-black text-white rounded-md"
                          : "flex justify-between items-center bg-white text-[#0C513F] rounded-md"
                      }
                      `}
                      >
                        <p className="font-extrabold text-[18px] pt-[20px] pb-[22px] pl-[21px] ">
                          {item.ques}
                        </p>
                        {activeIndex === index && (
                          <img
                            src={ystar2}
                            alt="ys2"
                            className="py-[23px] pr-[23px] "
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                <h2 className="font-extrabold text-[63px] text-[#0C513F]">
                  Ans.
                </h2>
                <div className="pt-[40px]">
                  <div className="bg-[#FFC501] rounded-md pb-[320px]">
                    <img src={bstar} alt="bs" className="pt-[32px] pl-[32px]" />
                    <p className="text-[24px] text-black pt-[32px] px-[33px] ">
                      {items[activeIndex].ans}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAccord;
