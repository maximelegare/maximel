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
      className="absolute left-0 top-0 h-full w-full"
      ref={canvasRef}
    ></canvas>
  );
};