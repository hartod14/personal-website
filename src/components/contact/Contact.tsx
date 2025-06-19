import React from "react";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <div>
      <div className="text-5xl text-center text-blue-700 font-bold">
        Let`s work together...
      </div>
      <div className="text-3xl text-center text-blue-900 font-semibold italic">
        how do you will reach me?
      </div>
      <ContactLinks />
    </div>
  );
};

export default Contact;
