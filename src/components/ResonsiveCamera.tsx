import { useMobile } from "@hooks/useMobile";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { degreesToRadians } from "../lib/utils";

export const ResonsiveCamera = () => {
  useMobile();

  return (
    <>
      <PerspectiveCamera makeDefault position={[-5, 30, 45]} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={1}
        maxDistance={48}
        minPolarAngle={0}
        maxPolarAngle={degreesToRadians(95)}
        target={[0, 20, 0]}
      />
    </>
  );
};
