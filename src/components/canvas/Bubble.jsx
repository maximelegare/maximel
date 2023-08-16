/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bubble.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    actions.KeyAction.play();
  }, [mixer]);

  useEffect(() => {
    setScreenWidth(screen.width) 
    console.log(actions)
  }, [])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials["Material.003"]}
          morphTargetDictionary={nodes.Sphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere.morphTargetInfluences}
          // rotation={[0, 0, -Math.PI]}
          scale={screenWidth< 1024? 13 : 20}
          rotation={[14,22, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bubble.glb");
