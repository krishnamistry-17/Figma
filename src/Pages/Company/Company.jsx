import React, { useEffect } from "react";

import Founder from "./FounderStory/Founder";
import CoreValues from "./CoreValues/CoreValues";
import CompanyBg from "./CompanyBg";
import Teams from "./Teams/Teams";
import People from "./People/People";
import Joinus from "./JoinUs/Joinus";
import CompanyPlace from "./CompnayPlace/CompnayPlace";
import Footer from "../Footer/Footer";
const Company = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <CompanyBg />
      </div>
      <div className=" relative md:mt-[-147px] mt-[-55px]">
        <Founder />
      </div>
      <div>
        <CoreValues />
      </div>
      <div>
        <Teams />
      </div>
      <div>
        <People />
      </div>
      <div>
        <Joinus />
      </div>
      <div>
        <CompanyPlace />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Company;
