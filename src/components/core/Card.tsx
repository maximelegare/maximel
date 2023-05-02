import React from "react";

export const Card = () => {
  return (
    <article className="flex-grow">
      <div className="relative  h-96">
        <div className="z-20 p-5">
          <div className="h-20 w-full bg-slate-600"></div>
          <div className="mt-2 flex gap-1">
            <div className="h-3 w-3 bg-slate-400"></div>
            <div className="h-3 w-3 bg-slate-400"></div>
            <div className="h-3 w-3 bg-slate-400"></div>
          </div>
          <div>
            <h2>Title</h2>
            <h3>Description</h3>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black opacity-40 blur-sm"></div>
      </div>
    </article>
  );
};
