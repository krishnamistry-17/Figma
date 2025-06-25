import React from "react";
import Bg from "./Bg/Bg";
import Appcard from "./AppCard/Appcard";
import Growcard from "./Growcard/Growcard";
import GreenCard from "./GreenCard/GreenCard";
import Categories from "./Categories/Categories";
import WhiteCard from "./WhiteCard/WhiteCard";
import BlackCard from "./BlackCard/BlackCard";
import ChoiceButton from "./AppCard/ChoiceButton";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <div>
        <Bg />
      </div>
      <div>
        <ChoiceButton />
      </div>
      {/* <div>
        <Appcard />
      </div> */}
      <div>
        <Growcard />
      </div>
      {/* <div>
        <Categories />
      </div> */}
      <div>
        <GreenCard />
      </div>
      <div>
        <WhiteCard />
      </div>
      <div>
        <BlackCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
