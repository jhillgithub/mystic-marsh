import { randomBetween } from "src/lib/utils";
import { Branches } from "./Branches";
import { Fish } from "./Fish";
import { Grass } from "./Grass";
import { Ground } from "./Ground";
import { Trunk } from "./Trunk";
import { Water } from "./Water";
import { Willow } from "./Willow";
import { Turtle } from "./Turtle";

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
      <Turtle
        scale={50}
        rotation={[0, Math.PI / 2, 0]}
        position={[16, 18, -100]}
        playAnimation={true}
      />
      <Willow scale={10} position={[65, 0, 110]} />
      {
        /** big fish */
        Array.from({ length: 5 }, (_, index) => (
          <Fish key={`fish-${index}`} scale={20} />
        ))
      }
      {
        /**smol fish */
        Array.from({ length: 8 }, (_, index) => (
          <Fish key={`fish-${index}`} scale={randomBetween(4, 8)} />
        ))
      }
    </group>
  );
};

export default Experience;
