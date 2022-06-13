import { useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

// 페이지의 bottom을 감지하는 옵저버
const useIntersectionObserver = ({
  onIntersect,
}: useIntersectionObserverProps) => {
  const [bottom, setBottom] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!bottom) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { rootMargin: '100px', threshold: 0.5 }
    );
    observer.observe(bottom);

    return () => observer.unobserve(bottom);
  }, [onIntersect, bottom]);

  return { setTarget: setBottom };
};

export { useIntersectionObserver };
