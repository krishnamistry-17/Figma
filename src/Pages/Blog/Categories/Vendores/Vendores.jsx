import React from "react";

import image7 from "../../../../assets/images/image17.png";
import story2 from "../../../../assets/images/image22.png";
import story3 from "../../../../assets/images/image24.png";

const Vendores = () => {
  const data = [
    {
      image: image7,
      p1: "Our Vendor App Got an Upgrade!",
      d1: " Vendors, explore the array of new features we've recently introduced, and enhance your Chowdeck experience with all the ...",
      btn: "Read More",
    },
    {
      image: story2,
      p1: "Get It Here: Jollof Rice",
      d1: "Craving a particular meal and have no clue what restaurant to order from? In Get It..",
      btn: "Read More",
    },
    {
      image: story3,
      p1: "Comfort Extended with Eden Life",
      d1: "Chowdeck and Eden Life have partnered to provide extended comfort to our beloved Chowstars with ease.",
      btn: "Read More",
    },
  ];

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
                  <button className="font-medium text-[16px] rounded-xl text-[#0C513F] hover:bg-[#0C513F] hover:text-white px-10 py-3 bg-gray-200">
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

export default Vendores;
