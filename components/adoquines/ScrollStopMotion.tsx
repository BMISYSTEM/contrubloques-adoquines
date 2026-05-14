"use client";

import { useEffect, useRef } from "react";

export default function ScrollStopMotion() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const frameCount = 300;

  const currentFrame = (index: number) => {
    return `/adoquin-stop-animation/frames/frame_${String(
      index + 1
    ).padStart(4, "0")}.jpg`;
  };

  useEffect(() => {
    // preload
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }

    const updateImage = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      // progreso del componente
      const progress =
        (windowHeight - rect.top) /
        (rect.height + windowHeight);

      // limitar entre 0 y 1
      const clampedProgress = Math.max(
        0,
        Math.min(progress, 1)
      );

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(clampedProgress * frameCount)
      );

      imageRef.current.src = currentFrame(frameIndex);
    };

    window.addEventListener("scroll", updateImage);

    updateImage();

    return () => {
      window.removeEventListener("scroll", updateImage);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "600vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <img
          ref={imageRef}
          src={currentFrame(0)}
          alt="scroll animation"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}