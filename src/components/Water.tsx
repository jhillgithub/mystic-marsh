import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { useLayoutEffect, useRef } from "react";
import { Color, type Mesh } from "three";

const Water = () => {
  const ref = useRef<Mesh>(null);
  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 0.95, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    // thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
    thickness: {
      value: 0.6,
      min: 0,
      max: 10,
      step: 0.01,
    },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.75, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.01, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.05, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.1, min: 0, max: 1 },
    attenuationDistance: { value: 0.13, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#c9ffa1",
    bg: "#839681",
  });

  useLayoutEffect(() => {
    if (!ref.current) return;
    // ref.current.rotation.x = -Math.PI / 2;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[200, 20, 200]} />
      <MeshTransmissionMaterial
        background={new Color(config.bg)}
        {...config}
      />{" "}
    </mesh>
  );
};

export default Water;
