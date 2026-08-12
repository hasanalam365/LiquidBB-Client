// src/hooks/usePageTracking.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "../analytics/analytics";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname +
      location.search +
      location.hash;

    trackPageView({
      path,
      title: document.title,
    });
  }, [
    location.pathname,
    location.search,
    location.hash,
    location.key,
  ]);
};

export default usePageTracking;