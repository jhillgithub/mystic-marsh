import {
  BakeShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
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
      <Canvas shadows>
        <color attach="background" args={["#22424"]} />

        <SoftShadows size={80} samples={10} />
        <fog attach="fog" color="#3C4D03" near={150} far={200} />
        {/* <fogExp2 args={["#3c4d03", 0.00075]} attach="fog" /> */}

        <PerspectiveCamera makeDefault position={[-5, 30, 45]} />
        {/* <PerspectiveCamera makeDefault position={[0, 40, 90]} /> */}

        {/* <CameraRig /> */}
        <OrbitControls target={[0, 15, 0]} />
        <Suspense fallback={null}>
          <Experience />
          <BakeShadows />
        </Suspense>
        <SphereEnvironment />
        <Environment
          resolution={256}
          background={false}
          files={"textures/envmap.hdr"}
        />
      </Canvas>
    </>
  );
};

export default App;
