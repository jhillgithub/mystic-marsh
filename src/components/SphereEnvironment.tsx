import { Environment, useTexture } from "@react-three/drei";
import { BackSide } from "three";

export function SphereEnvironment() {
  const texture = useTexture("textures/envmap.jpg");

  return (
    <Environment background near={1} far={1000} resolution={256}>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial map={texture} side={BackSide} />
      </mesh>
    </Environment>
  );
}
