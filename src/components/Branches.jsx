import { useGLTF } from "@react-three/drei";

export function Branches(props) {
  const { nodes, materials } = useGLTF("/models/branches-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.dry_branches_medium_01_c.geometry}
        material={materials.dry_branches_medium_01}
        position={[0.049, -0.041, -0.975]}
        rotation={[3.004, 0.247, -3.125]}
      />
    </group>
  );
}

useGLTF.preload("/models/branches-transformed.glb");
