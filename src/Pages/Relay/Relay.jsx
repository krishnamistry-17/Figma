import React from "react";
import RelayBg from "./RelayBg";
import RelayWork from "./RelayWork";
import Need from "./Need";
import Stories from "./Stories";
import RelayPlace from "./RelayPlace";
import Footer from "../Footer/Footer";

const Relay = () => {
  return (
    <div>
      <div>
        <RelayBg />
      </div>
      <div>
        <RelayWork />
      </div>
      <div>
        <Need />
      </div>
      <div>
        <Stories />
      </div>
      <div>
        <RelayPlace />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Relay;
