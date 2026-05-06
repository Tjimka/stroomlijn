"use client";

import { Icon } from "../icons";
import type { NavData, OnNav } from "../types";

interface Props extends OnNav { data: NavData }

export function Nav({ data, onNav }: Props) {
  const handle = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNav?.(href);
  };
  const CtaIcon = data.cta.icon ? Icon[data.cta.icon] : null;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-sand/80 border-b border-sand-deep/55">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between gap-8">
        <a href="#home" onClick={(e) => handle(e, "#home")} className="flex items-center" aria-label="Stroomlijn home">
          <img src={data.logo.src} alt={data.logo.alt} className="h-[30px]" />
        </a>
        <div className="hidden md:flex items-center gap-7">
          {data.links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => handle(e, `#${l.id}`)}
               className="text-[14.5px] font-medium text-navy hover:text-teal transition-colors duration-200 ease-flow">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={data.secondary.href} onClick={(e) => handle(e, data.secondary.href)}
             className="hidden sm:inline-block text-[14.5px] font-medium text-navy hover:text-teal transition-colors">
            {data.secondary.label}
          </a>
          <a href={data.cta.href} onClick={(e) => handle(e, data.cta.href)}
             className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-teal text-white text-[13.5px] font-semibold hover:bg-teal-deep transition-colors">
            {data.cta.label} {CtaIcon && <CtaIcon className="size-[15px]" />}
          </a>
        </div>
      </div>
    </nav>
  );
}
