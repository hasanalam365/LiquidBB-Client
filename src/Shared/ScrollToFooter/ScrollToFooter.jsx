import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToFooter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const footer = document.getElementById("footer");

    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToFooter;