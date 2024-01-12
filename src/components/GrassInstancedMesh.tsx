import { useFrame, type InstancedMeshProps } from "@react-three/fiber";
import {
  useLayoutEffect,
  useMemo,
  useRef,
  type PropsWithChildren,
} from "react";
import { calculateWindRotation, randomBetween } from "src/lib/utils";
import { BufferGeometry, Material, Object3D, type InstancedMesh } from "three";

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
  const { positions } = grass;
  const grassRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  useLayoutEffect(() => {
    if (!grassRef.current) return;
    for (let i = 0; i < positions.length; i++) {
      const [x, y, z] = positions[i];
      dummy.position.set(x, z, -y);
      dummy.rotation.set(0, (Math.random() * 360 * Math.PI) / 180, 0);

      const scale = randomBetween(0.4, 0.9);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      grassRef.current.setMatrixAt(i, dummy.matrix);
    }
    // ref.current.rotation.x = -Math.PI;
  });

  useFrame(({ clock }) => {
    if (!grassRef.current) return;
    const elapsedTime = clock.getElapsedTime();

    for (let i = 0; i < grassRef.current.count; i++) {
      grassRef.current.getMatrixAt(i, dummy.matrix);

      let rotation = calculateWindRotation(i, elapsedTime);
      dummy.rotation.setFromRotationMatrix(dummy.matrix);
      dummy.position.setFromMatrixPosition(dummy.matrix);
      dummy.scale.setFromMatrixScale(dummy.matrix);
      dummy.rotation.set(rotation.x, rotation.y, rotation.z);

      dummy.updateMatrix();
      grassRef.current.setMatrixAt(i, dummy.matrix);
    }
    grassRef.current.instanceMatrix.needsUpdate = true;
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
