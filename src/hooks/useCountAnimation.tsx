import { useEffect } from 'react';

export default function useCountAnimation() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // 当元素可见度到达10%时触发
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.innerHTML.match(/\d+/);
          if (!target) return;
          const value = parseInt(target[0]);
          let currentCount = 0;
          const step = value / 10;
          const timer = setInterval(() => {
            if (Math.round(currentCount) >= value) {
              clearInterval(timer);
              return;
            }
            currentCount += step;
            el.innerHTML = el.innerHTML.replace(
              /\d+/,
              Math.round(currentCount).toFixed(0),
            );
          }, 50);
          observer.unobserve(el);
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.text-count');
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, []);
}
