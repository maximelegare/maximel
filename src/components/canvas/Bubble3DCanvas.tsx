/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense, useMemo } from "react";
import { Canvas, useLoader, AxesHelperProps } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "~/components/canvas/Sphere";

import { Manager } from "~/hooks/useYoka";

import { Bubble } from "./Bubble";

import { useEffect, useState } from "react";

import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

import { Environment } from "@react-three/drei";
import { useEnvironment } from "@react-three/drei";

export function Bubble3DCanvas() {
  const randomizeSelfOrOposite = (num: number) => {
    const val = Math.floor(Math.random() * 2);
    if (val === 1) {
      return -num;
    } else {
      return num;
    }
  };

  const x = randomizeSelfOrOposite(Math.floor(Math.random() * 80));
  const y = 0;
  const z = randomizeSelfOrOposite(Math.floor(Math.random() * 40));

  // let renderOrder = 0;

  const bubbles = useMemo(() => {
    return Array.from(Array(10).keys()).map((_, idx) => {
      const x = randomizeSelfOrOposite(Math.floor(Math.random() * 80));
      const y = 0;
      const z = randomizeSelfOrOposite(Math.floor(Math.random() * 40));
      // renderOrder = renderOrder + 100;
      return (
        // <></>
        <Bubble
          key={idx}
          path="../../../public/assets/3D_models/bubble.glb"
          position={[x, y, z]}
        />
        // <Sphere renderOrder={1} key={idx} args={[10, 64, 64]} position={[x, y, z]} />
      );
    });
  }, []);

  return (
    <div className="h-full w-full">
      <Canvas orthographic camera={{ zoom: 10, position: [0, 80, 0] }}>
        <color attach="background" args={["#000"]} />
        {/* <ambientLight intensity={1000} color={""} /> */}

        <Environment files="/coloredSky.hdr" />
        <Manager>
          <Suspense fallback={null}>
            {/* <Sphere position={[x, y, z]} args={[10, 64, 64]} renderOrder={0}/>
            <Sphere position={[x, y, z]} args={[10, 64, 64]} renderOrder={1}/>
            <Sphere position={[x, y, z]} args={[10, 64, 64]} renderOrder={2}/> */}
            {/* <Sphere position={[x, y, z]} args={[10, 64, 64]} /> */}
            {/* <Sphere position={[x, y, z]} args={[10, 64, 64]} /> */}
            <Sphere position={[x, y, z]} args={[10, 64, 64]} />
            {bubbles.map((bubble) => bubble)}
          </Suspense>
        </Manager>
        <axesHelper scale={500} />
      </Canvas>
    </div>
  );
}
