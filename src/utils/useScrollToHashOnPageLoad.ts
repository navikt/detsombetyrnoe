import { useEffect } from "react";

// https://stackoverflow.com/questions/38588346/anchor-a-tags-not-working-in-chrome-when-using/38588927#38588927
// https://github.com/vercel/next.js/discussions/13134
function useScrollToHashOnPageLoad() {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const hash = window.location.hash;
        window.location.hash = "";
        window.location.hash = hash;
      }, 500);
    }
  }, []);
}

export default useScrollToHashOnPageLoad;
