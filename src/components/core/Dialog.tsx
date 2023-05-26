import React, { ReactNode, useEffect, useState, useRef } from "react";
import type { FC } from "react";
import { CSSTransition } from "react-transition-group";

interface Props {
  show: boolean;
  children: ReactNode;
}

export const Dialog: FC<Props> = ({ show, children }) => {
  const filledArray = new Array(100).fill("hello");

  const nodeRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  const closeDialog = () => {
    document.querySelector("body")?.classList.remove("overflow-hidden");
    setIsVisible(false);
  };

  return (
    <>
       <CSSTransition
        in={isVisible}
        nodeRef={nodeRef}
        timeout={300}
        classNames="dialog"
        unmountOnExit
    
      >
        <div
          
          className="fixed bottom-0 left-0 right-0 top-0 z-50"
          onClick={() => closeDialog()}
        >
          <div ref={nodeRef} className="fixed left-1/2 mt-10 h-3/4 w-2/3 -translate-x-1/2 overflow-auto bg-cyan-900">
            <div className="">
              {filledArray.map((el: string, idx) => (
                <div key={idx} className="text-blue-400">
                  hello
                </div>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
