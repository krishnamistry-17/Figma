import React, { useState } from "react";

import story1 from "../../../../assets/images/st1.png";
import story2 from "../../../../assets/images/story2.png";
import story3 from "../../../../assets/images/story3.png";
import { useNavigate, useParams } from "react-router-dom";

const Riders = () => {
  const data = [
    {
      id: 12,
      image: story1,
      p1: "Chowdeck Joins Y Combinator's S'22 Batch",
      d1: " Chowdeck has been accepted to Y Combinator’s Summer Batch 2022, joining a league of companies that are dis...",
      btn: "Read More",
    },
    {
      id: 13,
      image: story2,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      id: 14,
      image: story3,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
  ];

  const [selectBlogId, setSelectBlogId] = useState();

  const id = useParams();
  const blogId = parseInt(id);

  const navigate = useNavigate();
  const selectedBlog = data.find((item) => item.id === selectBlogId);

  const handleClick = (id) => {
    navigate(`/blog/Rider/${id}`);
  };
  return (
    <div>
      <div className="flex justify-center sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-full w-[400px] flex justify-center"
            >
              <div className="border-4 rounded-4xl border-black overflow-hidden max-w-[400px] w-full">
                <img
                  src={item.image}
                  alt="s1"
                  className="w-full h-auto object-cover"
                />
                <p className="text-[14px] font-extrabold text-black pt-4 px-5 bg-white">
                  {item.p1}
                </p>

                <p className="font-medium text-[18px] text-black pt-5 text-center px-3 bg-white">
                  {item.d1}
                </p>

                <div className="pt-5 flex justify-center items-center bg-white mb-3">
                  <button
                    className="font-medium text-[16px] rounded-xl text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-15 py-3 bg-gray-200"
                    onClick={() => handleClick(item.id)}
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
  );
};

export default Riders;
