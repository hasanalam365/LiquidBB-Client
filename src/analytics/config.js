// src/analytics/config.js

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() || "";

export const isAnalyticsEnabled = () => {
  return Boolean(GA_MEASUREMENT_ID);
};

export const isDev = import.meta.env.DEV;

// Console debug
export const DEBUG_ANALYTICS = isDev;

// GA4 DebugView debug_mode
// Development-এ true হবে, production-এ false।
export const GA4_DEBUG_MODE = isDev;