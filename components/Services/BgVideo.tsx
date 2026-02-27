"use client";

import { useEffect, useRef } from "react";

export default function BgVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.src = src;
    v.load();
    v.play().catch(() => {});
  }, [src]);

  return <video ref={ref} autoPlay playsInline loop muted preload='none' aria-hidden='true' className={className} />;
}
