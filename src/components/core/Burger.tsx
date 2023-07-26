import React from "react";

export const Burger = () => {
  return (
    <div className="group fixed right-0 z-[3000]">
      <div className="absolute h-36 w-36 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white transition-all duration-500 ease-in-out group-hover:h-96 group-hover:w-96"></div>
      <div className="invisible absolute right-0 p-4  group-hover:visible">
        <div className="text-black">Portfolio</div>
        <div className="text-black">Portfolio</div>
        <div className="text-black">Portfolio</div>
      </div>
    </div>
  );
};
