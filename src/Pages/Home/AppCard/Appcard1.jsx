import roundapp from "../../../assets/svg/roundapp.svg";
import roundplay from "../../../assets/svg/roundplay.svg";
import pastry from "../../../assets/svg/pastry.svg";
import mobile from "../../../assets/images/mobile.png";

const Appcard1 = () => {
  return (
    <div>
      <div>
        <p className="font-extrabold md:text-[59px] text-[39px] pt-[48px] text-black text-center">
          All in One
        </p>
        <div className="flex justify-center items-center">
          <p className="md:text-[20px] text-[17px]  text-black py-[18px] text-center max-w-[530px]">
            Unlock new levels of growth with seamless menu and orders
            management, multiple branches and team, easy payouts withdrawal and
            a lot more.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 pt-[24px]">
        <img src={roundplay} alt="rp" />
        <img src={roundapp} alt="ra" />
      </div>

      <div className="flex justify-center items-center relative pt-[40px] sm:pt-[64px] px-4">
        {/* Phone Image */}
        <img src={mobile} alt="phn" className="w-4/5 sm:w-auto" />

        {/* Pastry */}
        <div className="absolute top-0 sm:right-[3%] right-[8%] sm:top-3.5 md:right-[7.33%] lg:right-[10.33%] z-50">
          <img src={pastry} alt="pt" className="w-20 sm:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Appcard1;
