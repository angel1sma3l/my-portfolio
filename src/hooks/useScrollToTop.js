import { useEffect } from "react";
import containerRef from "../context/container";

const useScrollToTop = () => {
  useEffect(() => {
    containerRef.current.scroll({ top: 0, left: 0, behavior: "auto" });
  }, []);
};

export default useScrollToTop;
