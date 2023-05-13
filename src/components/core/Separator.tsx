import React from "react";

export const Separator = ({color = "gradiant"}:{color?:string}) => {
  return (
    <div className="py-3">
      <div className={`w-10 h-2 rounded-full ${color}`} />
    </div>
  );
};
