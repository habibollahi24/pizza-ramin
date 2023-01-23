import React from "react";
import Image from "next/image";
import testImage from "../public/images/b2.jpg";

const Train = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <div className="mx-auto">Lorem ipsum dolor sit amet.</div>
        <div>
          <Image src={testImage} alt="test" className=" " width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Train;
