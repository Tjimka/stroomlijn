"use client";

import { useEffect, useState } from "react";
import { Icon } from "../icons";
import type { HeroData, OnNav } from "../types";

interface Props extends OnNav { data: HeroData }

export function Hero({ data, onNav }: Props) {
  const [idx, setIdx] = useState(0);
  const slides = data.slides ?? [];
  const interval = data.slideInterval ?? 6500;

  useEffect(() => {
    if (slides.length < 2) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % slides.length), interval);
    return () => window.clearInterval(t);
  }, [slides.length, interval]);

  const handle = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNav?.(href);
  };

  return (
    <section id={data.id} data-screen-label="Hero"
             className="relative min-h-[640px] overflow-hidden isolate">
      {/* slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, i) => (
          <div key={i}
               aria-hidden={i !== idx}
               style={{ backgroundImage: `url(${src})` }}
               className={`absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-[1200ms] ease-flow
                           ${i === idx ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"}`} />
        ))}
        <div className="absolute inset-0 z-[1]"
             style={{ background: "linear-gradient(105deg, rgba(240,237,228,0.94) 0%, rgba(240,237,228,0.86) 28%, rgba(240,237,228,0.55) 52%, rgba(240,237,228,0.18) 78%, rgba(240,237,228,0.05) 100%)" }} />
      </div>

      <div className="relative z-[2] max-w-[1280px] mx-auto px-8 pt-[120px] pb-[140px] flex flex-col items-start">
        <span className="text-[13px] font-semibold tracking-eyebrow uppercase text-teal mb-5">{data.eyebrow}</span>
        <h1 className="text-[68px] font-semibold leading-[1.02] tracking-tightest text-navy mb-[22px] max-w-[720px] text-balance">
          {data.title.lead}<br />
          <em className="not-italic text-teal">{data.title.accent}</em>
        </h1>
        <p className="text-[19px] leading-[1.6] text-navy/75 max-w-[480px] mb-8">{data.lead}</p>

        <div className="flex flex-wrap items-center gap-3">
          {data.ctas.map((c, i) => {
            const I = c.icon ? Icon[c.icon] : null;
            const base = "inline-flex items-center gap-2 px-7 py-[15px] rounded-[10px] text-base font-semibold transition-colors duration-200 ease-flow";
            const variant = c.variant === "secondary"
              ? "bg-white text-navy border border-sand-deep hover:bg-sand"
              : "bg-teal text-white hover:bg-teal-deep";
            return (
              <a key={i} href={c.href} onClick={(e) => handle(e, c.href)} className={`${base} ${variant}`}>
                {c.label} {I && <I className="size-[17px]" />}
              </a>
            );
          })}
        </div>

        <div className="mt-9 flex flex-wrap gap-x-[22px] gap-y-2 text-[13.5px] text-navy/60">
          {data.trust.map((t, i) => {
            const I = Icon[t.icon];
            return (
              <span key={i} className="inline-flex items-center gap-1.5">
                {I && <I className="size-[15px] text-teal" />} {t.label}
              </span>
            );
          })}
        </div>
      </div>

      {slides.length > 1 && (
        <div role="tablist" aria-label="Hero slider"
             className="absolute bottom-14 right-12 z-[3] flex gap-2.5 px-3 py-2 rounded-full bg-white/50 backdrop-blur border border-white/40">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Slide ${i + 1}`} aria-selected={i === idx}
                    onClick={() => setIdx(i)}
                    className={`h-2 rounded-full transition-all duration-200 ease-flow
                                ${i === idx ? "w-[26px] bg-teal" : "w-2 bg-navy/25 hover:bg-navy/50"}`} />
          ))}
        </div>
      )}

      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden
           className="absolute left-0 right-0 -bottom-px w-full h-14 z-[3] block">
        <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="rgb(240 237 228)" />
      </svg>
    </section>
  );
}
