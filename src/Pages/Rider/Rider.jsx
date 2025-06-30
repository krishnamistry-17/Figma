import React, { useEffect } from "react";
import RideBg from "./RideBg";
import Network from "./GrowingNetwork/Network";
import RideStory from "./RiderStory/RideStory";
import Footer from "../Footer/Footer";
import RidePlace from "./RidePlace/RidePlace";

const Rider = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
