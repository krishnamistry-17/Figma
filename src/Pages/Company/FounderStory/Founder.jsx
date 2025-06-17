import React from "react";
import ceo from "../../../assets/images/ceo.png";
import hoaq from "../../../assets/images/hoaq.png";
import yc from "../../../assets/images/yc.png";
import bike from "../../../assets/svg/bike.svg";
import trees from "../../../assets/svg/trees.svg";
const Founder = () => {
  const data = [
    {
      para: " I tested positive for COVID on the 31st of December, 2020. Theresult came in very late at night and I couldn’t travel home. Ispent the entire January 1 looking for food vendors to deliver foodto me but the available food delivery providers didn’t deliverduring public holidays. I eventually found one after so many hoursand ended up paying 4x the regular amount.",
    },
    {
      para: "During my 14- day isolation, I realised no one was really looking into the logistics problem with the care and attention I would have wished for. I started asking questions; most answers ended with “dispatch riders are not reliable”, then I made a lot of research and discovered delivery companies in countries like India made millions of deliveries daily. No one comes close locally and it didn’t make sense that at such a small scale, we Africans couldn’t figure it out.",
    },
    {
      para: " We initially approached the problem from a technical standpoint then realised the problem was more operations than tech and we needed to deconstruct operations before trying again. We went back to first principles to figure this out. We pulled funds from our pockets, got three bikes and riders - gave two of them to Korede Spaghetti and one of them to NiFries. We held meetings weekly with our riders and that gave us so much insight we needed.",
    },
    {
      para: "With a better understanding of what we believed the problem was, we knew our solution had to be efficient and easy to use. This was hard to pull as we struggled with iterations before settling with one. It was a lot harder building the product as we had to ensure equal dedication to all channels (riders, restaurants and customers)",
    },
    {
      para: " We pulled our tech force and built the first version of the app in 3 weeks and launched public beta in October. Since then, it’s been an interesting journey learning and building for our customers.",
    },
  ];
  return (
    <div className="xl:px-[80px] px-[20px]">
      <div className=" ">
        <div className=" overflow-x-hidden overflow-y-hidden">
          <div className=" flex items-end -mb-0.5">
            <img
              src={bike}
              alt="bike"
              className=" ml-10 w-[40px] md:w-[130px]"
            />
            <img
              src={trees}
              alt="tress"
              className="w-[200px] lg:w-[700px] md:w-[600px] ml-auto"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 border-4 border-black rounded-2xl overflow-hidden">
        <div className=" col-span-2 border-r-4 border-b-0">
          <div className="bg-[#0c513f] flex pl-3 gap-2 p-[10px]">
            <p className=" bg-[#ffc501] border-black border-4 h-5 w-5 rounded-full ml-2 mt-3"></p>
            <span className="text-white font-bold text-[30px] pl-2">
              Founder’s Story
            </span>
          </div>

          <div className="col-span-3 lg:col-span-5 bg-white flex flex-col items-center pt-6">
            <div className="relative w-full h-[300px] md:w-[277px] md:h-[450px] lg:w-full mb-6 bg-gray-100 flex justify-center items-center overflow-hidden">
              <img
                src={ceo}
                alt="ceo"
                className="object-contain w-full h-full max-w-[100%] max-h-[100%]"
              />
            </div>
            <span className="text-[20px] md:text-[24px] text-black text-center">
              Babafemi Aluko
            </span>
            <span className="text-[#02513f] text-[12px] md:text-[14px] tracking-[2px] md:tracking-[3px] font-bold uppercase text-center">
              ceo / co-founder
            </span>
          </div>
        </div>
        <div className=" col-span-3 h-auto px-14 py-10 bg-white ">
          {data.map((item, index) => (
            <div key={index}>
              <p className="text-black text-[20px] pt-3">{item.para}</p>
            </div>
          ))}
        </div>

        <div className=" col-span-5 flex flex-col items-center justify-center border-t-4 p-10">
          <span className=" mb-6 text-[16px] uppercase text-black font-bold">
            backed by
          </span>
          <span className="md:flex gap-1.5">
            <img src={yc} alt="yc" className="w-[150px]" />
            <img src={hoaq} alt="hoaq" className="w-[150px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Founder;
