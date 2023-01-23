import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-5 right-5 z-[99999999999]">
      <div className="animate-bounce">
        <div className="w-8 h-8 bg-red-400 mx-1 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
