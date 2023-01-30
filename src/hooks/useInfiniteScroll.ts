import { useCallback, useEffect } from "react";

export interface IuseInfiniteScrollProps {
  callback: () => void;
}

export function useInfiniteScroll({ callback }: IuseInfiniteScrollProps) {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    callback();
  }, [callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
}
