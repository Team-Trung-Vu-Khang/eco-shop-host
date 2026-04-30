"use client";

import { RefObject, useEffect, useState } from "react";

type UseMobileScrollHideResult = {
  hidden: boolean;
  isMobile: boolean;
};

export function useMobileScrollHide(
  containerRef: RefObject<HTMLElement | null>,
): UseMobileScrollHideResult {
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 425px)");
    const scroller = containerRef.current;
    let lastScrollTop = scroller?.scrollTop ?? window.scrollY ?? 0;

    const syncMode = () => {
      const mobile = mediaQuery.matches;
      setIsMobile(mobile);
      if (!mobile) {
        setHidden(false);
      }
    };

    const onScroll = () => {
      const currentScrollTop = scroller?.scrollTop ?? window.scrollY ?? 0;

      if (!mediaQuery.matches) {
        setHidden(false);
        lastScrollTop = currentScrollTop;
        return;
      }

      if (currentScrollTop <= 12) {
        setHidden(false);
      } else if (currentScrollTop > lastScrollTop + 8) {
        setHidden(true);
      } else if (currentScrollTop < lastScrollTop - 8) {
        setHidden(false);
      }

      lastScrollTop = currentScrollTop;
    };

    syncMode();
    onScroll();

    const scrollTarget: EventTarget = scroller ?? window;
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    mediaQuery.addEventListener("change", syncMode);
    window.addEventListener("resize", syncMode);

    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      mediaQuery.removeEventListener("change", syncMode);
      window.removeEventListener("resize", syncMode);
    };
  }, [containerRef]);

  return { hidden, isMobile };
}
