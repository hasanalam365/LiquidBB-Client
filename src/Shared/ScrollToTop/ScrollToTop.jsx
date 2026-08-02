import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does not reset scroll position on navigation by default.
 * This component watches the current route and scrolls the window back
 * to the top whenever the pathname changes (e.g. navigating from
 * /terms-and-conditions back to / via the Home button, or vice versa).
 *
 * Mount this once, high up in the tree (e.g. inside MainLayout), so it
 * covers every route rendered underneath it.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;