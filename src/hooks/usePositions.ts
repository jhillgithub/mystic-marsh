import { useMemo } from "react";
import { instancePositions } from "../data/instance-positions";
export const usePositions = () => {
  const shuffledPositions = useMemo(() => {
    const positions = [...instancePositions];
    /**https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle */
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    return positions;
  }, []);
  return shuffledPositions;
};
