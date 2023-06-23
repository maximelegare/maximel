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


export const Box = ({ ...props }: GroupProps) => {
  const [hovered, setHover] = useState(false);


  // const createBubble = () => {
  //   class Bubble {
  //     public element: ReactNode;
  //     public args;
  //     public deltaX;
  //     public deltaY;
  //     public ref;
  //     public size;
  
  //     constructor(args: number[], ref:Ref<Mesh<BufferGeometry, Material | Material[]>>) {
  //       this.ref = ref;
  //       this.args = args;
  //       this.size = args[0] ?? 1;
  //       this.element = (
  //         <mesh ref={this.ref}>
  //           <sphereBufferGeometry args={this.args} />
  //           <meshStandardMaterial
  //             attach="material"
  //             color={hovered ? "#2b6c76" : "#720b23"}
  //           />
  //         </mesh>
  //       );
  //       this.deltaY = Math.random() * 0.1;
  //       this.deltaX = Math.random() * 0.1;
  //     }
  //   }
  //   const [ref] = useYuka({ type: Vehicle, ...props })

  //   const bubble = new Bubble([2, 64, 64]);
    
  // }



 



  

 

  // useFrame(({ clock }, dt) => {

  //   bubble.ref.current?.position.x;
  //   if (bubble.ref.current) {
  //     bubble.ref.current.position.y += bubble.deltaY;
  //     bubble.ref.current.position.x += bubble.deltaX;
  //   }
  // });

  // useFrame(() => {
  //   values.current[0] = lerp(values.current[0], (values.current[0] * Math.PI) / 5, 0.2)
  //   values.current[1] = lerp(values.current[1], (values.current[1] * Math.PI) / 5, 0.2)
  //   api.position.set(state.mouse.x * 10, state.mouse.y * 5, 0);
  // });

  // return <>{bubble.element}</>;
};



export const Sphere = ({args}:{args:number[]}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [ref] = useYuka({ })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const myRef = ref as any

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <mesh ref={myRef}>
          <sphereBufferGeometry args={args} />
          <meshStandardMaterial
            attach="material"
            // color={hovered ? "#2b6c76" : "#720b23"}
          />
        </mesh>
  )
}