import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HERO_CHARACTER } from '../data/brands';
import { Header } from './Header';

const DESKTOP_SCALES = [1.0, 1.08, 1.16, 1.24] as const;
const MOBILE_SCALES = [1.0, 1.05, 1.1, 1.15] as const;
const COMPACT_MOBILE_SCALES = [1.0, 1.04, 1.08, 1.12] as const;

export const Hero: React.FC = () => {
  const heroSectionRef = useRef<HTMLElement>(null);
  const characterMotionRef = useRef<HTMLDivElement>(null);
  const shadowOuterRef = useRef<HTMLDivElement>(null);
  const shadowInnerRef = useRef<HTMLDivElement>(null);

  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);
  const [isFloating, setIsFloating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const stageRef = useRef<0 | 1 | 2 | 3>(0);
  const isFloatingRef = useRef(false);
  const floatStartTimeRef = useRef<number | null>(null);
  const idleDecayTimerRef = useRef<number | null>(null);

  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const pointerCurrentRef = useRef({ x: 0, y: 0 });
  const currentScaleRef = useRef(1.0);
  const isHeroVisibleRef = useRef(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const el = heroSectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getScaleTable = useCallback(() => {
    const w = window.innerWidth;
    if (w <= 350) return COMPACT_MOBILE_SCALES;
    if (w < 768) return MOBILE_SCALES;
    return DESKTOP_SCALES;
  }, []);

  const clearIdleDecayTimer = () => {
    if (idleDecayTimerRef.current !== null) {
      window.clearTimeout(idleDecayTimerRef.current);
      idleDecayTimerRef.current = null;
    }
  };

  const triggerDarumaInteraction = useCallback(() => {
    if (isFloatingRef.current) {
      return;
    }

    clearIdleDecayTimer();

    const nextStage = ((stageRef.current + 1) % 4) as 0 | 1 | 2 | 3;

    if (reducedMotion) {
      stageRef.current = nextStage;
      setStage(nextStage);
      const reducedScales = [1.0, 1.05, 1.1, 1.0] as const;
      const s = reducedScales[nextStage];
      if (characterMotionRef.current) {
        characterMotionRef.current.style.transform = `translate3d(0px, 0px, 0px) scale(${s}) rotate(0deg)`;
      }
      setAnnouncement(
        nextStage === 0
          ? 'Kingu Kongu daruma returned to resting size.'
          : `Kingu Kongu daruma enlarged to stage ${nextStage}.`
      );
      if (nextStage > 0) {
        idleDecayTimerRef.current = window.setTimeout(() => {
          stageRef.current = 0;
          setStage(0);
          if (characterMotionRef.current) {
            characterMotionRef.current.style.transform =
              'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)';
          }
        }, 3000);
      }
      return;
    }

    if (nextStage < 3 && stageRef.current < 2) {
      stageRef.current = nextStage;
      setStage(nextStage);
      const scales = getScaleTable();
      setAnnouncement(
        `Kingu Kongu daruma grew to ${Math.round(scales[nextStage] * 100)}% scale.`
      );
      idleDecayTimerRef.current = window.setTimeout(() => {
        if (!isFloatingRef.current) {
          stageRef.current = 0;
          setStage(0);
        }
      }, 4500);
    } else {
      // Final stage (3): grow to 1.24 (or mobile cap), rise and drift smoothly within safe area, then return gently
      stageRef.current = 3;
      setStage(3);
      isFloatingRef.current = true;
      setIsFloating(true);
      floatStartTimeRef.current = performance.now();
      setAnnouncement(
        'Kingu Kongu daruma reached maximum size, rising and drifting gently before returning to rest.'
      );
    }
  }, [getScaleTable, reducedMotion]);

  useEffect(() => {
    return () => clearIdleDecayTimer();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      if (characterMotionRef.current) {
        characterMotionRef.current.style.transform =
          'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)';
      }
      if (shadowOuterRef.current) {
        shadowOuterRef.current.style.transform = 'scale(1)';
        shadowOuterRef.current.style.opacity = '1';
      }
      if (shadowInnerRef.current) {
        shadowInnerRef.current.style.transform = 'scale(1)';
        shadowInnerRef.current.style.opacity = '1';
      }
      return;
    }

    let rafId = 0;
    const FLOAT_DURATION_MS = 2500;

    const animate = (now: number) => {
      rafId = window.requestAnimationFrame(animate);

      if (!isHeroVisibleRef.current || document.hidden) {
        return;
      }

      const isMobile = window.innerWidth < 768;
      const scales = getScaleTable();

      // Smooth pointer lerp
      pointerCurrentRef.current.x +=
        (pointerTargetRef.current.x - pointerCurrentRef.current.x) * 0.075;
      pointerCurrentRef.current.y +=
        (pointerTargetRef.current.y - pointerCurrentRef.current.y) * 0.075;

      // Gentle idle bob and slow tilt
      const t = now * 0.001;
      const idleBobAmplitude = isMobile ? 3.5 : 5.5;
      const idleTiltAmplitude = isMobile ? 1.0 : 1.45;
      const idleY = Math.sin(t * 1.85) * idleBobAmplitude;
      const idleRot = Math.cos(t * 1.35) * idleTiltAmplitude;

      // Pointer response (clamped & damped)
      const ptrX = pointerCurrentRef.current.x * (isMobile ? 4 : 10);
      const ptrY = pointerCurrentRef.current.y * (isMobile ? 2.5 : 6);
      const ptrRot = pointerCurrentRef.current.x * (isMobile ? 1.0 : 2.2);

      let driftX = 0;
      let driftY = 0;
      let driftRot = 0;
      let targetScale = scales[stageRef.current];

      if (isFloatingRef.current && floatStartTimeRef.current !== null) {
        const elapsed = now - floatStartTimeRef.current;
        const p = Math.min(1, elapsed / FLOAT_DURATION_MS);

        // Smooth bell curve envelope: sin(pi * p)^1.15 so rise and return are both silky smooth
        const envelope = Math.pow(Math.sin(Math.PI * p), 1.15);
        const maxRiseY = isMobile ? -24 : -54;
        const maxDriftX = isMobile ? 10 : 24;

        driftY = maxRiseY * envelope;
        driftX = Math.sin(p * Math.PI * 2) * maxDriftX * envelope;
        driftRot = Math.sin(p * Math.PI * 2) * (isMobile ? 2.2 : 3.6) * envelope;

        // Hold peak scale during rise, then smoothly ease back to 1.00 during the second half
        if (p < 0.52) {
          targetScale = scales[3];
        } else {
          const returnProgress = (p - 0.52) / 0.48;
          const easeReturn =
            0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, returnProgress));
          targetScale = scales[3] + (1.0 - scales[3]) * easeReturn;
        }

        if (p >= 1) {
          isFloatingRef.current = false;
          floatStartTimeRef.current = null;
          stageRef.current = 0;
          setStage(0);
          setIsFloating(false);
          targetScale = 1.0;
        }
      }

      // Smoothly damp scale transitions
      currentScaleRef.current +=
        (targetScale - currentScaleRef.current) * 0.14;

      const totalX = ptrX + driftX;
      const totalY = idleY + ptrY + driftY;
      const totalRot = idleRot + ptrRot + driftRot;
      const scaleVal = currentScaleRef.current;

      if (characterMotionRef.current) {
        characterMotionRef.current.style.transform = `translate3d(${totalX.toFixed(
          2
        )}px, ${totalY.toFixed(2)}px, 0px) scale(${scaleVal.toFixed(
          4
        )}) rotate(${totalRot.toFixed(2)}deg)`;
      }

      // Synchronize floor shadow with character elevation and scale
      const liftRatio = Math.max(0, -totalY / 60);
      const shadowScaleX = (1 + (scaleVal - 1) * 0.65 - liftRatio * 0.16).toFixed(
        3
      );
      const shadowOpacity = Math.max(0.45, 1 - liftRatio * 0.35).toFixed(3);

      if (shadowOuterRef.current) {
        shadowOuterRef.current.style.transform = `translate3d(${(
          totalX * 0.35
        ).toFixed(1)}px, 0px, 0px) scaleX(${shadowScaleX})`;
        shadowOuterRef.current.style.opacity = shadowOpacity;
      }
      if (shadowInnerRef.current) {
        shadowInnerRef.current.style.transform = `translate3d(${(
          totalX * 0.45
        ).toFixed(1)}px, 0px, 0px) scaleX(${shadowScaleX})`;
        shadowInnerRef.current.style.opacity = shadowOpacity;
      }
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, [getScaleTable, reducedMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || !heroSectionRef.current) return;
    const rect = heroSectionRef.current.getBoundingClientRect();
    const normX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    pointerTargetRef.current = {
      x: Math.max(-1, Math.min(1, normX)),
      y: Math.max(-1, Math.min(1, normY)),
    };
  };

  const handlePointerLeave = () => {
    pointerTargetRef.current = { x: 0, y: 0 };
  };

  return (
    <section
      id="home"
      ref={heroSectionRef}
      className="hero-section"
      aria-label="The Kong Group Hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-section__bottom-shade" aria-hidden="true" />

      <Header />

      <div className="hero-section__canvas">
        <h1 className="hero-section__headline" aria-label="THE KONG GROUP.">
          <span className="hero-section__headline-top">THE KONG</span>
          <span className="hero-section__headline-bottom">GROUP.</span>
        </h1>

        <div className="hero-section__copy-block">
          <p className="hero-section__supporting-copy">
            A little playful. A lot of flavour. Discover the food, people and
            places that make us The Kong Group.
          </p>
          <p className="hero-section__interaction-hint">
            CLICK OUR LITTLE FRIEND.
          </p>
        </div>

        <div className="hero-section__stage" data-stage={stage} data-floating={isFloating}>
          <div className="hero-section__floor-shadows" aria-hidden="true">
            <div
              ref={shadowOuterRef}
              className="hero-section__floor-shadow-outer"
            />
            <div
              ref={shadowInnerRef}
              className="hero-section__floor-shadow-inner"
            />
          </div>

          <button
            type="button"
            className="hero-section__daruma-trigger"
            onClick={triggerDarumaInteraction}
            aria-label="Play with the black Kingu Kongu daruma character (click repeatedly to grow and float)"
          >
            <div
              ref={characterMotionRef}
              className="hero-section__daruma-motion"
            >
              <img
                src={HERO_CHARACTER.image}
                width={HERO_CHARACTER.width}
                height={HERO_CHARACTER.height}
                alt={HERO_CHARACTER.alt}
                className="hero-section__daruma-img"
                fetchPriority="high"
                decoding="async"
                draggable={false}
              />
            </div>
          </button>
        </div>

        <div className="hero-section__bottom-bar">
          <button
            type="button"
            className="hero-section__tap-control"
            onClick={triggerDarumaInteraction}
          >
            <span>Tap to play</span>
            <span className="hero-section__arrow" aria-hidden="true">
              ↗
            </span>
          </button>

          <a href="#brands" className="hero-section__explore-link">
            <span>Explore our brands</span>
            <span className="hero-section__arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </div>
      </div>

      <div className="hero-section__divider" aria-hidden="true" />
    </section>
  );
};
