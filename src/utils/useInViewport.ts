import { useEffect, useState } from "react";

function useInViewport(ref: React.MutableRefObject<HTMLElement>) {
  const [inViewPort, setInViewport] = useState(false);

  useEffect(() => {
    const handler = () => setInViewport(ref.current?.getBoundingClientRect().top < window.innerHeight);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return inViewPort;
}

export default useInViewport;
