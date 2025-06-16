import React from "react";
import Bg from "./Bg";
import ChowPass from "./ChowPass/ChowPass";
import Tires from "./Tires/Tires";
import GrowNetwork from "./GrowNetwork/GrowNetwork";
import ChowStories from "./ChowStories/ChowStories";
import PlaceOrder from "../Home/BlackCard/PlaceOrder";
import Footer from "../Footer/Footer";
import VendorePlace from "./VendorePlace/VendorePlace";

const Vendore = () => {
  return (
    <div data-aos-easing="ease" data-aos-duration="2000" data-aos-delay="0">
      <div>
        <Bg />
      </div>
      <div>
        <ChowPass />
      </div>
      <div>∂
        <Tires />
      </div>
      <div>
        <GrowNetwork />
      </div>
      <div>
        <ChowStories />
      </div>
      <div>
        <VendorePlace />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Vendore;
