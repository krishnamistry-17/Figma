import React from "react";
import press1 from "../../../assets/images/press1.png";
import press2 from "../../../assets/images/press2.png";
import press3 from "../../../assets/images/press3.png";
import press from "../../../assets/svg/press.svg";
const Press = () => {
  const data = [
    {
      heading: "Our 11 favorite companies from YC ‘s S22 Demo Day: Part 1",
      image: press1,
      art: " view article",
      artimage: press,
    },
    {
      heading:
        "Hungry? Here Are the Top 5 Food Delivery Apps to Download Today",
      image: press2,
      art: " view article",
      artimage: press,
    },
    {
      heading:
        "Introducing Chowdeck, the Fastest Way to Deliver Food Anywhere in Africa",
      image: press3,
      art: " view article",
      artimage: press,
    },
    {
      heading: "App review: Chowdeck, Konga food, Gokada food, Bolt food",
      image: press1,
      art: " view article",
      artimage: press,
    },
    {
      heading:
        "Tech Cabal: Chowdeck Announces Chicken Republic’s Integration Into Its Ecosystem as a New Restaurant Partner.",
      image: press2,
      art: " view article",
      artimage: press,
    },
    {
      heading:
        "Zikoko: Chowdeck Announces Chicken Republic’s Integration Into Its Ecosystem as a New Restaurant Partner",
      image: press3,
      art: " view article",
      artimage: press,
    },
    {
      heading: "How YC-backed Chowdeck hit ₦1 billion in monthly order value",
      image: press1,
      art: " view article",
      artimage: press,
    },
    {
      heading:
        "Chowdeck Welcomes Eat N’ Go’s Cold Stone Creamery, Pinkberry Yoghurt as Newest Restaurant Partners",
      image: press2,
      art: " view article",
      artimage: press,
    },
    {
      heading:
        "So Fresh partners Chowdeck to amplify access to healthy food in Nigeria",
      image: press3,
      art: " view article",
      artimage: press,
    },
    {
      heading:
        " Running a food-delivery service in Nigeria is hard; Chowdeck makes it look easy",
      image: press1,
      art: " view article",
      artimage: press,
    },
  ];
  return (
    <div className="mt-40 mb-56 md:mb-72">
      <div className="xl:px-28 md:px-9 px-4">
        <h2 className=" text-black font-bold text-[64px] border-b border-black pb-2">
          Press
        </h2>
        {data.map((item, index) => (
          <div key={index}>
            <div className=" flex justify-between items-center py-4 border-b border-black">
              <div>
                <h2 className=" lg:text-[24px] text-[16px] font-medium text-black lg:max-w-xl md:max-w-sm max-w-[170px]">
                  {item.heading}
                </h2>
              </div>
              <div>
                <img
                  src={item.image}
                  alt="p1"
                  className="md:w-12 md:h-12 w-8 h-8 sm:pr-0 pr-1.5"
                />
              </div>
              <div>
                <a
                  href=""
                  className=" col-span-2 lg:col-span-1 flex justify-end items-center uppercase font-bold 
                  sm:text-[15px] text-[12px] text-black sm:space-x-2 hover:underline"
                >
                  {item.art}
                  <img src={item.artimage} alt="prs" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Press;
