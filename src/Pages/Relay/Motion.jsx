import React from "react";
import thunder1 from "../../assets/svg/thunder1.svg";
import stack1 from "../../assets/svg/stack1.svg";
import stack2 from "../../assets/svg/stack2.svg";
import stack3 from "../../assets/svg/stack3.svg";
import reciver from "../../assets/svg/reciver.svg";
import giver from "../../assets/svg/giver.svg";
import relayplay from "../../assets/svg/relayplay.svg";
import relayapp from "../../assets/svg/relayapp.svg";

import { motion } from "framer-motion";

const stackVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: i === 0 ? 7.9998 : i === 1 ? -8 : 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Need = () => {
  return (
    <div>
      {/* Hero image */}
      <img
        src={thunder1}
        alt="t1"
        className="w-full lg:-mb-[94px] md:-mb-[74px] -mb-[22px]"
      />

      {/* Section */}
      <div className="bg-[#990038] relative overflow-hidden">
        <div>
          <h2 className="md:text-[70px] text-[50px] text-[#ffb3ce] md:pt-56 pt-20 text-center font-bold">
            You need it?
          </h2>
          <p className="md:text-[76px] text-[54px] text-white pt-0 text-center font-bold">
            We’ll bring it!
          </p>
        </div>

        {/*  Stack Card Animation */}
        <div className="flex flex-col relative z-30 justify-center items-center my-[50px] min-h-[500px]">
          {[stack1, stack2, stack3].map((src, i) => (
            <motion.div
              key={i}
              className="absolute w-[80%] h-full"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stackVariants}
            >
              <div className="absolute w-full h-full overflow-hidden">
                <img
                  src={src}
                  alt={`stack-${i}`}
                  className="absolute w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="container mx-auto">
          <div className="relative z-50 flex space-x-2 justify-center items-center">
            <a
              href="#"
              className="flex h-[44px] w-[44px] lg:h-[56px] lg:w-[56px] rounded-full items-center justify-center bg-[#ffb3ce]"
            >
              <img src={relayplay} alt="relay play" />
            </a>
            <a
              href="#"
              className="flex h-[44px] w-[44px] lg:h-[56px] lg:w-[56px] rounded-full items-center justify-center bg-[#ffb3ce]"
            >
              <img
                src={relayapp}
                alt="relay app"
                className="h-[29px] w-[37px]"
              />
            </a>
          </div>
        </div>

        {/* Side images */}
        <span className="block absolute z-20 -left-16 top-[40%] h-full w-[60%]">
          <span className="absolute w-full h-full overflow-hidden">
            <img
              src={reciver}
              alt="receiver"
              className="absolute w-full h-full object-contain"
            />
          </span>
        </span>
        <span className="block absolute right-0 top-[58%] h-full w-[80%]">
          <span className="absolute w-full h-full overflow-hidden">
            <img
              src={giver}
              alt="giver"
              className="absolute w-full h-full object-contain"
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Need;
