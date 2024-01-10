import { useLayoutEffect, useRef } from "react";
import type { Mesh } from "three";

const Water = () => {
  const ref = useRef<Mesh>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.rotation.x = -Math.PI / 2;
  });
  return (
    <mesh ref={ref} position={[0, 10, 0]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

export default Water;
