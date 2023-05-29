import React, { type ReactNode, useEffect, useState, useRef } from "react";
import type { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { useDom } from "~/hooks/useDom";

interface Props {
  show: boolean;
  children: ReactNode;
  onDialogClose?: () => void;
}

export const Dialog: FC<Props> = ({ show, children, onDialogClose }) => {
  const nodeRef = useRef(null);

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

  const closeDialog = () => {
    setIsVisible(false);
    onDialogClose && onDialogClose();
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
          <div
            ref={nodeRef}
            className="fixed left-1/2 mt-10 h-3/4 w-2/3 -translate-x-1/2 overflow-auto bg-cyan-900"
          >
            <div className="">{children}</div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

// export const useDialog  = () => {
//   const closeDialog = () => {

//   }

//   return {closeDialog}
// }
