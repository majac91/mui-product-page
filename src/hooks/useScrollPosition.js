import { useState, useEffect } from "react"

const useScrollPosition = () => {
  const getPosition = () => window.pageYOffset;
  const [scrollPosition, setScrollPosition] = useState(getPosition())

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(getPosition())
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
