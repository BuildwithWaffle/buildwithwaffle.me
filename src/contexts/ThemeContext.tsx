"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  parseSnapshot,
  setPreference,
  subscribe,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/theme";

export interface ThemeState {
  /** What the user chose: an explicit theme, or "system" to follow the OS. */
  preference: ThemePreference;
  /** What that actually resolves to right now. */
  resolvedTheme: ResolvedTheme;
  setTheme: (preference: ThemePreference) => void;
  /** Cycles light -> dark -> system, for the single-button toggle. */
  cycleTheme: () => void;
  /** True once the client store has taken over from the server snapshot. */
  mounted: boolean;
}

const ORDER: ThemePreference[] = ["light", "dark", "system"];

/** Canonical "have we hydrated yet" read: false on the server, true after. */
const emptySubscribe = () => () => {};
const alwaysTrue = () => true;
const alwaysFalse = () => false;

/**
 * No provider needed — every consumer subscribes to the same external store,
 * so this is safe to call from any client component.
 */
export function useTheme(): ThemeState {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const mounted = useSyncExternalStore(
    emptySubscribe,
    alwaysTrue,
    alwaysFalse,
  );
  const { preference, resolvedTheme } = parseSnapshot(snapshot);

  const cycleTheme = useCallback(() => {
    const current = parseSnapshot(getSnapshot()).preference;
    const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
    setPreference(next);
  }, []);

  return {
    preference,
    resolvedTheme,
    setTheme: setPreference,
    cycleTheme,
    mounted,
  };
}
