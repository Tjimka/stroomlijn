"use client";

import { Icon } from "../icons";
import type { ServicesData, OnNav, ServiceTone } from "../types";

interface Props extends OnNav { data: ServicesData }

const toneStyles: Record<ServiceTone, string> = {
  teal: "bg-teal/15 text-teal",
  gold: "bg-gold-soft text-gold-deep",
  navy: "bg-navy/10 text-navy",
};

export function Services({ data, onNav }: Props) {
  const handle = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNav?.(href);
  };

  return (
    <section id={data.id} data-screen-label="Aanbod" className="py-24 bg-white/50">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[740px] mb-14">
          <span className="inline-block text-[13px] font-semibold tracking-eyebrow uppercase text-teal mb-4">{data.eyebrow}</span>
          <h2 className="text-[44px] font-semibold leading-[1.1] tracking-tightest text-navy mb-3.5 text-balance">{data.title}</h2>
          <p className="text-[18px] leading-[1.65] text-navy/70">{data.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.cards.map((c, i) => {
            const I = Icon[c.icon];
            return (
              <a key={i} href={c.cta.href} onClick={(e) => handle(e, c.cta.href)}
                 className="flex flex-col bg-white border border-sand-deep rounded-[14px] p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200 ease-flow">
                <div className={`size-[52px] rounded-2xl flex items-center justify-center mb-[22px] ${toneStyles[c.tone]}`}>
                  {I && <I className="size-[26px]" />}
                </div>
                <h3 className="text-[22px] font-semibold mb-2.5">{c.title}</h3>
                <p className="text-[15.5px] text-navy/70 leading-[1.6] mb-[18px] flex-grow">{c.desc}</p>
                <ul className="space-y-2 mb-[22px]">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-[14px] text-navy/70">
                      <Icon.Check className="size-4 text-teal shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 mt-auto text-[14px] font-semibold text-teal">
                  {c.cta.label} <Icon.ArrowRight className="size-3.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
