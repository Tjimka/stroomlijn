"use client";

import { Icon } from "../icons";
import type { FooterData, OnNav } from "../types";

interface Props extends OnNav { data: FooterData }

export function Footer({ data, onNav }: Props) {
  const handle = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNav?.(href);
  };

  return (
    <footer className="bg-navy text-white/75 mt-16 pt-16 pb-7">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <img src={data.logo.src} alt={data.logo.alt} className="h-[30px] brightness-0 invert mb-4.5" />
            <p className="text-sm text-white/55 leading-[1.65] max-w-[320px] mb-4.5">{data.tagline}</p>
            <div className="flex gap-2.5">
              {data.social.map((s, i) => {
                const I = Icon[s.icon];
                return (
                  <a key={i} aria-label={s.label} href={s.href}
                     className="size-9 rounded-lg border border-white/15 text-white/75 flex items-center justify-center hover:bg-teal hover:text-white hover:border-teal transition-colors duration-200 ease-flow">
                    {I && <I className="size-[18px]" />}
                  </a>
                );
              })}
            </div>
          </div>

          {data.columns.map((col, i) => (
            <div key={i}>
              <h5 className="text-[12.5px] font-semibold tracking-eyebrow uppercase text-white mb-4">{col.title}</h5>
              <div className="flex flex-col gap-2.5">
                {col.links.map((l, j) => (
                  <a key={j} href={l.href} onClick={(e) => handle(e, l.href)}
                     className="text-sm text-white/65 hover:text-teal-soft transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between gap-3 text-[13px] text-white/50">
          <div>{data.copyright}</div>
          <div className="flex gap-6">
            {data.legal.map((l, i) => (
              <a key={i} href={l.href} onClick={(e) => handle(e, l.href)}
                 className="text-white/50 hover:text-white/85 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
