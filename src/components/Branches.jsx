import { useGLTF } from "@react-three/drei";

export function Branches(props) {
  const { nodes, materials } = useGLTF("/models/branches.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="dry_branches_medium_01_c"
        geometry={nodes.dry_branches_medium_01_c.geometry}
        material={materials.dry_branches_medium_01}
        position={[0.049, -0.041, -0.975]}
        rotation={[3.004, 0.247, -3.125]}
      />
      <mesh
        name="dry_branches_medium_01_b"
        geometry={nodes.dry_branches_medium_01_b.geometry}
        material={materials.dry_branches_medium_01}
        position={[0.017, 0.061, -0.063]}
      />
      <mesh
        name="dry_branches_medium_01_a"
        geometry={nodes.dry_branches_medium_01_a.geometry}
        material={materials.dry_branches_medium_01}
        position={[0, 0.124, 0]}
        rotation={[0, 0.186, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/branches.glb");
