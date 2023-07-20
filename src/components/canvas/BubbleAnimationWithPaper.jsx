/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bubble(props) {
  const { nodes, materials, animations } = useGLTF(
    "/bubble_animation_with_paper.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bubble.geometry}
        animations={animations}
        material={materials["Material.001"]}
        scale={-1.379}
      />
    </group>
  );
}

useGLTF.preload("/bubble_animation_with_paper.glb");
