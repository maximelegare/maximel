/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
// import url from "/avatar_portfolio.mp4";

import * as Three from "three"
export function BubbleTest5(props) {
  const { nodes, materials, animations } = useGLTF("/bubbleTest5.gltf");

  const [video] = useState(() => {
    // const vid = document.createElement("video");
    // vid.src = url;
    // vid.crossOrigin = "Anonymous";
    // vid.loop = true;
    // vid.muted = true;
    // vid.play();
    // return vid;
    return (
      <video
        autoPlay
        loop
        muted
        className="absolute min-h-full w-auto min-w-full max-w-none"
      >
        <source src="/avatar_portfolio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bubble.geometry}
        animations={animations[0]}
        material={materials["Material.001"]}
        scale={22}
      >
        {/* <mesh geometry={nodes.Plane.geometry} material={materials.Material} rotation={[0, 3.1, 0]} 
        
        scale={[-0.5, -0.725, -0.5]}
         /> */}
        <mesh rotation={[0, 0, 0]} position={[0, 0, 1.1]}>
          <planeGeometry args={[3.2, 1.9]} />
          <meshStandardMaterial emissive={"white"}>
            <videoTexture attach="map" args={[video]} />
            <videoTexture attach="emissiveMap" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/bubbleTest5.gltf");
