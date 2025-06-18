import React, { useState } from "react";
import down from "../../../assets/svg/down.svg";
import All from "./All/All";
import News from "./News/News";

const Categories = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { name: "All" },
    { name: "News" },
    { name: "Vendores" },
    { name: "Rider" },
    { name: "Product" },
    { name: "Operations" },
    { name: "Marketing" },
    { name: "Partnerships" },
    { name: "Try outs" },
    { name: "Get It Here" },
  ];

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSelectCategory = (index) => {
    setActiveIndex(index);
    setActiveTab(categories[index].name);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="py-20">
          <div
            className="flex items-center justify-between text-white rounded-r-xl rounded-l-xl bg-black py-5 px-10 cursor-pointer"
            onClick={handleToggle}
          >
            <span className="h-3 w-3 bg-[#ffc201] rounded-full"></span>
            <p className="pl-3 text-[16px]">
              Categoris: {categories[activeIndex]?.name}
            </p>
            <div className="flex justify-between pl-16">
              <p className="uppercase text-[16px] font-bold">s e l e c t</p>
              <img src={down} alt="down" className="pl-2" />
            </div>
          </div>

          {isMenuOpen && (
            <div className="block bg-black text-white mt-5 p-5 rounded-md max-w-xs">
              {categories.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectCategory(index)}
                  className="flex items-center cursor-pointer mb-3"
                >
                  {activeIndex === index ? (
                    <span className="h-3 w-3 bg-[#ffc301] rounded-full mr-2"></span>
                  ) : (
                    <span className="h-3 w-3 border border-[#ffc201] bg-black rounded-full mr-2"></span>
                  )}
                  <p className="text-[16px]">{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-10">
        {activeTab === "All" && <All />}
        {activeTab === "News" && <News />}
        {/* Add other components for other categories as needed */}
        {/* For categories without dedicated components, you can add fallback content here */}
      </div>
    </div>
  );
};

export default Categories;
