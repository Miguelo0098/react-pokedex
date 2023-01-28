import { useEffect } from "react";

export interface IuseInfiniteScrollProps {
  callback: () => void;
}

export function useInfiniteScroll({ callback }: IuseInfiniteScrollProps) {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    callback();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
