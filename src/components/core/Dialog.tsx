import React, { type ReactNode, useEffect, useState, useRef } from "react";
import type { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { Scrollbars } from "react-custom-scrollbars-2";

import { useDom } from "~/hooks/useDom";
import { Button } from "./Button";
import { IoIosClose } from "react-icons/io";
import { createPortal } from "react-dom";

interface Props {
  show: boolean;
  children: ReactNode;
  header: any;
  onDialogClose?: () => void;
}

export const Dialog: FC<Props> = ({
  header,
  show,
  children,
  onDialogClose,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  // const { bodyOverflowHidden, bodyOverflowVisible } = useDom();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);
    // if (show === true) {
    //   bodyOverflowHidden();
    // } else {
    //   bodyOverflowVisible();
    // }
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
      {createPortal(
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
                  className="absolute left-1/2 mt-20 flex h-3/4 w-2/3 -translate-x-1/2 overflow-hidden rounded-md"
                  ref={nodeRef}
                >
                  <Scrollbars className="relative overflow-x-hidden h-full w-full bg-graySuperDark">
                    <div className="py-6 mt-12">
                      <div className="px-6">{children}</div>
                    </div>
                    <div className="fixed top-0 z-[100] flex h-12 w-full items-center justify-between bg-gray-700 px-6">
                      <h4>{header}</h4>
                      <Button
                        handleClick={() => {
                          setIsVisible(false);
                          onDialogClose && onDialogClose();
                        }}
                        variant="icon"
                      >
                        <IoIosClose className="text-3xl" />
                      </Button>
                    </div>
                  </Scrollbars>
                </div>
              </div>
              {/* <div className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-black"></div> */}
            </>
          </CSSTransition>
        </>,
        document.body
      )}
    </>
  );
};

// export const useDialog  = () => {
//   const closeDialog = () => {

//   }

//   return {closeDialog}
// }
