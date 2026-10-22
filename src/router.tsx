import { QueryClient, timeoutManager } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// During prerender TanStack Query arms one garbage-collection timer per query rendered in SSR,
// which keeps the build process alive after every page is on disk. Unref'ing those timers lets
// the build exit once output is written.
const isPrerendering =
  typeof process !== "undefined" && process.env["TSS_PRERENDERING"] === "true";
if (isPrerendering) {
  timeoutManager.setTimeoutProvider({
    setTimeout: (cb, ms) => {
      const id = setTimeout(cb, ms);
      (id as { unref?: () => void }).unref?.();
      return id;
    },
    clearTimeout: (id) => clearTimeout(id),
    setInterval: (cb, ms) => {
      const id = setInterval(cb, ms);
      (id as { unref?: () => void }).unref?.();
      return id;
    },
    clearInterval: (id) => clearInterval(id),
  });
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
