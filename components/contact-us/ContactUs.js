import React from "react";
import ContactUsForm from "./ContactUsForm";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../Map"), { ssr: false });

const ContactUs = () => {
  return (
    <div className="my-container my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <ContactUsForm />
        <div className="felx flex-col h-full order-2 ">
          <div className="text-title md:mt-4 mb-10 text-center ">ما اینجاییم.</div>
          <div className="w-full overflow-hidden h-72 rounded-2xl shadow-xl">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
