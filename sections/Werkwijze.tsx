"use client";

import { Icon } from "../icons";
import type { WerkwijzeData, OnNav } from "../types";

interface Props extends OnNav { data: WerkwijzeData }

export function Werkwijze({ data, onNav }: Props) {
  const handle = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNav?.(href);
  };
  const CtaIcon = data.cta?.icon ? Icon[data.cta.icon] : null;

  return (
    <section id={data.id} data-screen-label="Werkwijze" className="py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[740px] mx-auto mb-14">
          <span className="inline-block text-[13px] font-semibold tracking-eyebrow uppercase text-teal mb-4">{data.eyebrow}</span>
          <h2 className="text-[44px] font-semibold leading-[1.1] tracking-tightest text-navy mb-3.5 text-balance">
            {data.title}
          </h2>
          <p className="text-[18px] leading-[1.65] text-navy/70">{data.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.steps.map((s) => {
            const I = Icon[s.icon];
            return (
              <div key={s.n}
                   className="relative bg-white border border-sand-deep rounded-[14px] p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200 ease-flow">
                <div className="absolute -top-[18px] left-7 size-9 rounded-full bg-teal text-white flex items-center justify-center text-[15px] font-semibold shadow-sm">
                  {s.n}
                </div>
                <div className="size-11 rounded-xl bg-teal/15 text-teal flex items-center justify-center mt-2 mb-[18px]">
                  {I && <I className="size-[22px]" />}
                </div>
                <h3 className="text-[20px] font-semibold mb-2">{s.title}</h3>
                <p className="text-[15px] text-navy/70 leading-[1.6] mb-3.5">{s.desc}</p>
                <div className="text-[13px] text-navy/55 inline-flex items-center gap-1.5">
                  <Icon.Clock className="size-[13px]" /> {s.meta}
                </div>
              </div>
            );
          })}
        </div>

        {data.cta && (
          <div className="text-center mt-12">
            <a href={data.cta.href} onClick={(e) => handle(e, data.cta!.href)}
               className="inline-flex items-center gap-2 px-7 py-[15px] rounded-[10px] bg-teal text-white text-base font-semibold hover:bg-teal-deep transition-colors">
              {data.cta.label} {CtaIcon && <CtaIcon className="size-[17px]" />}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
