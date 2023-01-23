import Image from "next/image";
import heroImage from "../../public/images/pizza_PNG44071.png";

const Hero = () => {
   return (
      <div className="my-container">
         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 ">
            <div className=" w-full h-max flex-col items-center space-y-6  mt-28 md:mt-36  ">
               <p className="text-red-200 text-5xl md:text-7xl text-center font-serif">
                  Welcome To Pizza-Ramin
               </p>
               <div className="text-center">
                  <button className="btn-primary w-3/4 p-3  ">سفارش</button>
               </div>
            </div>
            <div className="mt-24 md:mt-36 rounded-3xl w-full h-full md:w-96 md:h-96  md:justify-self-end">
               <Image
                  src={heroImage}
                  alt="hero"
                  className="rounded-3xl object-cover "
               />
            </div>
         </div>
      </div>
   );
};

export default Hero;
