import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "~/components/canvas/box";
// import Bird from '../components/Bird'

export function Boxes() {
  const boxes = useMemo(
    () =>
      Array.from(Array(10).keys()).map((_, index) => {
        const x =
          (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
        const y = -10 + Math.random() * 20;
        const z = -5 + Math.random() * 10;
        // const bird = ["stork", "parrot", "flamingo"][
        //   Math.round(Math.random() * 2)
        // ];
        // const speed = bird === "stork" ? 0.5 : bird === "flamingo" ? 2 : 5;
        const speed = 2
        // const factor =
        //   bird === "stork"
        //     ? 0.5 + Math.random()
        //     : bird === "flamingo"
        //     ? 0.25 + Math.random()
        //     : 1 + Math.random() - 0.5;
        const factor = 0.25

        return {
          key: index,
          position: [x, y, z],
          rotation: [0, x > 0 ? Math.PI : 0, 0],
          speed,
          factor,
          //   url: `/glb/${bird}.glb`,
        };
      }),
    []
  );

  return (
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <OrbitControls />
      <Suspense fallback={null}>
        {boxes.map((props) => (
          //   <Bird {...props} key={props.key} />
          <Box {...props} key={props.key} />
        ))}
      </Suspense>
    </Canvas>
  );
}
