import React, { useRef, useEffect } from "react";
import { useBubblesAnimation } from "../../../hooks/useBubblesAnimation";

export const BubblesCanvas = () => {
  const { animateBubblesOnCanvas } = useBubblesAnimation();

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      animateBubblesOnCanvas(canvasRef.current);
      
    }
  }, [ animateBubblesOnCanvas]);

  return <canvas className="block h-screen w-screen" ref={canvasRef}></canvas>;
};
