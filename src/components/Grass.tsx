import { useGrassMeshes } from "@hooks/useGrassMeshes";
import { usePositions } from "@hooks/usePositions";
import { useLayoutEffect, useMemo, useRef } from "react";
import { InstancedMesh, Object3D } from "three";

const Grass = () => {
  const ref = useRef<InstancedMesh>(null);
  const grass = useGrassMeshes()[13];
  const positions = usePositions();
  const dummy = useMemo(() => new Object3D(), []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    for (let i = 0; i < positions.length; i++) {
      const [x, y, z] = positions[i];
      dummy.position.set(x, z, -y);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    // ref.current.rotation.x = -Math.PI;
  });
  return (
    <instancedMesh
      ref={ref}
      args={[undefined, undefined, positions.length]}
      geometry={grass.geometry}
      material={grass.material}
      scale={100}
    />
  );
};

export default Grass;
