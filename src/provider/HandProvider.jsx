import { useState, useEffect, useMemo } from "react";
import { HandContext } from "../context/HandContext";

export function HandProvider({
  children,
  defaultHand = "right",
  persist = true,
  storage = "localStorage",
}) {
  const getInitialHand = () => {
    if (typeof window === "undefined") {
      return defaultHand;
    }

    const storageApi =
      storage === "sessionStorage"
        ? window.sessionStorage
        : window.localStorage;

    if (persist) {
      const saved = storageApi.getItem("hand");
      if (saved === "left" || saved === "right") {
        return saved;
      }
    }

    return defaultHand;
  };

  const [hand, setHand] = useState(getInitialHand);

  const toggle = () => {
    setHand((prev) => (prev === "right" ? "left" : "right"));
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-hand", hand);
    }

    if (persist && typeof window !== "undefined") {
      const storageApi =
        storage === "sessionStorage"
          ? window.sessionStorage
          : window.localStorage;

      storageApi.setItem("hand", hand);
    }
  }, [hand, persist, storage]);

  const value = useMemo(() => ({ hand, setHand, toggle }), [hand]);

  return <HandContext.Provider value={value}>{children}</HandContext.Provider>;
}
