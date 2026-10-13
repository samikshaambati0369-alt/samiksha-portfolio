import { useEffect, useRef } from 'react';

/**
 * Custom hook for smooth cursor-edge scrolling
 * Configurable edge zones, progressive speed, requestAnimationFrame loop,
 * mobile/touchscreen guard, reduced-motion guard, and tab visibility guard.
 */
export function useCursorEdgeScroll({
  edgeZone = 90,        // pixels from edge where scrolling begins
  maxSpeed = 16,        // maximum pixels per frame at the absolute edge
  friction = 0.82,      // velocity decay when moving away from edge
  enabled = true,
} = {}) {
  const rafIdRef = useRef(null);
  const targetSpeedRef = useRef(0);
  const currentSpeedRef = useRef(0);
  const isRunningRef = useRef(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Guard: Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Guard: Only enable for fine pointers (mouse/trackball), disable on touchscreens
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    const performScroll = () => {
      // Smooth interpolation (lerp) towards target speed
      currentSpeedRef.current =
        currentSpeedRef.current * friction + targetSpeedRef.current * (1 - friction);

      const speed = currentSpeedRef.current;

      if (Math.abs(speed) > 0.15) {
        const currentY = window.scrollY;
        const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

        // Check page boundaries
        if (speed < 0 && currentY <= 0) {
          currentSpeedRef.current = 0;
          targetSpeedRef.current = 0;
        } else if (speed > 0 && currentY >= maxScrollY - 1) {
          currentSpeedRef.current = 0;
          targetSpeedRef.current = 0;
        } else {
          window.scrollBy({ top: speed, behavior: 'auto' });
        }

        rafIdRef.current = requestAnimationFrame(performScroll);
      } else {
        // Stop animation loop when speed decays to near-zero
        currentSpeedRef.current = 0;
        isRunningRef.current = false;
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
      }
    };

    const startLoopIfNeeded = () => {
      if (!isRunningRef.current && Math.abs(targetSpeedRef.current) > 0) {
        isRunningRef.current = true;
        rafIdRef.current = requestAnimationFrame(performScroll);
      }
    };

    const handleMouseMove = (e) => {
      // Guard: do not scroll if user is dragging/selecting text or interacting with editable fields
      if (e.buttons !== 0) {
        targetSpeedRef.current = 0;
        return;
      }
      const targetTag = e.target?.tagName;
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || targetTag === 'SELECT' || e.target?.isContentEditable) {
        targetSpeedRef.current = 0;
        return;
      }

      const mouseY = e.clientY;
      const viewportHeight = window.innerHeight;

      if (mouseY < 0 || mouseY > viewportHeight) {
        targetSpeedRef.current = 0;
        return;
      }

      // Check Top Edge Zone
      if (mouseY <= edgeZone) {
        // factor: 0 at boundary, 1 at the very top (clientY === 0)
        const proximity = Math.max(0, Math.min(1, (edgeZone - mouseY) / edgeZone));
        const easedProximity = Math.pow(proximity, 1.25);
        targetSpeedRef.current = -1 * easedProximity * maxSpeed;
        startLoopIfNeeded();
      }
      // Check Bottom Edge Zone
      else if (mouseY >= viewportHeight - edgeZone) {
        // factor: 0 at boundary, 1 at the very bottom (clientY === viewportHeight)
        const distanceFromEdge = mouseY - (viewportHeight - edgeZone);
        const proximity = Math.max(0, Math.min(1, distanceFromEdge / edgeZone));
        const easedProximity = Math.pow(proximity, 1.25);
        targetSpeedRef.current = easedProximity * maxSpeed;
        startLoopIfNeeded();
      }
      // Outside Edge Zones
      else {
        targetSpeedRef.current = 0;
      }
    };

    const handleMouseLeave = () => {
      targetSpeedRef.current = 0;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        targetSpeedRef.current = 0;
        currentSpeedRef.current = 0;
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
        isRunningRef.current = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      isRunningRef.current = false;
    };
  }, [edgeZone, maxSpeed, friction, enabled]);
}
