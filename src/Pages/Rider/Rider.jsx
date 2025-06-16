import React from "react";
import RideBg from "./RideBg";
import Network from "./GrowingNetwork/Network";
import RideStory from "./RiderStory/RideStory";
import Footer from "../Footer/Footer";
import RidePlace from "./RidePlace/RidePlace";

const Rider = () => {
  return (
    <div data-aos-easing="ease" data-aos-duration="2000" data-aos-delay="0">
      <div>
        <RideBg />
      </div>
      <div>
        <Network />
      </div>
      <div>
        <RideStory />
      </div>
      <div>
        <RidePlace />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Rider;
