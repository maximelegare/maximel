import React from "react";
import type { FC } from "react";

export const useBubblesAnimation = () => {
  
  const animateBubblesOnCanvas = (canvas: HTMLCanvasElement) => {

    console.log("canvas", canvas);

    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particlesArray: Particle[] = [];
      const colors = [
        "#F2A02E",
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#3F51B5",
        "#2196F3",
        "#00BCD4",
        "#4CAF50",
        "#FFEB3B",
      ];

      class Particle {
        private x;
        private y;
        private directionX;
        private directionY;
        private size;
        private color;

        constructor(
          x: number,
          y: number,
          directionX: number,
          directionY: number,
          size: number,
          color: string | CanvasGradient | CanvasPattern
        ) {
          this.x = x;
          this.y = y;
          this.directionX = directionX;
          this.directionY = directionY;
          this.size = size;
          this.color = color;
        }
        draw() {
          if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

            ctx.fillStyle = this.color;
            ctx.fill();
          }
        }
        update() {
          if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
          }
          if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
          }
          this.x += this.directionX;
          this.y += this.directionY;
          this.draw();
        }
      }
      function init() {
        for (let i = 0; i < 50; i++) {
          const size = Math.random() * 20 + 5;
          const x = Math.random() * (canvas.width - size * 2) + size;
          const y = Math.random() * (canvas.height - size * 2) + size;
          const directionX = Math.random() * 1 - 0.5;
          const directionY = Math.random() * 1 - 0.5;
          const color = colors[Math.floor(Math.random() * colors.length)];
          particlesArray.push(
            new Particle(x, y, directionX, directionY, size, color ?? "#FFEB3B")
          );
        }
      }
      function animate() {
        requestAnimationFrame(animate);
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i]?.update();
          }
        }
      }
      init();
      animate();
    }
  };

  return {
    animateBubblesOnCanvas,
  };
};
