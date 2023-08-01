/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bubble_big_6.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    actions.bubble_deformation.play();
  }, [mixer]);

  useEffect(() => {
    setScreenWidth(screen.width) 
  }, [])



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="BezierCircle" />
        <group name="Empty" position={[0, 0, 1]} />
        <group
          name="Light001"
          position={[4.076, 5.904, -1.005]}
          rotation={[1.89, 0.881, -2.045]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[0, 0, -0.016]}
          rotation={[-1.571, 0, 0]}
          scale={1.091}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          morphTargetDictionary={nodes.Sphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere.morphTargetInfluences}
          scale={screenWidth< 1024? 13 : 20}
          rotation={[14,22, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bubble_big_6.glb");
