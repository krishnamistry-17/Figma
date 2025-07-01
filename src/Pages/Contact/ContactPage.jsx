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
  const [activeIndex, setActiveIndex] = useState(2);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelecteCategory = (index) => {
    setIsMenuOpen(false);
    setActiveIndex(index);
  };

  return (
    <div className="xl:px-40 md:px-10 px-1 bg-white mb-40 mt-10">
      <div className=" border-4 border-black rounded-3xl bg-white p-6 md:p-10 lg:p-16">
        <div className=" flex justify-between items-center mb-10">
          <div>
            <p className="sm:text-[48px] text-[30px] text-black font-bold">
              Email Us
            </p>
          </div>
          <div>
            <img src={hap} alt="hp" />
          </div>
        </div>
        <div className=" lg:flex justify-between items-center gap-5 mb-4 ">
          <div className="flex bg-gray-200 gap-2 py-5 px-5 w-full rounded-lg text-black">
            <span>
              <img src={user} alt="user" className="mt-1" />
            </span>
            <input
              type="text"
              placeholder="Your Name"
              className="text-black font-medium text-[18px] focus:outline-none focus:ring-0 placeholder:text-black"
            />
          </div>
          <div className="flex bg-gray-200 gap-2 py-5 px-5 w-full lg:mt-0 mt-3 rounded-lg text-black">
            <span>
              <img src={email} alt="email" className="mt-1" />
            </span>
            <input
              type="text"
              placeholder="Your Email Address"
              className="text-black font-medium text-[18px] focus:outline-none focus:ring-0 placeholder:text-black"
            />
          </div>
          <div className="flex bg-gray-200 gap-2 py-5 px-5 w-full lg:mt-0 mt-3 rounded-lg text-black">
            <span>
              <img src={contact} alt="contact" className="mt-1" />
            </span>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="text-black font-medium text-[18px] focus:outline-none focus:ring-0 placeholder:text-black"
            />
          </div>
        </div>
        {/* <div
          className="flex justify-between items-center
         bg-black w-full rounded-lg text-white py-5 md:px-10 px-3 cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex">
            <span className="h-3 w-3 bg-[#ffc201] rounded-full mt-1.5"></span>
            <p className="sm:pl-3 pl-1 sm:text-[16px] text-[13px]">
              {data[activeIndex].head}
            </p>
          </div>
          <div className="flex justify-between sm:pl-16">
            <p className="uppercase md:text-[16px] text-[12px] font-bold">
              s e l e c t
            </p>
            <img src={down} alt="down" className="pl-2" />
          </div>
        </div> */}
        <div
          className="flex items-center justify-between text-white 
    rounded-xl bg-black py-4 sm:px-10 px-4 cursor-pointer max-w-2xl w-full flex-wrap gap-y-2"
          onClick={handleToggle}
        >
          <div className="flex">
            {/* Dot */}
            <p className="h-3 w-3 p-1 bg-[#ffc201]  rounded-full mt-1 mr-2" />
            {/* Category Text */}
            <p className=" text-[13px] sm:text-[16px] truncate md:max-w-full max-w-[60%]">
              {data[activeIndex].head}
            </p>
          </div>
          {/* Right-side SELECT + arrow */}
          <div className="flex items-center pl-3 sm:pl-16">
            <p className="uppercase text-[13px] sm:text-[16px] font-bold">
              s e l e c t
            </p>
            <img src={down} alt="down" className="pl-2 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-0.5">
            <div className=" bg-black text-white w-full py-5 px-10 rounded-lg max-w-2xl">
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
          <textarea
            rows={7}
            placeholder="Type a Message..."
            className="bg-gray-100 w-full placeholder:text-black p-5 focus:outline-none focus:ring-0"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-[#0C513F] text-white py-4 px-7 rounded-md"
          >
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
