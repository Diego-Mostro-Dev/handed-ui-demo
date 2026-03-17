import { useContext } from "react";
import { HandContext } from "../context/HandContext";

export function useHand() {
  const context = useContext(HandContext);

  if (!context) {
    throw new Error("useHand must be used inside HandProvider");
  }

  return context;
}
