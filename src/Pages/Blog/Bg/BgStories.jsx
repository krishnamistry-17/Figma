import React, { useEffect, useRef, useState } from "react";

import story1 from "../../../assets/images/image16.png";
import story2 from "../../../assets/images/rstory2.png";
import story3 from "../../../assets/images/rstory3.png";
import { useNavigate } from "react-router-dom";

const BgStories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openIndexes, setOpenIndexes] = useState({});

  const [readmore, setReadMore] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const refpara = useRef(null);

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

  const limit = 50;

  useEffect(() => {
    if (refpara.current) {
      const isOverflowing =
        refpara.current.scrollHeight > refpara.current.clientHeight;
      setReadMore(isOverflowing);
    }
  }, []);

  const handleClick = (id) => {
    navigate(`/blog/all/${id}`);
  };

  return (
    <div>
      <div className="grid  gap-8 ">
        {data.map((item, index) => (
          <div key={index}>
            <div className="border-4 rounded-4xl border-black max-w-[360.33px] max-h-[446px] overflow-hidden">
              <img src={item.image} alt="s1" className=" overflow-hidden" />
              <p className="text-[14px] font-extrabold text-black pt-[16px] px-[20.6px] bg-white">
                {item.p1}
              </p>

              <p className="font-medium text-[18px] text-black pt-[19px]   text-center items-center px-[10px] bg-white">
                {item.d1}
              </p>

              <div className="pt-[21px] flex justify-center items-center bg-white mb-3">
                <button
                  className="font-medium text-[16px]
                 rounded-xl
                  text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-20 py-3 opacity/5 mb-3 bg-gray-200"
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
  );
};

export default BgStories;
