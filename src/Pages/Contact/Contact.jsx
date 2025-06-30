import React, { useEffect } from "react";

import ContactBg from "./ContactBg";
import ContactPlace from "./ContactPlace";
import Footer from "../Footer/Footer";
const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
