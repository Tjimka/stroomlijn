"use client";

import home from "./home.json";
import type { HomeContent } from "./types";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { TrustBar } from "./sections/TrustBar";
import { Werkwijze } from "./sections/Werkwijze";
import { Services } from "./sections/Services";
import { CTABand } from "./sections/CTABand";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";

const data = home as HomeContent;

export default function Home() {
  const onNav = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    if (id === "home" || id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <>
      <Nav data={data.nav} onNav={onNav} />
      <main className="bg-sand text-navy font-sans antialiased">
        <Hero data={data.hero} onNav={onNav} />
        <TrustBar data={data.trustBar} />
        <Werkwijze data={data.werkwijze} onNav={onNav} />
        <Services data={data.services} onNav={onNav} />
        <CTABand data={data.ctaBand} onNav={onNav} />
        <FAQ data={data.faq} onNav={onNav} />
      </main>
      <Footer data={data.footer} onNav={onNav} />
    </>
  );
}
