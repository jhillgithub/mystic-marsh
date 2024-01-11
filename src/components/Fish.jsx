import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { randomBetween } from "src/lib/utils";
import { Vector3 } from "three";
import { SkeletonUtils } from "three-stdlib";

const SPEED = 0.025;
const ANIMATION_MAX_DELAY = 200;

export function Fish(props) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF("/models/fish.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);

  const targetPositions = useRef({
    position1: new Vector3(10, 8, -100),
    position2: new Vector3(10, 8, 100),
  });
  const initialPosition = useRef(
    Math.random() > 0.5
      ? targetPositions.current.position1
      : targetPositions.current.position2
  );

  /** Add randomness to the initial spawn */
  useLayoutEffect(() => {
    if (!group.current) return;
    group.current.position.copy(initialPosition.current);
    group.current.position.x += (Math.random() - 0.5) * 50;
    group.current.position.z += (Math.random() - 0.5) * 400;
  }, []);

  /** In order to avoid syncing animation playback across clones,
   * randomize the start and timescale playback speed so they swim
   * at different rates.
   */
  useEffect(() => {
    if (actions[names[0]]) {
      const delay = Math.random() * ANIMATION_MAX_DELAY;

      const timer = setTimeout(() => {
        actions[names[0]].timeScale = randomBetween(0.75, 1);
        actions[names[0]].play();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [actions, names]);

  useFrame((_, delta) => {
    if (!group.current) return;

    const target = initialPosition.current.equals(
      targetPositions.current.position1
    )
      ? targetPositions.current.position2
      : targetPositions.current.position1;

    // Move towards the current target
    group.current.lookAt(target);
    group.current.position.lerp(target, delta * SPEED);

    // Check if near the target and switch target if necessary
    if (group.current.position.distanceTo(target) < 1) {
      group.current.position.x += (Math.random() - 0.5) * 50;

      targetPositions.current.position1.x += (Math.random() - 0.5) * 50;
      targetPositions.current.position1.z += (Math.random() - 0.5) * 10;
      targetPositions.current.position2.x += (Math.random() - 0.5) * 50;
      targetPositions.current.position2.z += (Math.random() - 0.5) * 10;
      initialPosition.current = target;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_34">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="body_mesh_32" />
                  <group name="eye_mesh_33" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_9.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
