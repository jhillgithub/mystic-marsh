import {
  BakeShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./Experience";
import { SphereEnvironment } from "./SphereEnvironment";
import { Stats } from "@react-three/drei";
import { LoadingScreen } from "./LoadingScreen";
import { ResonsiveCamera } from "./ResonsiveCamera";
const App = () => {
  return (
    <>
      <LoadingScreen />
      <Canvas shadows dpr={[1, 1.5]}>
        <color attach="background" args={["#22424"]} />

        <SoftShadows size={80} samples={10} />
        {/* <fog attach="fog" color="#3C4D03" near={150} far={200} /> */}

        <ResonsiveCamera />
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
        {/* <Stats /> */}
      </Canvas>
    </>
  );
};

export default App;
