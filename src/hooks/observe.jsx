import { useEffect, useRef, useState } from "react";

export const useObserve = () => {
  const [isObserved, setIsObserved] = useState(false);

  const dom = useRef(null);
  const observer = useRef(null);

  const observe = () => {
    if (dom.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsObserved(true);
      });

      observer.current.observe(dom.current);

      return () => observer.current && observer.current.disconnect();
    }
  };

  useEffect(() => {
    observe();
  }, [dom]);

  return { isObserved, dom };
};
