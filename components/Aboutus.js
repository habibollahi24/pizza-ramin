import Image from "next/image";
import React from "react";
import aboutImage from "../public/images/pizza_PNG7104.png";

const Aboutus = () => {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-700 shadow-transparent  text-gray-400 py-4 md:py-16 mt-16">
      <div className="max-w-screen-lg mx-auto p-4 grid md:grid-cols-2 gap-5 items-center justify-center flex-col md:flex-row">
        <div className="w-full h-[300px] md:h-[500px] relative">
          <Image
            src={aboutImage}
            alt="Pizza-ramin"
            placeholder="blur"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="w-full ">
          <p className="leading-relaxed text-justify text-red-200">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <button className="btn-primary w-full md:w-auto mt-5">مشاهده بیشتر</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
