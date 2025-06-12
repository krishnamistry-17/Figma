import React, { useEffect, useRef, useState } from "react";
import noodles from "../../../assets/images/noodles.png";
import story1 from "../../../assets/images/st1.png";
import story2 from "../../../assets/images/story2.png";
import story3 from "../../../assets/images/story3.png";

const StoriesCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showreadMore, setShowReadMore] = useState(false);
  const [openIndexes, setOpenIndexes] = useState({});
  console.log("openIndexes :", openIndexes);
  const [readmore, setReadMore] = useState(false);

  const ref = useRef();
  const refpara = useRef(null);

  const data = [
    {
      image: story1,
      p1: "Chowdeck Joins Y Combinator's S'22 Batch",
      d1: " Chowdeck has been accepted to Y Combinator’s Summer Batch 2022,joining a league of companies that are dis...",
      btn: "Read More",
      btn1: "Read less",
      message:
        "shares his life-changing experience and most memorable delivery with Chowdeck",
    },
    {
      image: story2,
      p1: "Champions : Kingsley Agbinya",
      d1: " Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...",
      btn: "Read More",
      btn1: "Read less",
      message:
        "shares his life-changing experience and most memorable delivery with Chowdeck",
    },
    {
      image: story3,
      p1: "Champions : Anthony Agam",
      d1: " Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.",
      btn: "Read More",
      btn1: "Read less",
      message:
        "shares his life-changing experience and most memorable delivery with Chowdeck",
    },
  ];

  const limit = 100;

  useEffect(() => {
    if (refpara.current) {
      const isOverflowing =
        refpara.current.scrollHeight > refpara.current.clientHeight;
      setSeeMore(isOverflowing);
    }
  }, []);
  return (
    <div className="pt-[40px] pb-[144px]" ref={ref}>
      <div className="sm:flex gap-2.5 xl:pl-[96px] pl-[10px]">
        <p className="font-extrabold text-[63px] text-black py-[20.5px]">
          Stories
        </p>
        <img src={noodles} alt="ndls" />
      </div>
      <div className="pt-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:px-[96px] px-[20px]">
          {data.map((item, index) => (
            <div key={index}>
              <div className="border-4 rounded-md border-black max-w-[389.33px] max-h-[446px]">
                <img src={item.image} alt="s1" />
                <p className="text-[14px] font-extrabold text-black pt-[16px] px-[20.6px]">
                  {item.p1}
                </p>
                {openIndexes[index] ? (
                  <p className="font-medium text-[18px] text-black pt-[19px]   text-center items-center px-[10px]">
                    {item.message}
                  </p>
                ) : (
                  <p className="font-medium text-[18px] text-black pt-[19px]   text-center items-center px-[10px]">
                    {item.d1}
                  </p>
                )}

                <div className="pt-[31px] flex justify-center items-center">
                  <button
                    onClick={() =>
                      setOpenIndexes((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className="font-medium text-[16px] text-[#0C513F] hover:bg-[#0C513F] pb-[29px]"
                  >
                    {openIndexes[index] ? "Read less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
