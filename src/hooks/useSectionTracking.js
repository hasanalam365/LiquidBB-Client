// src/hooks/useSectionTracking.js

import {
  useEffect,
  useRef,
} from "react";

import { useLocation } from "react-router-dom";

import { trackEvent } from "../analytics/analytics";

import {
  EVENTS,
  engagementThresholdsSeconds,
} from "../analytics/events";

const useSectionTracking = ({
  sectionName,
  sectionIndex = 0,
  visibilityThreshold = 0.4,
}) => {
  const ref = useRef(null);

  const location = useLocation();

  const hasViewedRef = useRef(false);

  const isIntersectingRef = useRef(false);

  const visibleSinceRef = useRef(null);

  const accumulatedSecondsRef =
    useRef(0);

  const reportedThresholdRef =
    useRef(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    hasViewedRef.current = false;
    isIntersectingRef.current = false;
    visibleSinceRef.current = null;
    accumulatedSecondsRef.current = 0;
    reportedThresholdRef.current = 0;

    const pagePath = location.pathname;

    const flushEngagement = () => {
      if (visibleSinceRef.current) {
        accumulatedSecondsRef.current +=
          (Date.now() -
            visibleSinceRef.current) /
          1000;

        visibleSinceRef.current = null;
      }

      const seconds = Math.floor(
        accumulatedSecondsRef.current
      );

      const nextThreshold =
        [...engagementThresholdsSeconds]
          .reverse()
          .find(
            (threshold) =>
              seconds >= threshold &&
              threshold >
                reportedThresholdRef.current
          );

      if (nextThreshold) {
        reportedThresholdRef.current =
          nextThreshold;

        trackEvent(
          EVENTS.SECTION_ENGAGEMENT,
          {
            section_name: sectionName,
            section_index: sectionIndex,
            engagement_seconds:
              nextThreshold,
            page_path: pagePath,
          }
        );
      }
    };

    const handleVisibilityChange = () => {
      if (
        document.visibilityState ===
        "hidden"
      ) {
        flushEngagement();
      } else if (
        isIntersectingRef.current
      ) {
        visibleSinceRef.current =
          Date.now();
      }
    };

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isIntersectingRef.current =
              entry.isIntersecting;

            if (entry.isIntersecting) {
              if (!hasViewedRef.current) {
                hasViewedRef.current = true;

                trackEvent(
                  EVENTS.SECTION_VIEW,
                  {
                    section_name:
                      sectionName,
                    section_index:
                      sectionIndex,
                    page_path: pagePath,
                    page_title:
                      document.title,
                  }
                );
              }

              if (
                document.visibilityState ===
                "visible" &&
                !visibleSinceRef.current
              ) {
                visibleSinceRef.current =
                  Date.now();
              }
            } else {
              flushEngagement();
            }
          });
        },
        {
          threshold: visibilityThreshold,
        }
      );

    observer.observe(node);

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      flushEngagement();

      observer.disconnect();

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, [
    sectionName,
    sectionIndex,
    location.pathname,
    visibilityThreshold,
  ]);

  return ref;
};

export default useSectionTracking;