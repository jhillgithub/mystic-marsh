import { useMemo } from "react";
import { instancePositions } from "../data/instance-positions";
import { LCG } from "src/lib/utils";
export const usePositions = () => {
  const shuffledPositions = useMemo(() => {
    const positions = [...instancePositions];
    const lcg = new LCG(42); // seeded random to reproduce the overall layout
    /**https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(lcg.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    return positions;
  }, []);
  return shuffledPositions;
};
