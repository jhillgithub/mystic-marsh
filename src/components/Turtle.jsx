import { useAnimations, useGLTF } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { SkeletonUtils } from "three-stdlib";

const ANIMATION_MAX_DELAY = 100;

export function Turtle({ playAnimation = true, ...props }) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF(
    "/models/turtle-transformed.glb"
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!playAnimation) return;
    if (actions[names[0]]) {
      const delay = Math.random() * ANIMATION_MAX_DELAY;

      const timer = setTimeout(() => {
        actions[names[0]].timeScale = 0.025;
        actions[names[0]].play();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [playAnimation, actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.EP_Turtle_Mat}
          skeleton={nodes.Object_7.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.material}
          skeleton={nodes.Object_9.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.Eye_Outer}
          skeleton={nodes.Object_10.skeleton}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/turtle-transformed.glb");
