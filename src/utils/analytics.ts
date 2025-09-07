// Google Analytics Measurement ID from environment variables
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  // Only initialize in production
  if (import.meta.env.MODE !== "production") {
    console.log("GA skipped in development mode");
    return;
  }

  if (!GA_MEASUREMENT_ID) {
    console.warn("GA_MEASUREMENT_ID not found in environment variables");
    return;
  }

  // Load gtag script dynamically
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window.gtag !== "function") return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track interactions with resume sections
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", "engagement", sectionName);
};

// Track theme toggle
export const trackThemeToggle = (theme: "light" | "dark") => {
  trackEvent("theme_toggle", "ui_interaction", theme);
};

// Track component load times (integrates with existing performance monitoring)
export const trackPerformance = (componentName: string, loadTime: number) => {
  trackEvent(
    "component_load",
    "performance",
    componentName,
    Math.round(loadTime)
  );
};
