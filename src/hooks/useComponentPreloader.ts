import { useEffect } from "react";

export const useComponentPreloader = () => {
  useEffect(() => {
    const preloadComponents = () => {
      // Preload components after initial render
      setTimeout(() => {
        import("../components/CodeBlock");
      }, 1000);

      setTimeout(() => {
        import("../components/ResumeCards");
      }, 2000);

      setTimeout(() => {
        import("../components/BotExplainer");
      }, 3000);
    };

    // Use requestIdleCallback if available
    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadComponents, { timeout: 5000 });
    } else {
      setTimeout(preloadComponents, 2000);
    }
  }, []);
};
