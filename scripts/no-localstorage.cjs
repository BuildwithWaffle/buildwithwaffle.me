// Node 22+ exposes a `localStorage` global that has no methods unless
// --localstorage-file is passed. Next's dev error overlay feature-detects the
// global and then calls getItem(), which crashes SSR with
// "localStorage.getItem is not a function". A server has no web storage, so
// the correct fix is to remove the global.
try { delete globalThis.localStorage; } catch {}
try { delete globalThis.sessionStorage; } catch {}
