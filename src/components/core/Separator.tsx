import React from "react";

export const Separator = ({color = "gradiant-purple"}:{color?:string}) => {
  return (
    <div className="py-6">
      <div className={`w-6 h-1 rounded-full ${color} opacity-60`} />
    </div>
  );
};
