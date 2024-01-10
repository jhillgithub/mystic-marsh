import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Experience from "./Experience";

// function CameraRig() {
//   const { camera } = useThree();
//   useEffect(() => {
//     camera.position.set(0, 20, 100);
//     camera.lookAt(1000, 0, -100);
//   }, [camera]);
//   return null;
// }

const App = () => {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#eee"]} />
        <PerspectiveCamera makeDefault position={[0, 20, 100]} />

        {/* <CameraRig /> */}
        <OrbitControls />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </>
  );
};

export default App;
