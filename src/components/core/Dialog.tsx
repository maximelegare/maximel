import React, { type ReactNode, useEffect, useState, useRef } from "react";
import type { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { Scrollbars } from "react-custom-scrollbars-2";

import { type RefObject } from "react";

import { useDom } from "~/hooks/useDom";

interface Props {
  show: boolean;
  children: ReactNode;
  onDialogClose?: () => void;
}

export const Dialog: FC<Props> = ({ show, children, onDialogClose }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { bodyOverflowHidden, bodyOverflowVisible } = useDom();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);
    if (show === true) {
      bodyOverflowHidden();
    } else {
      bodyOverflowVisible();
    }
  }, [show]);

  const handleClick = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e &&
      nodeRef.current &&
      !nodeRef.current.contains(e.target as HTMLElement)
    ) {
      setIsVisible(false);
      onDialogClose && onDialogClose();
    }
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
        <>
          <div
            className="fixed bottom-0 left-0 right-0 top-0 z-50"
            onClick={(e) => handleClick(e)}
          >
            <div
              className="container absolute -translate-x-1/2 left-1/2 mt-20 flex h-3/4 "
              ref={nodeRef}
            >
              <Scrollbars
                // style={{
                //   width: 700,
                //   height: 300,
                //   backgroundColor: "red",
                //   zIndex: 10000,
                // }}
                className=" h-full w-full bg-slate-600"
              >
                <div>
                  <div className="p-6 h-full">{children}</div>
                </div>
              </Scrollbars>
            </div>
          </div>
          {/* <div className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-black"></div> */}
        </>
      </CSSTransition>
    </>
  );
};

// export const useDialog  = () => {
//   const closeDialog = () => {

//   }

//   return {closeDialog}
// }
