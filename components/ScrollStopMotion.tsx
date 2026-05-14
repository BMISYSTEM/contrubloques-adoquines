"use client";

import { useEffect, useRef } from "react";

export default function ScrollStopMotion() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const frameCount = 153;

  const currentFrame = (index: number) => {
    return `/bloques-stop-animation/frames/frame_${String(
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
      const scrollTop = window.scrollY;

      const maxScroll =
        document.body.scrollHeight - window.innerHeight;

      const scrollFraction = scrollTop / maxScroll;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      if (imageRef.current) {
        imageRef.current.src = currentFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", updateImage);

    updateImage();

    return () => {
      window.removeEventListener("scroll", updateImage);
    };
  }, []);

  return (
    <section
      style={{
        height: "300vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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