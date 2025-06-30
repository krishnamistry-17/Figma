import React, { useEffect, useState } from "react";

import image16 from "../../../../assets/images/image16.png";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const data = [
    {
      id: 18,
      image: image16,
      p1: "Introducing Relay by Chowdeck - A Game Changer for Logistics Nationwide!",
      d1: "We're thrilled to introduce you to Relay, here to help you send and receive packages with",
      btn: "Read More",
    },
  ];

  const [selectBlogId, setSelectBlogId] = useState();

  const id = useParams();
  const blogId = parseInt(id);

  const navigate = useNavigate();
  const selectedBlog = data.find((item) => item.id === selectBlogId);

  const handleClick = (id) => {
    navigate(`/blog/Product/${id}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
                    className="font-medium text-[16px] rounded-xl text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-10 py-3 bg-gray-200"
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

export default Product;
