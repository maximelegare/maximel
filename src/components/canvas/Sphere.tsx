import { useEffect, createRef, Ref } from "react";
import type { GroupProps } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

import { useState } from "react";

// import { type Displace as DisplaceType } from "lamina/vanilla";

import { lerp } from "three/src/math/MathUtils";

import { useMemo } from "react";

import type { BufferGeometry, Material, Vector3 } from "three";

import type { Mesh } from "three";
import { MutableRefObject } from "react";

import { ReactNode } from "react";

import { useYuka } from "~/hooks/useYoka";
import { Vehicle } from "yuka/src/steering/Vehicle";






export const Sphere = ({args}:{args:number[]}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [ref] = useYuka({position:[40,30,10]})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const myRef = ref as any

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <mesh ref={myRef}>
          <sphereBufferGeometry args={args} />
          <meshStandardMaterial
            attach="material"
            color={"#720b23"}
          />
        </mesh>
  )
}