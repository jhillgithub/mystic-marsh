import { useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { calculateWindRotation } from "src/lib/utils";
import { SkeletonUtils } from "three-stdlib";

export function Willow(props) {
  const ref = useRef();
  const { scene, materials } = useGLTF("/models/willow.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  useMemo(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const elapsedTime = clock.getElapsedTime();

    ref.current.traverse((object) => {
      if (object.isMesh && object.name.includes("leaves")) {
        let rotation = calculateWindRotation(object.id, elapsedTime);
        object.rotation.set(
          0.1 * rotation.x,
          0.1 * rotation.y,
          0.1 * rotation.z
        );
      }
    });
  });

  return (
    <group {...props} dispose={null}>
      <group name="a29d8c7d8d40462d8808967e772b0766fbx" scale={0.01}>
        <group
          ref={ref}
          name="tree"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            name="tree_Malzeme010_0"
            geometry={nodes.tree_Malzeme010_0.geometry}
            material={materials["Malzeme.010"]}
          />
          <mesh
            name="tree_Malzeme010_0_1"
            geometry={nodes.tree_Malzeme010_0_1.geometry}
            material={materials["Malzeme.010"]}
          />
          <mesh
            name="tree_Malzeme010_0_2"
            geometry={nodes.tree_Malzeme010_0_2.geometry}
            material={materials["Malzeme.010"]}
          />
          <mesh
            name="leaves_Malzeme009_0"
            geometry={nodes.leaves_Malzeme009_0.geometry}
            material={materials["Malzeme.009"]}
          />
          <mesh
            name="leaves_Malzeme009_0_1"
            geometry={nodes.leaves_Malzeme009_0_1.geometry}
            material={materials["Malzeme.009"]}
          />
          <mesh
            name="leaves_Malzeme009_0_2"
            geometry={nodes.leaves_Malzeme009_0_2.geometry}
            material={materials["Malzeme.009"]}
          />
          <mesh
            name="leaves_Malzeme009_0_3"
            geometry={nodes.leaves_Malzeme009_0_3.geometry}
            material={materials["Malzeme.009"]}
          />
          <mesh
            name="leaves_Malzeme009_0_4"
            geometry={nodes.leaves_Malzeme009_0_4.geometry}
            material={materials["Malzeme.009"]}
          />
          <mesh
            name="leaves_Malzeme009_0_5"
            geometry={nodes.leaves_Malzeme009_0_5.geometry}
            material={materials["Malzeme.009"]}
          />
          <mesh
            name="leaves_Malzeme009_0_6"
            geometry={nodes.leaves_Malzeme009_0_6.geometry}
            material={materials["Malzeme.009"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/willow.glb");
