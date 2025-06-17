import React from "react";

import Founder from "./FounderStory/Founder";
import CoreValues from "./CoreValues/CoreValues";
import CompanyBg from "./CompanyBg";
import Teams from "./Teams/Teams";

const Company = () => {
  return (
    <>
      <div>
        <CompanyBg />
      </div>
      <div>
        <Founder />
      </div>
      <div>
        <CoreValues />
      </div>
      <div>
        <Teams />
      </div>
    </>
  );
};

export default Company;
