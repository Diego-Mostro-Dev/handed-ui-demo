// hooks/useHandSide.js
import { useHand } from "./useHand";

export function useHandSide() {
  const { hand } = useHand();
  return { side: hand === "right" ? "end" : "start" };
}
