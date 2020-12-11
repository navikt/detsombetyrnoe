import { useEffect, useState } from "react";

function useInViewport<T extends HTMLElement>(ref: React.RefObject<T>) {
  const [inViewPort, setInViewport] = useState(false);

  useEffect(() => {
    const handler = () => setInViewport((ref.current?.getBoundingClientRect().top || Infinity) < window.innerHeight);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return inViewPort;
}

export default useInViewport;
