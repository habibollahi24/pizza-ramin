import React from "react";
import { BsCupFill, BsFillAlarmFill, BsAwardFill } from "react-icons/bs";

const cartFeachers = [
  {
    id: 1,
    icon: <BsCupFill />,
    title: "لورم اپیسوم",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 2,
    icon: <BsFillAlarmFill />,
    title: "لورم اپیسوم",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 3,
    icon: <BsAwardFill />,
    title: "لورم اپیسوم",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
];
const Feachers = () => {
  return (
    <div className="container max-w-screen-lg mx-auto p-2 md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center ">
        {cartFeachers.map((cart) => {
          return <Feacher key={cart.id} cart={cart} />;
        })}
      </div>
    </div>
  );
};

const Feacher = ({ cart }) => {
  return (
    <div className={`p-6 border-red-100 shadow-md  rounded-2xl`}>
      <div className="flex text-red-300 justify-center text-5xl mb-1 ">{cart.icon}</div>
      <h2 className="mb-4 text-red-100  font-semibold text-xl ">{cart.title}</h2>
      <p className="text-sm text-red-100 ">{cart.body}</p>
    </div>
  );
};

export default Feachers;
