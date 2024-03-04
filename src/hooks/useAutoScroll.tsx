import { useEffect, useRef, useState } from 'react';
// 循环滚动Hook
export default function useAutoScroll(scrollStep = 1, delay = 1000) {
  const [scrollPosition, setScrollPostion] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollElement = scrollRef.current;
      const scrollHeight = scrollElement?.scrollHeight;
      const scroll = () => {
        let newScrollPosition = scrollPosition + scrollStep;
        if (newScrollPosition >= scrollHeight) {
          newScrollPosition = -75; //如果滚到底部，则重置滚动位置为顶部
          setScrollPostion(newScrollPosition);
        }
        scrollElement.scrollTo({
          top: newScrollPosition,
          behavior: 'smooth',
        });
        setScrollPostion(newScrollPosition);
      };
      const interval = setInterval(scroll, delay);
      return () => clearInterval(interval);
    }
  }, [scrollPosition, scrollStep, delay]);
  return scrollRef;
}
