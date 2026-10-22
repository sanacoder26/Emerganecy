// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel-ready build:
//   - `nitro.preset: "vercel"` writes the Vercel Build Output API tree to .vercel/output
//     (prerendered static files plus a serverless function for anything not prerendered).
//     The Lovable sandbox preview overrides this with its own Cloudflare target.
//   - `/` is the only route, so it is prerendered to a static index.html at build time.
//     autoStaticPathsDiscovery stays off so nothing else is captured by accident.
export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  nitro: { preset: "vercel" },
});
