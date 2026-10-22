import { useEffect, useRef } from "react";

/**
 * Vanta.js birds for the dark orange hero background.
 * @param {React.RefObject<HTMLElement | null>} containerRef
 */
export function useVantaBirds(containerRef) {
  const effectRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let cancelled = false;

    const destroyEffect = () => {
      effectRef.current?._cleanup?.();
      effectRef.current?.destroy?.();
      effectRef.current = null;
    };

    const tryInit = async () => {
      const container = containerRef.current;
      if (cancelled || !container) return;

      const { offsetWidth, offsetHeight } = container;
      if (offsetWidth < 50 || offsetHeight < 50) {
        requestAnimationFrame(tryInit);
        return;
      }

      destroyEffect();

      const [THREE, { default: BIRDS }] = await Promise.all([
        import("three"),
        import("vanta/dist/vanta.birds.min"),
      ]);

      if (cancelled || !containerRef.current) return;

      effectRef.current = BIRDS({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        forceAnimate: true,
        backgroundColor: 0x050505,
        backgroundAlpha: 0,
        color1: 0xff5a1f,
        color2: 0xff8a4c,
        birdSize: 1.35,
        wingSpan: 28,
        speedLimit: 3.5,
        separation: 50,
        alignment: 35,
        cohesion: 35,
        quantity: 4,
      });

      const resize = () => {
        if (!effectRef.current || !containerRef.current) return;
        effectRef.current.resize?.();
      };

      requestAnimationFrame(resize);
      window.requestAnimationFrame(resize);

      const observer = new ResizeObserver(resize);
      observer.observe(containerRef.current);
      window.addEventListener("resize", resize);
      window.addEventListener("load", resize, { once: true });

      effectRef.current._cleanup = () => {
        observer.disconnect();
        window.removeEventListener("resize", resize);
        window.removeEventListener("load", resize);
      };
    };

    tryInit();

    return () => {
      cancelled = true;
      destroyEffect();
    };
  }, [containerRef]);

  return effectRef;
}
