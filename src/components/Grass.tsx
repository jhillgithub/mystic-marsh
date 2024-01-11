import { useGrassMeshes } from "@hooks/useGrassMeshes";
import { usePositions } from "@hooks/usePositions";
import { useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { InstancedMesh, MeshStandardMaterial, RepeatWrapping } from "three";
import { GrassInstancedMesh } from "./GrassInstancedMesh";

const Grass = () => {
  const ref = useRef<InstancedMesh>(null);
  const grass = useGrassMeshes();
  const positions = usePositions();

  const grassTexture = useTexture("textures/grass_medium_01_diff_1k.jpg");
  const grassMaterial = useMemo(() => {
    const scale = 6.5;
    grassTexture.wrapS = RepeatWrapping;
    grassTexture.wrapT = RepeatWrapping;
    grassTexture.repeat.set(1 / scale, 1 / scale);
    return new MeshStandardMaterial({
      map: grassTexture,
      emissiveIntensity: 0.25,
      roughness: 1,
      metalness: 0.5,
      color: "#909090",
      // color: "#4c593e", // Darker shade
      // emissive: "#000000", // Reduce or remove emissive light
    });
  }, [grassTexture]);

  /** For simplicity, divide the shuffled positions array by the
   * number of meshes and give the remainder to the last mesh.
   */
  const grassWithPositions = useMemo(() => {
    const numPositionsPerObject = Math.floor(positions.length / grass.length);
    const remainder = positions.length % grass.length;
    let currentPositionIndex = 0;

    return grass.map((object, index) => {
      const numPositions =
        numPositionsPerObject + (index === grass.length - 1 ? remainder : 0);
      const objectPositions = positions.slice(
        currentPositionIndex,
        currentPositionIndex + numPositions
      );
      currentPositionIndex += numPositions;
      return { ...object, material: grassMaterial, positions: objectPositions };
    });
  }, [grass, positions]);

  return (
    <>
      {grassWithPositions.map((grass, index) => (
        <GrassInstancedMesh key={grass.name + index} grass={grass} />
      ))}
    </>
  );
};

export default Grass;
