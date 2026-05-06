"use client";

import { Icon } from "../icons";
import type { CTABandData, OnNav } from "../types";

interface Props extends OnNav { data: CTABandData }

export function CTABand({ data, onNav }: Props) {
  const handle = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNav?.(href);
  };

  return (
    <section data-screen-label="CTA" className="py-12">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="relative overflow-hidden rounded-[20px] px-10 md:px-16 py-14 flex flex-wrap items-center justify-between gap-8 text-white"
             style={{ background: "linear-gradient(135deg, #4899A7 0%, #34707C 100%)" }}>
          <div className="absolute -right-24 -bottom-24 size-80 rounded-full pointer-events-none"
               style={{ background: "radial-gradient(circle, rgba(189,151,102,0.25), transparent 60%)" }} />
          <div className="relative max-w-[580px]">
            <h2 className="text-[32px] font-semibold leading-[1.2] tracking-tight mb-1.5">{data.title}</h2>
            <p className="text-base text-white/85">{data.lead}</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            {data.actions.map((a, i) => {
              const I = a.icon ? Icon[a.icon] : null;
              const base = "inline-flex items-center gap-2 px-7 py-[15px] rounded-[10px] text-base font-semibold transition-colors duration-200 ease-flow";
              const variant = a.variant === "outline-dark"
                ? "border border-white/30 text-white hover:bg-white/10 hover:border-white"
                : "bg-white/95 text-navy hover:bg-white";
              return (
                <a key={i} href={a.href} onClick={(e) => handle(e, a.href)} className={`${base} ${variant}`}>
                  {a.label} {I && <I className="size-[17px]" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
