/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense, useMemo } from "react";
import { Canvas, useLoader, AxesHelperProps } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "~/components/canvas/Sphere";

// import {Bubble} from "./BubbleAnimationWithPaper"
import { Model } from "./Bubble";

import { useEffect, useState } from "react";

import { Environment } from "@react-three/drei";

export function HeroBubble3D() {
  return (
    <div className="absolute left-0 top-0 z-0  h-full  w-full">
      <Canvas orthographic camera={{ zoom: 10, position: [0, 80, 0] }}>
        <ambientLight intensity={0.5} color={""} />

        <Environment files="/gym_entrance_1k_blue_black.hdr" />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        
      </Canvas>
      
    </div>
  );
}
