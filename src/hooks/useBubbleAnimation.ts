/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";

// import { warpBubble } from "./bubbleWarp";

interface Props {
  onBubbleClicked: () => any;
}

export function useBubblesAnimation(props: Props) {

  const { onBubbleClicked } = props;

  const [bubbleFinishedGrowing, setBubbleFinishedGrowing] = useState(false)
  
  const animateBubblesOnCanvas = (
    canvas: HTMLCanvasElement,
    bubbleColor: string
    ) => {
    if (canvas && canvas.parentElement) {
      const rect: DOMRect = canvas.parentElement.getBoundingClientRect();
      const ctx = canvas.getContext("2d");
      canvas.width = rect.width;
      canvas.height = rect.height;
      const diagonal = Math.sqrt(
        Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)
      );

      if (ctx) {
        canvas.addEventListener("click", (e) => {
          particlesArray.forEach((particle) => {
            if (ctx.isPointInPath(particle.circle, e.offsetX, e.offsetY)) {
              
              particle.clicked = true;
              onBubbleClicked();
            }
          });
        });
      }

      const particlesArray: Particle[] = [];

      const colors = ["#101320"];

      class Particle {
        private x;
        private y;
        private directionX;
        private directionY;
        private size;
        public color;
        public circle: any;
        public defaultColor;
        public clicked;

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
          this.defaultColor = color;
          this.clicked = false;
        }
        draw() {
          if (ctx) {
            this.circle = new Path2D();
            if (this.size <= diagonal && this.clicked) {
              this.size += 20;
            }
            

            this.circle.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);

            ctx.fillStyle = this.color;
            ctx.fill(this.circle);
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
        for (let i = 0; i < 1; i++) {
          const size = 70;
          const x = 0.7 * (canvas.width - size * 2) + size;
          const y = 0.7 * (canvas.height - size * 2) + size;
          const directionX = Math.random() * 1.3;
          const directionY = Math.random() * 1.3;
          const color = colors[Math.floor(Math.random() * colors.length)];

          const particle = new Particle(
            x,
            y,
            directionX,
            directionY,
            size,
            color ?? "#FFEB3B"
          );

          // warpBubble(particle);

          particlesArray.push(particle);
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
}
