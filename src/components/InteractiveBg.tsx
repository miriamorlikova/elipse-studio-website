import React, { useRef, useMemo, useCallback } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Points as ThreePoints } from "three";

type PointsRef = React.MutableRefObject<ThreePoints | null>;

function PointsComponent({ pointsRef }: { pointsRef: PointsRef }) {
  // SLOW ROTATION EFECT
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.00005; // SLOWING ROTATION
      pointsRef.current.rotation.y += 0.00005;
    }
  });

  // Float32Array, RANDOM POSITIONS FROM -5 TO 5
  const generateDots = useCallback((count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = Math.random() * 10 - 5;
      positions[i * 3 + 1] = Math.random() * 10 - 5;
      positions[i * 3 + 2] = Math.random() * 10 - 5;
    }
    return positions;
  }, []);

  const positions = useMemo(() => generateDots(1000), [generateDots]);

  return (
    <Points ref={pointsRef} positions={positions} scale={1}>
      <PointMaterial
        transparent
        color="rgba(253,248,243,20)"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function InteractiveBg() {
  const pointsRef = useRef<ThreePoints | null>(null);

  return (
    <div className="relative h-full w-full">
      <Canvas className="absolute left-0 top-0 h-full w-full">
        <PointsComponent pointsRef={pointsRef} />
      </Canvas>
    </div>
  );
}
