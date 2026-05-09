import React, {
  Suspense,
  lazy,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/* ✅ Error Boundary */
class SplineErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.error("Spline crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center text-white text-sm">
          3D preview not supported on this device
        </div>
      );
    }

    return this.props.children;
  }
}

/* ✅ Main Component */
function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  /* ✅ Better low-end detection */
  const isLowPowerDevice = useMemo(() => {
    if (typeof window === "undefined") return true;

    const lowWidth = window.innerWidth < 200;

    const lowCpu =
      typeof navigator !== "undefined" &&
      navigator.hardwareConcurrency &&
      navigator.hardwareConcurrency <= 4;

    return lowWidth || lowCpu;
  }, []);

  /* ✅ Lazy load only when section visible */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  /* ✅ Mobile / low-end fallback */
  if (isLowPowerDevice) {
    return (
      <div
        className={cn(
          "w-full h-full flex items-center justify-center text-white text-sm",
          className
        )}
      >
        3D disabled for performance
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-full overflow-hidden will-change-transform transform-gpu",
        className
      )}
      style={{
        contain: "layout paint size",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <SplineErrorBoundary>
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-t-transparent border-white/30 rounded-full animate-spin" />
            </div>
          }
        >
          {isVisible ? (
            <Spline
              scene={scene}
              className="w-full h-full"
            />
          ) : null}
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
}

export default memo(SplineScene);