/**
 * Theme store.
 *
 * The user picks one of three preferences; "system" follows the OS setting and
 * keeps following it if the OS flips while the page is open. The resolved
 * light/dark value is mirrored onto <html data-theme> because that is the
 * selector every token in globals.css hangs off.
 *
 * This is a plain external store rather than React state so that
 * useSyncExternalStore can read it during render — reading it in an effect and
 * calling setState is the cascading-render pattern React now warns about.
 */

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
const CHANGE_EVENT = "waffle:themechange";

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

function prefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function readStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "system";
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(stored) ? stored : "system";
  } catch {
    // Private browsing or blocked storage: fall back to following the OS.
    return "system";
  }
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === "system") return prefersDark() ? "dark" : "light";
  return preference;
}

export function applyTheme(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = resolved;
}

/**
 * Snapshots must be referentially stable between notifications, so the store
 * caches a single "preference:resolved" string and only rebuilds it when the
 * underlying value actually differs.
 */
let snapshot = "system:light";

function computeSnapshot(): string {
  const preference = readStoredPreference();
  return `${preference}:${resolveTheme(preference)}`;
}

export function getSnapshot(): string {
  const next = computeSnapshot();
  if (next !== snapshot) snapshot = next;
  return snapshot;
}

export function getServerSnapshot(): string {
  return "system:light";
}

export function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const handle = () => {
    // Keep the DOM attribute in step before telling React, so the paint that
    // follows the notification already has the right tokens.
    const preference = readStoredPreference();
    applyTheme(resolveTheme(preference));
    onChange();
  };

  media.addEventListener("change", handle);
  // Same-tab updates from setPreference.
  window.addEventListener(CHANGE_EVENT, handle);
  // Other tabs writing localStorage.
  window.addEventListener("storage", handle);

  return () => {
    media.removeEventListener("change", handle);
    window.removeEventListener(CHANGE_EVENT, handle);
    window.removeEventListener("storage", handle);
  };
}

export function setPreference(preference: ThemePreference) {
  try {
    if (preference === "system") {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      window.localStorage.setItem(THEME_STORAGE_KEY, preference);
    }
  } catch {
    // Storage unavailable: the choice still applies for this page view.
  }
  applyTheme(resolveTheme(preference));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function parseSnapshot(value: string): {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
} {
  const [preference, resolvedTheme] = value.split(":");
  return {
    preference: isThemePreference(preference) ? preference : "system",
    resolvedTheme: resolvedTheme === "dark" ? "dark" : "light",
  };
}

/**
 * Runs before first paint, inlined into <head>. Without it the page renders
 * with light tokens and then snaps to dark once React hydrates.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s==="dark"||((s!=="light")&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light";}catch(e){document.documentElement.dataset.theme="light";}})();`;
