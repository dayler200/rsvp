"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { useTimeOfDay, TimeOfDay } from "@/hooks/useTimeOfDay";

interface ThemeContextType {
  timeOfDay: TimeOfDay;
  isNight: boolean;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  timeOfDay: "day",
  isNight: false,
  mounted: false,
});

const emptySubscribe = () => () => {};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const timeOfDay = useTimeOfDay();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", timeOfDay);
    }
  }, [timeOfDay]);

  return (
    <ThemeContext.Provider
      value={{
        timeOfDay,
        isNight: timeOfDay === "night",
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
