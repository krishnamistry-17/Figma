import React from "react";

import ContactBg from "./ContactBg";
import ContactPlace from "./ContactPlace";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <div>
      <div>
        <ContactBg />
      </div>
      <div>
        <ContactPlace />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
