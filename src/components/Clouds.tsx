import { Cloud, Clouds as DreiClouds } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { AmbientLight, Group, MeshBasicMaterial } from "three";

export const Clouds = () => {
  const clouds = useRef<Group>(null);
  const { color, x, y, z, ...config } = useControls({
    // seed: { value: 1, min: 1, max: 100, step: 1 },
    // segments: { value: 1, min: 1, max: 80, step: 1 },
    // volume: { value: 100, min: 0, max: 100, step: 0.1 },
    // opacity: { value: 0.125, min: 0, max: 1, step: 0.01 },
    // fade: { value: 10, min: 0, max: 400, step: 1 },
    // growth: { value: 20, min: 0, max: 20, step: 1 },
    speed: { value: 0.065, min: 0, max: 1, step: 0.01 },
    x: { value: 6, min: 0, max: 100, step: 1 },
    y: { value: 1, min: 0, max: 100, step: 1 },
    z: { value: 1, min: 0, max: 100, step: 1 },
    color: "white",
  });
  useEffect(() => {
    if (!clouds.current) return;
    clouds.current.layers.set(1);
  }, []);
  return (
    <>
      <group ref={clouds} position={[0, 350, -500]}>
        <DreiClouds material={MeshBasicMaterial}>
          <Cloud
            {...config}
            bounds={[x, y, z]}
            // color="#eed0d0"
            // seed={2}
          >
            {/* <pointLight intensity={15000} position={[0, 0, 100]} color="blue" /> */}
          </Cloud>
          <Cloud
            {...config}
            concentrate="outside"
            growth={100}
            color="#ffccdd"
            opacity={0.5}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </DreiClouds>
      </group>
    </>
  );
};
