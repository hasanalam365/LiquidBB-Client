// src/analytics/analytics.js

import {
  GA_MEASUREMENT_ID,
  isAnalyticsEnabled,
  DEBUG_ANALYTICS,
  GA4_DEBUG_MODE,
} from "./config";

import { BLOCKED_PARAM_KEYS, EVENTS } from "./events";

let initialized = false;
let lastPageViewKey = "";

const log = (...args) => {
  if (DEBUG_ANALYTICS) {
    console.log("[GA4]", ...args);
  }
};

const warn = (...args) => {
  if (DEBUG_ANALYTICS) {
    console.warn("[GA4]", ...args);
  }
};

const error = (...args) => {
  if (DEBUG_ANALYTICS) {
    console.error("[GA4]", ...args);
  }
};

/**
 * Initialize GA4
 */
export const initializeAnalytics = () => {
  // Already initialized
  if (initialized) {
    log("Already initialized");
    return true;
  }

  // Measurement ID missing
  if (!GA_MEASUREMENT_ID) {
    warn(
      "GA4 is disabled because VITE_GA4_MEASUREMENT_ID is missing."
    );

    return false;
  }

  // Browser check
  if (typeof window === "undefined") {
    return false;
  }

  try {
    // Create dataLayer
    window.dataLayer = window.dataLayer || [];

    // Create gtag
    if (typeof window.gtag !== "function") {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }

    // Load Google gtag script only once
    const existingScript = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");

      script.async = true;

      script.src =
        `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

      document.head.appendChild(script);

      log("gtag.js script added");
    } else {
      log("gtag.js script already exists");
    }

    // Initialize
    window.gtag("js", new Date());

    // Configure GA4
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,

      // This is what makes events appear in GA4 DebugView
      ...(GA4_DEBUG_MODE
        ? {
            debug_mode: true,
          }
        : {}),
    });

    initialized = true;

    log("GA4 initialized successfully");
    log("Measurement ID:", GA_MEASUREMENT_ID);
    log("Debug mode:", GA4_DEBUG_MODE);

    return true;
  } catch (err) {
    error("GA4 initialization failed:", err);

    return false;
  }
};

/**
 * Sanitize GA4 parameters
 */
const sanitizeParams = (params = {}) => {
  const clean = {};

  Object.entries(params).forEach(([key, value]) => {
    const normalizedKey = key.toLowerCase();

    if (BLOCKED_PARAM_KEYS.includes(normalizedKey)) {
      warn(`Blocked parameter: ${key}`);
      return;
    }

    if (value === undefined || value === null) {
      return;
    }

    clean[key] = value;
  });

  return clean;
};

/**
 * Track GA4 event
 */
export const trackEvent = (eventName, params = {}) => {
  const cleanParams = sanitizeParams(params);

  log(`Event: ${eventName}`, cleanParams);

  // Analytics disabled
  if (!isAnalyticsEnabled()) {
    warn("Analytics disabled — Measurement ID missing.");
    return false;
  }

  // gtag unavailable
  if (typeof window === "undefined") {
    return false;
  }

  if (typeof window.gtag !== "function") {
    warn("window.gtag is not available.");
    return false;
  }

  try {
    window.gtag("event", eventName, cleanParams);

    return true;
  } catch (err) {
    error(`Failed to send event: ${eventName}`, err);

    return false;
  }
};

/**
 * Track SPA page view
 */
export const trackPageView = ({
  path,
  title,
}) => {
  const safePath = path || window.location.pathname;
  const safeTitle = title || document.title;

  const key = `${safePath}|${safeTitle}`;

  // Prevent duplicate page_view
  if (key === lastPageViewKey) {
    log("Duplicate page_view skipped:", key);
    return false;
  }

  lastPageViewKey = key;

  const pageLocation =
    `${window.location.origin}${safePath}`;

  log("Page view:", {
    path: safePath,
    title: safeTitle,
    location: pageLocation,
  });

  return trackEvent(EVENTS.PAGE_VIEW, {
    page_location: pageLocation,
    page_path: safePath,
    page_title: safeTitle,
  });
};

/**
 * Events during unload/navigation
 */
export const trackEventOnUnload = (
  eventName,
  params = {}
) => {
  const cleanParams = sanitizeParams(params);

  log(`Unload event: ${eventName}`, cleanParams);

  if (!isAnalyticsEnabled()) {
    return false;
  }

  if (
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return false;
  }

  try {
    window.gtag("event", eventName, {
      ...cleanParams,
      transport_type: "beacon",
    });

    return true;
  } catch (err) {
    error(`Unload event failed: ${eventName}`, err);

    return false;
  }
};