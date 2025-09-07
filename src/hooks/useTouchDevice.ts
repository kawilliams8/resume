import { useMemo } from "react";

export const useTouchDevice = (): boolean => {
  return useMemo(() => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);
};