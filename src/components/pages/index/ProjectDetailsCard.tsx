import React from "react";

export const ProjectDetailsCard = () => {
  const filledArray = new Array(100).fill("hello");

  console.log(filledArray);
  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-50 overflow-auto bg-red-500"
        data-aos="fade-up-custom"
        data-aos-duration="600"
      >
        <div className="fixed top-0">back</div>
        <div className="">
          {filledArray.map((el: string, idx) => (
            <div key={idx} className="text-blue-400">
              hello
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
