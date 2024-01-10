import type { InstancedMeshProps } from "@react-three/fiber";
import {
  useLayoutEffect,
  useMemo,
  useRef,
  type PropsWithChildren,
} from "react";
import { randomBetween } from "src/lib/utils";
import { Object3D, type InstancedMesh, BufferGeometry, Material } from "three";

type Grass = {
  name: string;
  geometry: BufferGeometry;
  material: Material;
  positions: number[][];
};

type GrassInstancedMeshProps = PropsWithChildren<{
  grass: Grass;
}> &
  InstancedMeshProps;

export const GrassInstancedMesh = ({
  grass,
  children,
  ...props
}: GrassInstancedMeshProps) => {
  const { name, geometry, material, positions } = grass;
  const grassRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  useLayoutEffect(() => {
    if (!grassRef.current) return;
    for (let i = 0; i < positions.length; i++) {
      const [x, y, z] = positions[i];
      dummy.position.set(x, z, -y);
      dummy.rotation.set(0, Math.random() * Math.PI, 0);

      const scale = randomBetween(0.4, 0.9);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      grassRef.current.setMatrixAt(i, dummy.matrix);
    }
    // ref.current.rotation.x = -Math.PI;
  });
  return (
    <instancedMesh
      ref={grassRef}
      args={[undefined, undefined, positions.length]}
      geometry={grass.geometry}
      material={grass.material}
      scale={100}
      {...props}
    >
      {children}
    </instancedMesh>
  );
};
