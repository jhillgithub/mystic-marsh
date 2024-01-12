import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useLayoutEffect, useRef } from "react";
import { Color, type Mesh } from "three";

const size = 200;
const waveAmplitude = 0.2;
const waveFrequency = 0.05;

export const Water = () => {
  const ref = useRef<Mesh>(null);
  const config = useControls(
    "Water Controls",
    {
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
      temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
      // temporalDistortion: { value: 0.05, min: 0, max: 1, step: 0.01 },
      clearcoat: { value: 0.1, min: 0, max: 1 },
      attenuationDistance: { value: 0.13, min: 0, max: 10, step: 0.01 },
      attenuationColor: "#ffffff",
      color: "#c9ffa1",
      bg: "#839681",
    },
    { collapsed: true }
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const mesh = ref.current;
    const geometry = mesh.geometry;
    for (let h = 0; h < size; h++) {
      for (let w = 0; w < size; w++) {
        let verticesIndex = h * size + w;
        const z =
          waveAmplitude * Math.sin(clock.elapsedTime + (h + w) * waveFrequency);

        geometry.attributes.position.setZ(verticesIndex, z);
      }
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <>
      {/* <Leva hidden /> */}
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 10, 0]}>
        {/* <boxGeometry args={[200, 20, 200]} /> */}
        <planeGeometry args={[200, 200, 50, 50]} />

        <MeshTransmissionMaterial
          // wireframe
          background={new Color(config.bg)}
          {...config}
        />
      </mesh>
    </>
  );
};
