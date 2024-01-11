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

const App = () => {
  return (
    <>
      <Canvas shadows>
        <color attach="background" args={["#22424"]} />

        <SoftShadows size={80} samples={10} />
        {/* <fog attach="fog" color="#3C4D03" near={150} far={200} /> */}

        <PerspectiveCamera makeDefault position={[-5, 30, 45]} />
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
