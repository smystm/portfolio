"use client";
import { useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const createObserver = (threshold: number) => {
      if (observer) observer.disconnect();

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const linkSpan = document.querySelector<HTMLSpanElement>(`#link-${id}`);
          const divBorder = document.querySelector<HTMLDivElement>(`#border-${id}`);
          const linkMenuSpan = document.querySelector<HTMLSpanElement>(`#menu-link-${id}`);

          if (entry.isIntersecting) {
            document.querySelectorAll<HTMLSpanElement>('nav a span').forEach((el) => {
              el.classList.remove(
                'bg-gradient-to-l',
                'from-[#6366f1]',
                'to-[#a855f7]',
                'bg-clip-text',
                'text-transparent'
              );
            });

            if (linkSpan) {
              linkSpan.classList.add(
                'bg-gradient-to-l',
                'from-[#6366f1]',
                'to-[#a855f7]',
                'bg-clip-text',
                'text-transparent'
              );
            }

            if (linkMenuSpan) {
              linkMenuSpan.classList.add(
                'bg-gradient-to-l',
                'from-[#6366f1]',
                'to-[#a855f7]',
                'bg-clip-text',
                'text-transparent'
              );
            }

            document.querySelectorAll<HTMLDivElement>('nav a div').forEach((el) => {
              el.classList.remove('scale-x-100');
            });

            if (divBorder) {
              divBorder.classList.add('scale-x-100');
            }
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold,
      });

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer!.observe(el);
      });
    };

    // init
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    createObserver(mediaQuery.matches ? 0.5 : 0.2);

    // listen for resize
    const handleResize = (e: MediaQueryListEvent) => {
      createObserver(e.matches ? 0.5 : 0.2);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      if (observer) observer.disconnect();
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [sectionIds]);
};
