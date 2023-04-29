/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import React from "react";

import  Warp  from "warpjs";

export const warpBubble = (svg:any) => {

  const warp = new Warp(svg);
  warp.interpolate(4);
  warp.transform(([x, y]: number[]) => [x, y, y]);
  let offset = 0;

  function animate() {
    warp.transform(([x, y, oy]: any) => [
      x,
      oy + 3 * Math.sin(x / 100 + offset),
      oy,
    ]);
    offset += 0.06;
    requestAnimationFrame(animate);
  }
  animate();

};
