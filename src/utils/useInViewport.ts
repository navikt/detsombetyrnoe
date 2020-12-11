import { useEffect, useState } from "react";

function useInViewport<T extends HTMLElement>(ref: React.RefObject<T>) {
  const [inViewPort, setInViewport] = useState(false);

  useEffect(() => {
    const top = ref.current?.getBoundingClientRect().top;
    const handler = () => setInViewport(top ? top < window.innerHeight : true);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return inViewPort;
}

export default useInViewport;
