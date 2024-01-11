import { Branches } from "./Branches";
import Grass from "./Grass";
import { Ground } from "./Ground";
import { Trunk } from "./Trunk";
import Water from "./Water";
import { Willow } from "./Willow";
function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}
const Experience = () => {
  return (
    <group rotation={[0, 0, 0]}>
      <Ground />
      <Grass />
      <Water />
      <Branches
        scale={80}
        position={[-5, 10, 110]}
        rotation={[0, Math.PI / 4, Math.PI / 3]}
      />
      <Trunk scale={50} position={[0, 10, -100]} />
      <Willow scale={10} position={[65, 0, 110]} />
    </group>
  );
};

export default Experience;
