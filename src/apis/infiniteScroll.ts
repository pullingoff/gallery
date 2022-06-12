import { useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  // root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({onIntersect}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { rootMargin : '100px', 
        threshold : 0.5 }
    );
    observer.observe(target);

    return () => observer && observer.disconnect()
    // return () => observer.unobserve(target);
  }, [
    onIntersect,
    target
  ]);

  return { setTarget };
};

export {
  useIntersectionObserver
};