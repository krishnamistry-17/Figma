import React, { useEffect, useState } from "react";

import image7 from "../../../../assets/images/image7.png";
import image8 from "../../../../assets/images/image8.png";
import image10 from "../../../../assets/images/image10.png";
import image11 from "../../../../assets/images/image11.png";
import image12 from "../../../../assets/images/image12.png";
import image16 from "../../../../assets/images/image16.png";

import { useNavigate, useParams } from "react-router-dom";

const All = () => {
  const data = [
    {
      id: 0,
      image: image7,
      p1: "Chowdeck is Now in Ghana — Here’s What We Have in Store",
      d1: " After months of planning, training, and listening, we’re excited to officially launch Chowdeck in Ghana!",
      btn: "Read More",
    },
    {
      id: 1,
      image: image8,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      id: 2,
      image: image16,
      p1: "Get Free Deliveries and Reduced Service Fees with Chowpass!",
      d1: " What if we told you there’s a way to save on delivery fees, service charges, and surge fees? It's called Chowpass!",
      btn: "Read More",
    },
    {
      id: 3,
      image: image10,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      id: 4,
      image: image11,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
    {
      id: 5,
      image: image12,
      p1: "#AcceleratingYou: Celebrating Women-Led Brands in the Chowdeck Ecosystem",
      d1: "The world flourishes when women lead. For International Women's Day, celebrates  brilliant women.",
      btn: "Read More",
    },
  ];

  const [selectBlogId, setSelectBlogId] = useState(null);
  console.log("selectBlogId :", selectBlogId);
  const [activeIndex, setActiveIndex] = useState();

  const id = useParams();
  const blogId = parseInt(id);

  const navigate = useNavigate();
  const selectedBlog = data.find((item) => item.id === selectBlogId);

  const handleClick = (id) => {
    navigate(`/blog/all/${id}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="flex justify-center sm:px-4">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full">
            {data.map((item) => (
              <div
                key={item.id}
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
                      className="font-medium text-[16px] rounded-xl text-[#0C513F] hover:bg-[#0C513F] cursor-pointer
                   hover:text-white px-15 py-3 bg-gray-200"
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
    </div>
  );
};

export default All;
