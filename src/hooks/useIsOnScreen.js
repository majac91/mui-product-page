import {useState, useEffect} from "react";

export function useIsOnScreen(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
      const options = { treshold:1, rootMargin: '80px 0px 0px' };

      const callback = (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting ? setIsIntersecting(true) : setIsIntersecting(false);
        });
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);

  }, [ref]);

  return isIntersecting;
}
