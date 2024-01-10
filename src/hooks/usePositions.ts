import { useMemo } from "react";
import { instancePositions } from "../data/instance-positions";
export const usePositions = () => {
  const positions = useMemo(() => {
    return [...instancePositions];
  }, []);
  return positions;
};
