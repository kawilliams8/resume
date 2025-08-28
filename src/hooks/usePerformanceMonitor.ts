import { useEffect } from "react";

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor initial load performance
    const startTime = performance.now();

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "measure" || entry.entryType === "navigation") {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
      });
    });

    observer.observe({ entryTypes: ["measure", "navigation"] });

    // Log component mount time
    return () => {
      const endTime = performance.now();
      console.log(`🚀 App rendered in ${(endTime - startTime).toFixed(2)}ms`);
      observer.disconnect();
    };
  }, []);

  // Monitor lazy component loads
  const trackComponentLoad = (componentName: string) => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      console.log(`📦 ${componentName} loaded in ${loadTime.toFixed(2)}ms`);

      // Flag slow components in development
      if (process.env.NODE_ENV === "development" && loadTime > 500) {
        console.warn(
          `⚠️ Slow component: ${componentName} took ${loadTime.toFixed(2)}ms`
        );
      }
    };
  };

  return { trackComponentLoad };
};
