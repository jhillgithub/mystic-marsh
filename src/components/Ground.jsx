import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export function Ground(props) {
  const { scene, nodes, materials } = useGLTF("/models/ground-transformed.glb");
  useMemo(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Landscape"
        geometry={nodes.Landscape.geometry}
        material={materials.ground}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/models/ground-transformed.glb");
