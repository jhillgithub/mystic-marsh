import { useMemo } from "react";
import { instancePositions } from "../data/instance-positions";
import { riverMouthPositions } from "src/data/river-mouth";
import { LCG } from "../lib/utils";
export const usePositions = () => {
  const shuffledPositions = useMemo(() => {
    const lcg = new LCG(42); // seeded random to reproduce the overall layout
    const positions = [...instancePositions, ...riverMouthPositions];

    /**https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(lcg.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    const river = [...riverMouthPositions];
    for (let i = river.length - 1; i > 0; i--) {
      const j = Math.floor(lcg.random() * (i + 1));
      [river[i], river[j]] = [river[j], river[i]];
    }

    return positions;
  }, []);
  return shuffledPositions;
};
