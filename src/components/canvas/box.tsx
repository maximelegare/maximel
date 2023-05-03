/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useRef } from "react";
import type { GroupProps } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

import { useState } from "react";

import { type Displace as DisplaceType } from "lamina/vanilla";

import { lerp } from "three/src/math/MathUtils";

import { useMemo } from "react";

import type { Vector3 } from "three";

import type { Mesh } from "three";

import type { DisplaceProps } from "lamina/types";

export const Box = ({
  displaceProps,
  ...props
}: GroupProps & {
  displaceProps?: DisplaceProps;
}) => {
  // const [ref, api] = useSphere(
  //   () => ({ args: [2], mass: 0 }),
  //   useRef<Mesh>(null)
  // );

  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  // const values:any = useRef([0, 0]);

  const ref = useRef<Mesh>(null!);
  // const rand = useMemo(() => Math.random(), []);
  const strength = useRef(0);
  const displaceRef = useRef<
    DisplaceType & { strength: number; offset: Vector3 }
  >(null!);

  useFrame(({ clock }, dt) => {
    ref.current.position.y = clock.elapsedTime + Math.random() * 180 * (Math.sin(clock.elapsedTime + 3 * 100) * 0.5 - 0.2) / 200;
    // ref.current.position.y =
    //   Math.random() * 0.2 * Math.sin(clock.elapsedTime + Math.random() * 180);
    ref.current.position.x = clock.elapsedTime + Math.random() * 180 * (Math.cos(clock.elapsedTime + 3 * 100) * 0.5 - 0.2) / 200;
    // ref.current.position.x =
    //   Math.random() * 0.2 * Math.cos(clock.elapsedTime + Math.random() * 180);

    if (
      displaceRef.current &&
      displaceRef.current.strength !== strength.current
    ) {
      displaceRef.current.strength = lerp(
        displaceRef.current.strength, //
        strength.current,
        0.1
      );
    }

    if (strength.current > 0) {
      displaceRef.current.offset.x += 0.3 * dt;
    }
  });

  // useFrame(() => {
  //   values.current[0] = lerp(values.current[0], (values.current[0] * Math.PI) / 5, 0.2)
  //   values.current[1] = lerp(values.current[1], (values.current[1] * Math.PI) / 5, 0.2)
  //   api.position.set(state.mouse.x * 10, state.mouse.y * 5, 0);
  // });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "#2b6c76" : "#720b23"}
      />
    </mesh>
  );
};
