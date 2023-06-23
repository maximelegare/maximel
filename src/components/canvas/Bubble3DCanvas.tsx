import { Suspense, useMemo } from "react";
import { Canvas, AxesHelperProps  } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "~/components/canvas/Sphere";



import { Manager } from "~/hooks/useYoka";

export function Bubble3DCanvas() {
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
        const speed = 2;
        // const factor =
        //   bird === "stork"
        //     ? 0.5 + Math.random()
        //     : bird === "flamingo"
        //     ? 0.25 + Math.random()
        //     : 1 + Math.random() - 0.5;
        const factor = 0.25;

        return {
          key: index,
          position: [x, y, z],
          rotation: [0, x > 0 ? Math.PI : 0, 0],
          speed,
          factor,
          url: `/glb/stork.glb`,
        };
      }),
    []
  );

  return (
    <div className="h-full w-full">
      <Canvas orthographic camera={{ zoom: 10, position: [0, 80, 0] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Manager>
          <Suspense fallback={null}>
            <Sphere args={[4, 64, 64]} />
          </Suspense>
        </Manager>
      </Canvas>
    </div>
  );
}
