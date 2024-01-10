import { useGrassMeshes } from "@hooks/useGrassMeshes";
import { usePositions } from "@hooks/usePositions";
import { useTexture } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef } from "react";
import {
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  RepeatWrapping,
} from "three";

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const Grass = () => {
  const ref = useRef<InstancedMesh>(null);
  const grass = useGrassMeshes()[6];
  const positions = usePositions();
  const dummy = useMemo(() => new Object3D(), []);

  const grassTexture = useTexture("textures/grass_medium_01_diff_1k.jpg");
  const grassMaterial = useMemo(() => {
    const scale = 0.25;
    grassTexture.wrapS = RepeatWrapping;
    grassTexture.wrapT = RepeatWrapping;
    grassTexture.repeat.set(1 / scale, 1 / scale);
    return new MeshStandardMaterial({
      map: grassTexture,
      emissiveIntensity: 0.75,
      roughness: 1,
      metalness: 0.5,
      color: "#909090",
      // color: "#4c593e", // Darker shade
      // emissive: "#000000", // Reduce or remove emissive light
    });
  }, [grassTexture]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    for (let i = 0; i < positions.length; i++) {
      const [x, y, z] = positions[i];
      dummy.position.set(x, z, -y);
      dummy.rotation.set(0, Math.random() * Math.PI, 0);

      const scale = randomBetween(0.4, 0.9);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    // ref.current.rotation.x = -Math.PI;
  });
  return (
    <instancedMesh
      ref={ref}
      args={[undefined, undefined, positions.length]}
      geometry={grass.geometry}
      material={grassMaterial}
      scale={100}
    />
  );
};

export default Grass;
