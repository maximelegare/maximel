import React, { useRef, useEffect } from "react";
import { useBubblesAnimation } from "~/hooks/useBubbleAnimation";

export const Bubbles2DCanvas = () => {
  const { animateBubblesOnCanvas } = useBubblesAnimation();

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      animateBubblesOnCanvas(canvasRef.current);
    }
  }, [animateBubblesOnCanvas]);

  return (
    <canvas 
    
      className="absolute top-0 left-0"
      ref={canvasRef}
    ></canvas>
  );
};