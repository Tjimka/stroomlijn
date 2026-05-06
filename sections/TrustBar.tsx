"use client";

import type { TrustBarData } from "../types";

export function TrustBar({ data }: { data: TrustBarData }) {
  return (
    <section data-screen-label="Trust"
             className="py-14 md:py-16 border-y border-sand-deep bg-white/40">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center text-[12.5px] font-semibold tracking-eyebrow uppercase text-navy/55 mb-8">
          {data.label}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-12 max-w-[1080px] mx-auto">
          {data.clients.map((c, i) => (
            <img key={i} src={c.src} alt={c.alt} loading="lazy"
                 style={{ height: c.height }}
                 className="w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:-translate-y-px transition duration-200 ease-flow" />
          ))}
        </div>
        {data.footnote && (
          <p className="mt-9 text-center text-[14.5px] leading-[1.6] text-navy/60 max-w-[640px] mx-auto"
             dangerouslySetInnerHTML={{ __html: data.footnote }} />
        )}
      </div>
    </section>
  );
}
