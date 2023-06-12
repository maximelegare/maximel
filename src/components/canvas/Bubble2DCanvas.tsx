import React, { useRef, useEffect } from "react";
import { useBubblesAnimation } from "~/hooks/useBubbleAnimation";
import type { FC } from "react";

interface Props {
  bubbleColor: string;
  handleBubbleClicked?: () => any;
}

export const Bubbles2DCanvas: FC<Props> = ({
  bubbleColor,
  handleBubbleClicked,
}) => {
  const onBubbleClicked = () => {
    handleBubbleClicked && handleBubbleClicked();
  };

  const { animateBubblesOnCanvas } = useBubblesAnimation({ onBubbleClicked });

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      animateBubblesOnCanvas(canvasRef.current, bubbleColor);
    }
  }, [animateBubblesOnCanvas]);

  return (
    <canvas
      className="absolute left-0 top-0 h-full  rounded-md"
      ref={canvasRef}
    ></canvas>
  );
};
