// src/hooks/useScrollTracking.js

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { trackEvent } from "../analytics/analytics";
import {
  EVENTS,
  scrollMilestones,
} from "../analytics/events";

const useScrollTracking = () => {
  const location = useLocation();

  const reachedRef = useRef(new Set());

  useEffect(() => {
    reachedRef.current = new Set();

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const doc = document.documentElement;

        const scrollTop =
          window.scrollY ||
          doc.scrollTop ||
          0;

        const scrollHeight =
          doc.scrollHeight - doc.clientHeight;

        const percent =
          scrollHeight > 0
            ? Math.min(
                100,
                Math.round(
                  (scrollTop / scrollHeight) * 100
                )
              )
            : 100;

        scrollMilestones.forEach((milestone) => {
          if (
            percent >= milestone &&
            !reachedRef.current.has(milestone)
          ) {
            reachedRef.current.add(milestone);

            trackEvent(EVENTS.SCROLL_DEPTH, {
              percent_scrolled: milestone,
              page_path: location.pathname,
              page_title: document.title,
            });
          }
        });

        ticking = false;
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [location.pathname]);

  return null;
};

export default useScrollTracking;