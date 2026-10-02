"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type HeroSlide = {
  id: number;
  tag: string;
  title: string;
  description: string;
  cta: string;
  image: string;
};

export default function MenuHero({ slides }: { slides: HeroSlide[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full relative overflow-hidden bg-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.25)]">
      <div className="relative h-105 sm:h-140 lg:h-170">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex items-end p-5 sm:p-8 lg:p-12">
              <div className="max-w-xl rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-7">
                <span className="inline-flex rounded-full border border-emerald-300/50 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-100">
                  {slide.tag}
                </span>

                <h1 className="mt-4 text-3xl font-black leading-none text-white sm:text-4xl lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-4 max-w-lg text-sm text-slate-200 sm:text-base">
                  {slide.description}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 sm:bottom-6 sm:right-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Ver slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
