import React, { useState } from "react";
import down from "../../../assets/svg/down.svg";
import All from "./All/All";
import News from "./News/News";
import Riders from "./Riders/Riders";
import Vendores from "./Vendores/Vendores";
import Product from "./Product/Product";
import Operations from "./Operaions/Operations";
import Marketing from "./Marketing/Marketing";
import Partnerships from "./Partnerships/Partnerships";
import Tryouts from "./Try Outs/Tryouts";
import GetIt from "./GetIt/GetIt";

const Categories = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { name: "All" },
    { name: "News" },
    { name: "Rider" },
    { name: "Vendores" },
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
            className="flex items-center justify-between text-white 
    rounded-xl bg-black py-4 sm:px-10 px-4 cursor-pointer md:max-w-4xl max-w-2xl w-full flex-wrap gap-y-2"
            onClick={handleToggle}
          >
            <span className="h-3 w-3 bg-[#ffc201] rounded-full" />

            <p className="pl-3 text-[14px] sm:text-[16px] truncate max-w-[60%]">
              Categories: {categories[activeIndex]?.name}
            </p>

            <div className="flex items-center pl-3 sm:pl-16">
              <p className="uppercase text-[14px] sm:text-[16px] font-bold">
                s e l e c t
              </p>
              <img
                src={down}
                alt="down"
                className="pl-2 w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
          </div>

          {isMenuOpen && (
            <div className="block bg-black text-white mt-5 p-5 rounded-md max-w-4xl md:max-w-2xl">
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
                  <p className="text-[16px]">Categories: {item.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-10">
        {activeTab === "All" && <All />}
        {activeTab === "News" && <News />}
        {activeTab === "Rider" && <Riders />}
        {activeTab === "Vendores" && <Vendores />}
        {activeTab === "Product" && <Product />}
        {activeTab === "Operations" && <Operations />}
        {activeTab === "Marketing" && <Marketing />}
        {activeTab === "Partnerships" && <Partnerships />}
        {activeTab === "Try outs" && <Tryouts />}
        {activeTab === "Get It Here" && <GetIt />}
      </div>
    </div>
  );
};

export default Categories;
