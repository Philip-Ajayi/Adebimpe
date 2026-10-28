"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { memorial } from "@/lib/data/program-content";

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const move = useCallback(
    (direction: number) => {
      setActiveIndex((current) => {
        if (current === null) return null;
        return (
          (current + direction + memorial.memories.length) %
          memorial.memories.length
        );
      });
    },
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, move]);

  return (
    <>
      <section className="memories-section" id="memories">
        <div className="section-heading">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            THE MEMORY ARCHIVE
          </span>
          <h2>Moments we <em>keep forever.</em></h2>
          <p>
            Photographs preserve the little things that become our most
            treasured memories.
          </p>
        </div>

        <div className="memory-gallery">
          {memorial.memories.map((photo, index) => (
            <button
              className={`memory-tile memory-tile-${(index % 6) + 1}`}
              key={photo.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photograph: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw"
                className="memory-image"
                priority={index === 0}
              />
              <span className="memory-shade" />
              <span className="memory-caption">{photo.caption}</span>
              <span className="memory-expand" aria-hidden="true">
                <Expand size={16} />
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-note">
          <span>✧</span>
          <p>Every photograph tells a part of the story.</p>
          <span>✧</span>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Memory photograph viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            className="lightbox-close"
            onClick={close}
            aria-label="Close photograph"
          >
            <X size={22} />
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={() => move(-1)}
            aria-label="Previous photograph"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="lightbox-content">
            <div className="lightbox-image-wrap">
              <Image
                src={memorial.memories[activeIndex].src}
                alt={memorial.memories[activeIndex].alt}
                fill
                sizes="90vw"
                className="lightbox-image"
                priority
              />
            </div>
            <p>{memorial.memories[activeIndex].caption}</p>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(memorial.memories.length).padStart(2, "0")}
            </span>
          </div>

          <button
            className="lightbox-arrow lightbox-next"
            onClick={() => move(1)}
            aria-label="Next photograph"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </>
  );
}
