"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  height?: string;
  constructorHeightPx?: number;
};

export default function MapClient({ className = "", height = "64vh", constructorHeightPx = 400 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // На всякий: чистим контейнер перед вставкой (и при ре-рендере)
    el.innerHTML = "";

    const src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?" +
      "um=constructor%3A9fce938b95f54b1087b93d8c41b46b97d7a40af29a9f4fe04c08a552586303e7" +
      `&width=100%25&height=${constructorHeightPx}` +
      "&lang=en_FR&scroll=true";

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.charset = "utf-8";

    // Ключевой момент: вставляем script внутрь контейнера,
    // чтобы constructor отрендерил карту именно здесь.
    el.appendChild(script);

    return () => {
      el.innerHTML = "";
    };
  }, [constructorHeightPx]);

  return (
    <div className={`w-full ${className}`}>
      <div ref={containerRef} style={{ height, width: "100%" }} className='relative overflow-hidden rounded-xl' />
    </div>
  );
}
