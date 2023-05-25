import React, { useRef, useEffect } from "react";
import { useBubblesAnimation } from "~/hooks/useBubbleAnimation";
import type { FC } from "react";

interface Props {
  bubbleColor:string;
}


export const Bubbles2DCanvas:FC<Props> = ({bubbleColor}) => {
  const { animateBubblesOnCanvas } = useBubblesAnimation();

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      animateBubblesOnCanvas(canvasRef.current, bubbleColor);
    }
  }, [animateBubblesOnCanvas]);

  return (
    <canvas 
    
      className="absolute top-0 left-0 h-full  rounded-md"
      ref={canvasRef}
    ></canvas>
  );
};