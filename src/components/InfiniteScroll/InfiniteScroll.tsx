import React, { useEffect, useRef, useState } from "react";
import style from "./InfiniteScroll.module.scss";

type Props = React.PropsWithChildren <{
  onBottomHit: () => void;
}>;

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

const InfiniteScroll: React.FC<Props> = ({ onBottomHit, children }) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      onBottomHit();
    }
  }, [onBottomHit, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      if (isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onBottomHit]);

  return (
    <div className={style.coins__list} ref={contentRef}>
      {children}
    </div>
  );
};

export default InfiniteScroll;
