import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#eee"]} />
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        {/* <FlyControls movementSpeed={10} /> */}
        <OrbitControls />
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="#00ffff" />
          </mesh>
          {/* <Experience /> */}
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
