import React from "react";
import parrow from "../../assets/svg/prarrow.svg";
import symbol from "../../assets/svg/symbol.svg";
import logo from "../../assets/images/flogo.png";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="lg:px-[80px] md:block hidden">
        <hr className="border-white " />
        <div className="flex justify-between items-center py-[33px]">
          <div>
            <input
              type="text"
              placeholder="yourname@email.com"
              className="font-extrabold text-[20px] text-white p-[8px]"
            />
          </div>
          <div>
            <img src={parrow} alt="aro" />
          </div>
        </div>
        <hr className="border-white" />

        <div className="flex flex-col lg:grid lg:grid-cols-3">
          {/* First section: the logo column */}
          <div className="border-white border-r lg:col-span-1 ">
            <img src={logo} alt="logo" className="pt-16" />
            <div
              className="flex gap-4 
            lg:pt-[605px] md:pt-20 pt-10"
            >
              <img src={symbol} alt="symbol" />
              <p className="font-extrabold text-2xl text-white">Chowdeck</p>
            </div>
          </div>

          {/* Second section: the 3 columns of links */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:col-span-2  ">
            {/* COMPANY, CUISINES, POPULAR - unchanged content */}
            <div className="pl-[17px] border-white border-r md:h-[684px] border-b">
              <p className="font-extrabold text-[14px] text-white pt-[64px]">
                COMPANY
              </p>
              <p className="text-[16px] text-white pt-[33px]">customers</p>
              <p className="text-[16px] text-white pt-[27px]">Vendors</p>
              <p className="text-[16px] text-white pt-[27px]">Riders</p>
              <p className="text-[16px] text-white pt-[27px]">Storefront</p>
              <p className="text-[16px] text-white pt-[27px]">About</p>
              <p className="text-[16px] text-white pt-[27px]">Careers</p>
              <p className="text-[16px] text-white pt-[27px]">FAQs</p>
              <p className="text-[16px] text-white pt-[27px]">Blog</p>
              <p className="text-[16px] text-white pt-[27px]">Contact</p>
              <p className="text-[16px] text-white pt-[27px]">Terms of Use</p>
              <p className="text-[16px] text-white pt-[27px]">Privacy Policy</p>
            </div>
            <div className="pl-[17px] border-white border-r md:h-[684px] border-b">
              <p className="font-extrabold text-[14px] text-white pt-[64px]">
                CUISINES NEAR YOU
              </p>
              <p className="text-[16px] text-white pt-[33px]">Pasta near me</p>
              <p className="text-[16px] text-white pt-[27px]">Rice near me</p>
              <p className="text-[16px] text-white pt-[27px]">
                Fast food near me
              </p>
              <p className="text-[16px] text-white pt-[27px]">
                Asian food in Lagos
              </p>
              <p className="text-[16px] text-white pt-[27px]">
                African food in Lagos
              </p>
              <p className="text-[16px] text-white pt-[27px]">
                Breakfast menu in Lagos
              </p>
              <p className="text-[16px] text-white pt-[27px]">
                Fitfam stores in Lagos
              </p>
              <p className="text-[16px] text-white pt-[27px]">
                American food in Lagos
              </p>
              <p className="text-[16px] text-white pt-[27px]">
                Pastries in Lagos
              </p>
              <p className="text-[16px] text-white pt-[27px]">Salad in Lagos</p>
              <p className="text-[16px] text-white pt-[27px]">
                Fruits in Lagos
              </p>
            </div>
            <div className="pl-[17px] md:h-[684px] border-b border-white">
              <p className="font-extrabold text-[14px] text-white pt-[64px]">
                POPULAR
              </p>
              <p className="text-[16px] text-white pt-[33px]">Food delivery</p>
              <p className="text-[16px] text-white pt-[27px]">Surulere</p>
              <p className="text-[16px] text-white pt-[27px]">Ogudu</p>
              <p className="text-[16px] text-white pt-[27px]">Yaba</p>
              <p className="text-[16px] text-white pt-[27px]">Ikeja</p>
              <p className="text-[16px] text-white pt-[27px]">Lekki</p>
              <p className="text-[16px] text-white pt-[27px]">King Glab</p>
              <p className="text-[16px] text-white pt-[27px]">
                Korede Spaghetti
              </p>
              <p className="text-[16px] text-white pt-[27px]">Iyan Aladuke</p>
              <p className="text-[16px] text-white pt-[27px]">Food Fusion</p>
              <p className="text-[16px] text-white pt-[27px]">Belefull</p>
            </div>
            <div className="grid grid-cols-2  border-white  lg:col-span-3 md:col-span-4 col-span-3">
              <div className="border-white border-r">
                <div className="flex py-8 px-4 sm:px-24 border-b border-white">
                  <img src={twitter} alt="twitter" />
                  <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                    Twitter
                  </p>
                </div>
                <div className="flex py-8 px-4 sm:px-24">
                  <img src={facebook} alt="facebook" />
                  <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                    Facebook
                  </p>
                </div>
              </div>
              <div>
                <div className="flex py-8 px-4 sm:px-24 border-b border-white">
                  <img src={instagram} alt="instagram" />
                  <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                    Instagram
                  </p>
                </div>
                <div className="flex py-8 px-4 sm:px-24">
                  <img src={linkedin} alt="linkedin" />
                  <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                    LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third section: social links (grid-cols-2) */}
        </div>

        <hr className="border-white" />
        <p className="text-white text-[12px] text-center py-[40.5px]">
          © All Rights Reserved. 2022, Chowdeck Logistics Inc.
        </p>
      </div>
      <div className="sm:hidden">
        <div className="flex justify-between items-center py-[33px] border-[1px] border-t-white border-b-white">
          <div>
            <span>
              <input
                type="text"
                placeholder="yourname@email.com"
                className="font-extrabold text-[20px] text-white p-[8px] "
              />
            </span>
          </div>
          <div>
            <img src={parrow} alt="aro" />
          </div>
        </div>
        <div className="grid grid-cols-2  border-white border-b  lg:col-span-3 md:col-span-4 col-span-3">
          <div className="border-white border-r">
            <div className="flex py-8 px-4 sm:px-24 border-b border-white">
              <img src={twitter} alt="twitter" />
              <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                Twitter
              </p>
            </div>
            <div className="flex py-8 px-4 sm:px-24">
              <img src={facebook} alt="facebook" />
              <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                Facebook
              </p>
            </div>
          </div>
          <div>
            <div className="flex py-8 px-4 sm:px-24 border-b border-white">
              <img src={instagram} alt="instagram" />
              <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                Instagram
              </p>
            </div>
            <div className="flex py-8 px-4 sm:px-24">
              <img src={linkedin} alt="linkedin" />
              <p className="font-extrabold text-lg sm:text-xl text-white ml-2">
                LinkedIn
              </p>
            </div>
          </div>
        </div>
        <div className=" flex-col flex border-b-white border-[1px]">
          <div className="flex items-start px-5">
            <h1 className="font-extrabold text-[14px] text-white/40 pt-[64px]">
              {" "}
              COMPANY
            </h1>
            <ul className=" grid gap-6 pt-[64px] pl-20">
              <li className="text-[16px] text-white ">Customers</li>
              <li className="text-[16px] text-white ">Vendors</li>
              <li className="text-[16px] text-white ">Riders</li>
              <li className="text-[16px] text-white ">Storefront</li>
              <li className="text-[16px] text-white ">About</li>
              <li className="text-[16px] text-white ">Careers</li>
              <li className="text-[16px] text-white ">FAQs</li>
              <li className="text-[16px] text-white ">Blog</li>
              <li className="text-[16px] text-white ">Contact</li>
              <li className="text-[16px] text-white ">Terms of Use</li>
              <li className="text-[16px] text-white ">Privacy Policy</li>
            </ul>
          </div>
          <div className="flex items-start px-5">
            <h1 className="font-extrabold text-[14px] text-white/40 pt-[64px] pr-0.5 max-w-[145px]">
              CUISINES NEAR YOU
            </h1>
            <ul className=" grid gap-6 pt-[64px] ">
              <li className="text-[16px] text-white ">Pasta near me</li>
              <li className="text-[16px] text-white ">Rice near me</li>
              <li className="text-[16px] text-white ">Fast food near me</li>
              <li className="text-[16px] text-white ">Asian food in Lagos</li>
              <li className="text-[16px] text-white ">African food in Lagos</li>
              <li className="text-[16px] text-white ">
                Breakfast menu in Lagos
              </li>
              <li className="text-[16px] text-white ">
                Fitfam stores in Lagos
              </li>
              <li className="text-[16px] text-white ">
                American food in Lagos
              </li>
              <li className="text-[16px] text-white ">Pastries in Lagos</li>
              <li className="text-[16px] text-white ">Salad in Lagos</li>
              <li className="text-[16px] text-white ">Fruits in Lagos</li>
            </ul>
          </div>
          <div className="flex items-start px-5 pb-30">
            <h1 className="font-extrabold text-[14px] text-white/40 pt-[64px]">
              {" "}
              POPULAR
            </h1>
            <ul className=" grid gap-6 pt-[64px] pl-20">
              <li className="text-[16px] text-white ">Food delivery</li>
              <li className="text-[16px] text-white ">Surulere</li>
              <li className="text-[16px] text-white ">Ogudu</li>
              <li className="text-[16px] text-white ">Yaba</li>
              <li className="text-[16px] text-white ">Ikeja</li>
              <li className="text-[16px] text-white ">Lekki</li>
              <li className="text-[16px] text-white ">King Glab</li>
              <li className="text-[16px] text-white ">Korede Spaghetti</li>
              <li className="text-[16px] text-white ">Iyan Aladuke</li>
              <li className="text-[16px] text-white ">Food Fusion</li>
              <li className="text-[16px] text-white ">Belefull</li>
            </ul>
          </div>
        </div>
        <div className="flex py-10 justify-center items-center border-b-white border-[1px]">
          <img src={symbol} alt="symbol" />
          <p className="font-extrabold text-2xl text-white pl-4">Chowdeck</p>
        </div>
        <p className="text-white/40 text-[12px] text-center py-[40.5px]">
          © All Rights Reserved. 2022, Chowdeck Logistics Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
