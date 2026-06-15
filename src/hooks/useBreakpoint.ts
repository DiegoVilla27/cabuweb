import { useState, useEffect } from "react";

export function useBreakpoint(breakpoint: number = 576) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    function updateSize() {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    }
    
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [breakpoint]);

  return isLargeScreen;
}
