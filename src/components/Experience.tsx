import Grass from "./Grass";
import { Ground } from "./Ground";
import Water from "./Water";
function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}
const Experience = () => {
  return (
    <group rotation={[0, 0, 0]}>
      <Ground />
      <Grass />
      <Water />
    </group>
  );
};

export default Experience;
