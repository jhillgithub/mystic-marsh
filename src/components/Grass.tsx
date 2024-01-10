import { usePositions } from "@hooks/usePositions";
import { useLayoutEffect, useMemo, useRef } from "react";
import {
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  SphereGeometry,
} from "three";

const Grass = () => {
  const ref = useRef<InstancedMesh>(null);
  const sphereGeometry = useMemo(() => new SphereGeometry(0.5, 16, 16), []);
  const material = useMemo(
    () => new MeshStandardMaterial({ color: "hotpink" }),
    []
  );
  const positions = usePositions();
  const dummy = useMemo(() => new Object3D(), []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    for (let i = 0; i < positions.length; i++) {
      const [x, y, z] = positions[i];
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
  });
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, positions.length]}>
      <sphereGeometry args={[0.025, 16, 16]} />
      <meshBasicMaterial color="hotpink" />
    </instancedMesh>
  );
};

export default Grass;
