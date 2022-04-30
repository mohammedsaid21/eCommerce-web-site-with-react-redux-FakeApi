import React from "react";
import ContactParts from "../Components/ContactParts";

const Contact = () => {

  return (
    <>
      <h3 className='text-center text-3xl py-8'>Who Us</h3>
      <div className="flex justify-between items-center w-full md:w-3/4 flex-col md:flex-row mx-auto py-8">
        <ContactParts />
        <ContactParts />
      </div>
    </>
  );
};

export default Contact;
