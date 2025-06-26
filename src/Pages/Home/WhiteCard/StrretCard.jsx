import React from "react";
import span from "../../../assets/svg/pspan.svg";
import pigon from "../../../assets/svg/pigon.svg";
import bpigon from "../../../assets/svg/bpigon.svg";
import user1 from "../../../assets/svg/user1.svg";
import user2 from "../../../assets/svg/user2.svg";
import user3 from "../../../assets/svg/user3.svg";
import user4 from "../../../assets/svg/user4.svg";
import user5 from "../../../assets/svg/user5.svg";
import user6 from "../../../assets/svg/user6.svg";
import user7 from "../../../assets/svg/user7.svg";
import user8 from "../../../assets/svg/user8.svg";

const StrretCard = () => {
  return (
    <div className="pt-[128px]">
      <div className="flex justify-center items-center">
        <button className="font-extrabold text-black text-[28px] flex py-[14px] pr-[14px] bg-[#FFF3CC] border-4 border-black rounded-md">
          <img src={span} alt="sn" className="pl-[15px] pr-[11px]" />
          Street Cred
        </button>
      </div>
      <div className="flex justify-center items-center pt-[24px]">
        <button className="font-medium text-[16px] text-white bg-[#1DA1F2] flex text-center py-[16px] px-[22px] rounded-md">
          <img src={pigon} alt="pgn" className="pr-[5px]" />
          Join our community
        </button>
      </div>
      <div>
        <div className="py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/*grid1*/}
            <div className="xl:pt-[56px]">
              {/*card1*/}
              <div className="border border-[#E5E7EB] rounded-md">
                <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                  <div className="flex gap-2">
                    <img src={user1} alt="u1" />
                    <div>
                      <p className="font-extrabold text-[16px] text-black">
                        Fá
                      </p>
                      <p className="text-[14px] text-[#9CA3AF]">
                        @victorfatanmi
                      </p>
                    </div>
                  </div>

                  <div className="flex place-items-end">
                    <img src={bpigon} alt="bp" />
                  </div>
                </div>
                <div className="text-center px-[30px] pt-[15px] pb-[26px]">
                  <p className="text-black text-[18px] max-w-[276px]">
                    Chowdeck is the best Nigerian mobile app I have ever used.
                    Yes, quote me.
                  </p>
                </div>
              </div>
              {/*card 2 */}
              <div className="pt-[32px]">
                <div className="border border-[#E5E7EB] rounded-md">
                  <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                    <div className="flex gap-2">
                      <img src={user2} alt="u2" />
                      <div>
                        <p className="font-extrabold text-[16px] text-black">
                          THEE AWAZI
                        </p>
                        <p className="text-[14px] text-[#9CA3AF]">@THEAWAZI</p>
                      </div>
                    </div>

                    <div className="flex place-items-end">
                      <img src={bpigon} alt="bp" />
                    </div>
                  </div>
                  <div className="text-center px-[30px] pt-[15px] pb-[26px]">
                    <p className="text-black text-[18px] max-w-[267px]">
                      Food!!! 🤤💚 So excited that I can now order through
                      @chowdeck on the island. Go team Chowdeck!!!🚀
                      https://t.co/0Sr3bUid46
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*div2*/}
            <div>
              {/*card1*/}
              <div className="border border-[#E5E7EB] rounded-md">
                <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                  <div className="flex gap-2">
                    <img src={user3} alt="u3" />
                    <div>
                      <p className="font-extrabold text-[16px] text-black">
                        Teffy Billion Dollars
                      </p>
                      <p className="text-[14px] text-[#9CA3AF]">@Jegc_tola</p>
                    </div>
                  </div>

                  <div className="flex place-items-end">
                    <img src={bpigon} alt="bp" />
                  </div>
                </div>
                <div className="text-center px-[30px] pt-[15px] pb-[26px]">
                  <p className="text-black text-[18px] max-w-[277px]">
                    My Yam and pepper sauce just came in from King Glab and
                    Chowdeck and my Godddd! This is the best thing to happen to
                    me this week! https://t.co/DBm6E2u2hQ
                  </p>
                </div>
              </div>
              {/*card 2 */}
              <div className="pt-[32px]">
                <div className="border border-[#E5E7EB] rounded-md">
                  <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                    <div className="flex gap-2">
                      <img src={user4} alt="u4" />
                      <div>
                        <p className="font-extrabold text-[16px] text-black">
                          Temz👑
                        </p>
                        <p className="text-[14px] text-[#9CA3AF]">
                          @TheRealTemz
                        </p>
                      </div>
                    </div>

                    <div className="flex place-items-end">
                      <img src={bpigon} alt="bp" />
                    </div>
                  </div>
                  <div className="text-center px-[30px] pt-[15px] pb-[26px]">
                    <p className="text-black text-[18px] max-w-[279px]">
                      I wan go baff but I can’t. Because chowdeck riders move
                      like thieves in the night. Before you cough, rider don
                      reach your gate. The efficiency and speed is crazy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*div3*/}
            <div className="xl:pt-[96px]">
              {/*card1*/}
              <div className="border border-[#E5E7EB] rounded-md">
                <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                  <div className="flex gap-2">
                    <img src={user5} alt="u5" />
                    <div>
                      <p className="font-extrabold text-[16px] text-black">
                        先生
                      </p>
                      <p className="text-[14px] text-[#9CA3AF]">@TheFisola</p>
                    </div>
                  </div>

                  <div className="flex place-items-end">
                    <img src={bpigon} alt="bp" />
                  </div>
                </div>
                <div className="text-center px-[70px] pt-[15px] pb-[26px]">
                  <p className="text-black text-[18px] max-w-[261px]">
                    Chowdeck delivered in 20 minutes. Rider said “pardon my
                    lateness” 💀
                  </p>
                </div>
              </div>
              {/*card 2 */}
              <div className="pt-[32px]">
                <div className="border border-[#E5E7EB] rounded-md">
                  <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                    <div className="flex gap-2">
                      <img src={user6} alt="u6" />
                      <div>
                        <p className="font-extrabold text-[16px] text-black">
                          Wine
                        </p>
                        <p className="text-[14px] text-[#9CA3AF]">@RedWhinee</p>
                      </div>
                    </div>

                    <div className="flex place-items-end">
                      <img src={bpigon} alt="bp" />
                    </div>
                  </div>
                  <div className="text-center px-[70px] pt-[15px] pb-[26px]">
                    <p className="text-black text-[18px] max-w-[254px]">
                      I genuinely love @chowdeck A top app with with service
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*div4*/}
            <div className="xl:pt-[70px]">
              {/*card1*/}
              <div className="border border-[#E5E7EB] rounded-md">
                <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                  <div className="flex gap-2">
                    <img src={user7} alt="u7" />
                    <div>
                      <p className="font-extrabold text-[16px] text-black">
                        Folasade Daini
                      </p>
                      <p className="text-[14px] text-[#9CA3AF]">
                        @folasade_daini
                      </p>
                    </div>
                  </div>

                  <div className="flex place-items-end">
                    <img src={bpigon} alt="bp" />
                  </div>
                </div>
                <div className="text-center px-[60px] pt-[15px] pb-[26px]">
                  <p className="text-black text-[18px] max-w-[276px]">
                    Have you seen the new list of vendors on Chowdeck?? Omo. It
                    is giving 🔥🔥
                  </p>
                </div>
              </div>
              {/*card 2 */}
              <div className="pt-[32px]">
                <div className="border border-[#E5E7EB] rounded-md">
                  <div className="flex px-[25px] pt-[25px] justify-around items-center ">
                    <div className="flex gap-2">
                      <img src={user8} alt="u8" />
                      <div>
                        <p className="font-extrabold text-[16px] text-black">
                          Scheherazade
                        </p>
                        <p className="text-[14px] text-[#9CA3AF]">@_chiisom</p>
                      </div>
                    </div>

                    <div className="flex place-items-end">
                      <img src={bpigon} alt="bp" />
                    </div>
                  </div>
                  <div className="text-center px-[80px] pt-[15px] pb-[26px]">
                    <p className="text-black text-[18px] max-w-[266px]">
                      You’ll order Chowdeck and say yeah I have about 20 minutes
                      to get home. In 5 minutes, delivery man will tell you he’s
                      outside 😭
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrretCard;
