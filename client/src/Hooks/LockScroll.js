import { useEffect } from "react";

function useScrollLock() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
}

export default useScrollLock;
