import React from "react";
import Location from "./Location";
import StrretCard from "./StrretCard";
import StoriesCard from "./StoriesCard";
// import Faq from "./Faq";

const WhiteCard = () => {
  return (
    <>
      <div>
        <Location />
      </div>
      <div>
        <StrretCard />
      </div>
      <div>
        <StoriesCard />
      </div>
      {/* <div>
        <Faq />
      </div> */}
    </>
  );
};

export default WhiteCard;
