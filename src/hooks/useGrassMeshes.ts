import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import type { Mesh } from "three";

export function useGrassMeshes() {
  const { nodes, materials } = useGLTF("/models/grass.glb");

  const grassMeshes = useMemo(() => {
    return [
      {
        name: "grass_medium_01_large_a_LOD0",
        geometry: (nodes.grass_medium_01_large_a_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_large_b_LOD0",
        geometry: (nodes.grass_medium_01_large_b_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_large_c_LOD0",
        geometry: (nodes.grass_medium_01_large_c_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_mid_a_LOD0",
        geometry: (nodes.grass_medium_01_mid_a_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_mid_b_LOD0",
        geometry: (nodes.grass_medium_01_mid_b_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_mid_c_LOD0",
        geometry: (nodes.grass_medium_01_mid_c_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_small_a_LOD0",
        geometry: (nodes.grass_medium_01_small_a_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_small_b_LOD0",
        geometry: (nodes.grass_medium_01_small_b_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tall_a_LOD0",
        geometry: (nodes.grass_medium_01_tall_a_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tall_b_LOD0",
        geometry: (nodes.grass_medium_01_tall_b_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tall_c_LOD0",
        geometry: (nodes.grass_medium_01_tall_c_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tiny_a_LOD0",
        geometry: (nodes.grass_medium_01_tiny_a_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tiny_b_LOD0",
        geometry: (nodes.grass_medium_01_tiny_b_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tiny_c_LOD0",
        geometry: (nodes.grass_medium_01_tiny_c_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tiny_d_LOD0",
        geometry: (nodes.grass_medium_01_tiny_d_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tiny_e_LOD0",
        geometry: (nodes.grass_medium_01_tiny_e_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
      {
        name: "grass_medium_01_tiny_f_LOD0",
        geometry: (nodes.grass_medium_01_tiny_f_LOD0 as Mesh).geometry,
        material: materials.grass_medium_01,
      },
    ];
  }, [nodes, materials]);

  return grassMeshes;
}

// Preload the model
useGLTF.preload("/models/grass.glb");
