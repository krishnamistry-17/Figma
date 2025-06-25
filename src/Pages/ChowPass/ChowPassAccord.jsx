import React, { useEffect, useState } from "react";
import ystar2 from "../../assets/svg/puspan.svg";
import whstar from "../../assets/svg/whstar.svg";
import { useLocation } from "react-router-dom";

const ChowPassAccord = () => {
  const items = [
    {
      ques: " What is Chowpass?",
      ans: "Chowpass is a membership subscription program for customers that offers free deliveries, reduced service fees, and no surge fees on orders from selected vendors.",
    },
    {
      ques: "How do I use Chowpass?",
      ans: "Once you're subscribed, all Chowpass vendors are marked with a Chowpass badge and free delivery tag. You can add to your cart and proceed to checkout after meeting the minimum order amount to enjoy your benefits as you place the order. If the Chowpass subtotal order minimum was not met, the difference to reach the Chowpass minimum will be displayed on the menu listing page. Chowpass savings will also be displayed on the checkout page as well. ",
    },
    {
      ques: "Why did my Chowpass benefits not apply to my order?",
      ans: "If you are a Chowpass subscriber but your order does not meet the minimum basket subtotal, your Chowpass benefits will not apply. Additionally, to make sure your order is eligible, look for the Chowpass badge and free delivery tag under the vendor’s name. In order to make sure benefits are applied correctly please follow these steps:Check the Chowdeck app or vendors near you that have the Chowpass badge. Enjoy 0 delivery fees and lower service fees on orders over the minimum order amount (N3,000). ",
    },
    {
      ques: " How can I subscribe to Chowpass?",
      ans: "If you have sufficient funds in your Chowdeck wallet, you can use their wallet funds to pay for the first subscription. All you have to do is confirm the payment, and the wallet balance is deducted and selected as the default payment method for automatic billing. You can also pay with your card by adding a new card or selecting a saved card for automatic billing. ",
    },
    {
      ques: " Can I manage my Chowpass subscription? ",
      ans: "You can manage and upgrade your subscription on the dedicated Chowpass page, which can be found on your Profile.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faqs") {
      const el = document.getElementById("faqs");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="faqs">
      <div className="lg:px-[90px] px-[17px]  md:pt-[143px] pt-[219px]">
        <div className="border-4 border-black bg-white rounded-xl">
          <div className="lg:px-[36px] px-2 pt-[36px] pb-[0px]">
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
                        <p className="font-extrabold text-[18px] pt-[14px] pb-[7px] pl-[21px] ">
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
                  <div className="bg-[#8c77ec] rounded-md pb-[320px]">
                    <img
                      src={whstar}
                      alt="bs"
                      className="pt-[32px] pl-[32px]"
                    />
                    <p className="text-[24px] text-white pt-[32px] px-[33px] ">
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

export default ChowPassAccord;
