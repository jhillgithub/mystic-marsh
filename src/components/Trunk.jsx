import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export function Trunk(props) {
  const { scene, nodes, materials } = useGLTF("/models/trunk.glb");
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
        name="dead_tree_trunk"
        geometry={nodes.dead_tree_trunk.geometry}
        material={materials.dead_tree_trunk}
      />
    </group>
  );
}

useGLTF.preload("/models/trunk.glb");
