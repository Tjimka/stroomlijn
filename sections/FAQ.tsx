"use client";

import { useState } from "react";
import { Icon } from "../icons";
import type { FAQData, OnNav } from "../types";

interface Props extends OnNav { data: FAQData }

export function FAQ({ data, onNav }: Props) {
  const [open, setOpen] = useState<number>(0);
  const handle = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNav?.(href);
  };
  const CtaIcon = data.cta?.icon ? Icon[data.cta.icon] : null;

  return (
    <section id={data.id} data-screen-label="FAQ" className="py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-14 items-start">
          <div>
            <span className="inline-block text-[13px] font-semibold tracking-eyebrow uppercase text-teal mb-4">{data.eyebrow}</span>
            <h2 className="text-[44px] font-semibold leading-[1.1] tracking-tightest text-navy mb-3.5 text-balance">{data.title}</h2>
            <p className="text-[18px] leading-[1.65] text-navy/70">{data.lead}</p>
            {data.cta && (
              <a href={data.cta.href} onClick={(e) => handle(e, data.cta!.href)}
                 className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-[10px] border border-sand-deep bg-white text-navy text-[15px] font-semibold hover:bg-sand transition-colors">
                {CtaIcon && <CtaIcon className="size-4" />} {data.cta.label}
              </a>
            )}
          </div>

          <div className="border-t border-sand-deep">
            {data.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-sand-deep">
                  <button aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? -1 : i)}
                          className="w-full flex items-center justify-between gap-4 py-[22px] px-1 text-left text-[17px] font-semibold text-navy hover:text-teal transition-colors">
                    {it.q}
                    <Icon.ChevronDown className={`size-5 text-teal shrink-0 transition-transform duration-200 ease-flow ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="text-[15.5px] leading-[1.65] text-navy/70 px-1 pb-[22px]">{it.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
