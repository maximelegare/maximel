import { Suspense, useMemo } from "react";
import { Canvas, AxesHelperProps } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "~/components/canvas/Sphere";

import { Manager } from "~/hooks/useYoka";

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

  console.log(x, y, z);

  const bubbles = useMemo(
    () =>
      Array.from(Array(10).keys()).map((_, idx) => {
        const x = randomizeSelfOrOposite(Math.floor(Math.random() * 80));
        const y = 0;
        const z = randomizeSelfOrOposite(Math.floor(Math.random() * 40));

        return <Sphere key={idx} args={[4, 64, 64]} position={[x, y, z]} />;
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
            <Sphere args={[4, 64, 64]} position={[x, y, z]} />
            {bubbles.map((bubble) => bubble)}
          </Suspense>
        </Manager>
      </Canvas>
    </div>
  );
}
