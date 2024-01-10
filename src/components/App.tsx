import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Experience from "./Experience";
import { SphereEnvironment } from "./SphereEnvironment";

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
        <PerspectiveCamera makeDefault position={[0, 40, 90]} />

        {/* <CameraRig /> */}
        <OrbitControls />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <SphereEnvironment />
        <Environment background={false} files={"textures/envmap.hdr"} />
      </Canvas>
    </>
  );
};

export default App;
