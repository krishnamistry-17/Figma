import React, { useState } from "react";
import hap from "../../assets/svg/happiness.svg";
import user from "../../assets/svg/user.svg";
import email from "../../assets/svg/email.svg";
import contact from "../../assets/svg/contact.svg";
import down from "../../assets/svg/down.svg";

const ContactPage = () => {
  const data = [
    {
      head: "Deliveries / My Order",
    },
    {
      head: "Product / Features / Bugs",
    },
    {
      head: "Partnerships / Marketing / Business",
    },
    {
      head: "Operations / Riders / Vendors",
    },
    {
      head: "General Enquiries",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelecteCategory = (index) => {
    setIsMenuOpen(false);
    setActiveIndex(index);
  };

  return (
    <div className="xl:px-40 bg-white">
      <div className=" border-4 border-black rounded-3xl bg-white p-6 md:p-10 lg:p-16">
        <div className=" flex justify-between items-center mb-10">
          <div>
            <p className=" text-[48px] text-black font-bold">Email Us</p>
          </div>
          <div>
            <img src={hap} alt="hp" />
          </div>
        </div>

        <div className=" flex justify-between items-center gap-5 mb-4 ">
          <div className="flex bg-gray-200 gap-2 py-5 px-5 w-full rounded-lg text-black">
            <span>
              <img src={user} alt="user" className="mt-1" />
            </span>
            <input
              type="text"
              placeholder="Your Name"
              className="text-black font-medium text-[18px] focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex bg-gray-200 gap-2 py-5 px-5 w-full rounded-lg text-black">
            <span>
              <img src={email} alt="email" className="mt-1" />
            </span>
            <input
              type="text"
              placeholder="Your Email Address"
              className="text-black font-medium text-[18px] focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex bg-gray-200 gap-2 py-5 px-5 w-full rounded-lg text-black">
            <span>
              <img src={contact} alt="contact" className="mt-1" />
            </span>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="text-black font-medium text-[18px] focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div
          className=" flex justify-between items-center
         bg-black w-full rounded-lg text-white py-5 px-10"
          onClick={handleToggle}
        >
          <div className="flex">
            <span className="h-3 w-3 bg-[#ffc201] rounded-full mt-1.5"></span>
            <p className="pl-3 sm:text-[16px] text-[14px]">
              {data[activeIndex].head}
            </p>
          </div>
          <div className="flex justify-between pl-16">
            <p className="uppercase sm:text-[16px] text-[14px] font-bold">
              s e l e c t
            </p>
            <img src={down} alt="down" className="pl-2" />
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-0.5">
            <div className=" bg-black text-white w-full py-5 px-10 rounded-lg">
              {data.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelecteCategory(index)}
                  className="flex items-center cursor-pointer mb-3"
                >
                  {activeIndex === index ? (
                    <span className="h-3 w-3 bg-[#ffc201] rounded-full mr-2 "></span>
                  ) : (
                    <span className="h-3 w-3 border border-[#ffc201]  rounded-full mr-2"></span>
                  )}
                  <p className="text-[14px] sm:text-[16px]">{item.head}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4  ">
          <textarea name="" id=""></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
