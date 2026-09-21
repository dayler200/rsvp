"use client";

import { useSyncExternalStore } from "react";

export type TimeOfDay = "day" | "night";

/** Switch from day to night at 18:00 visitor local time */
const SWITCH_HOUR = 18;

function getSnapshot(): TimeOfDay {
  return new Date().getHours() >= SWITCH_HOUR ? "night" : "day";
}

function getServerSnapshot(): TimeOfDay {
  return "day";
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 60_000);
  return () => clearInterval(interval);
}

/**
 * Returns 'day' before 6pm and 'night' at/after 6pm.
 * Subscribes via useSyncExternalStore (React 19 standard).
 * Re-evaluates every 60 seconds automatically.
 * No manual toggle — clock only.
 */
export function useTimeOfDay(): TimeOfDay {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
