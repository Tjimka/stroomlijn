import { useState, useEffect, useRef, useCallback } from "react";

/* ─── design tokens STROOMLIJN ──────────────────────────── */
const T = {
  cream:    "#F7F1E6",
  teal:     "#4899A7",
  tealDk:   "#3a7d89",
  goud:     "#BD9766",
  navy:     "#0F1E28",
  grijs:    "#333333",
  midgrijs: "#777777",
  licht:    "#ECEAE4",
};

/* ─── foto's per wereld ─────────────────────────────────────
   Vervang de placeholder-objecten door echte paden zodra de
   foto's gehost zijn. Structuur: { src: "url", alt: "tekst" }.
   Zonder src toont de component een rustige kleurplaat met
   het bijschrift, zodat de lay-out alvast klopt.            */
const FOTOS = {
  hero: [
    { src: "foto's/telefoon kopie.jpg", alt: "Tjimka nu, telefoon aan het oor" },
    { src: "foto's/Tjimka aan telefoon (5jr).jpg", alt: "Tjimka als kind aan de speelgoedtelefoon" },
  ],
  water: [
    { src: "foto's/Scherm­afbeelding 2026-05-23 om 18.38.10.jpg", alt: "Aan het roer van de SVEA" },
    { src: "foto's/Svea Solo reis - hier in Noorwegen.jpeg", alt: "De SVEA in Noorwegen" },
    { src: "foto's/Scherm­afbeelding 2026-05-23 om 18.44.41.jpg", alt: "IFKS Skûtsjesilen" },
  ],
  lucht: [
    { src: "foto's/Vlucht in Dutch Hawker Hunter - naar Engeland.jpeg", alt: "In de cockpit van de Hawker Hunter" },
    { src: "foto's/Vliegen in een Cessna - 1e ervaring.jpeg", alt: "Meevliegen in een Cessna" },
    { src: "foto's/Vlucht KLM met Northwest Airlines.jpeg", alt: "KLM, Dutch Dakota" },
  ],
  land: [
    { src: "foto's/Wandelen Pieterpad.jpeg", alt: "Onderweg op het Pieterpad" },
    { src: "foto's/Tjimka op motor.jpg", alt: "Op de motor" },
    { src: "foto's/Superjacht Florida.jpeg", alt: "Superjachten, Fort Lauderdale" },
  ],
  ai: [
    { src: "foto's/ICD.jpg", alt: "Innovatiecluster Drachten" },
    { src: "foto's/laptop.jpg", alt: "Aan het werk met AI-agents" },
  ],
};

/* ─── hook: in beeld? ───────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── hook: scrollvoortgang van de sectie ───────────────── */
function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return [ref, progress];
}

/* ─── slideshow met crossfade en klikbediening ──────────── */
function Slideshow({ fotos, interval = 4200, hoogte = "320px", kleur = T.teal }) {
  const [idx, setIdx] = useState(0);
  const [pauze, setPauze] = useState(false);

  useEffect(() => {
    if (pauze || fotos.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % fotos.length), interval);
    return () => clearInterval(t);
  }, [pauze, fotos.length, interval]);

  const volgende = useCallback(
    () => setIdx((i) => (i + 1) % fotos.length),
    [fotos.length]
  );

  return (
    <div
      onClick={volgende}
      onMouseEnter={() => setPauze(true)}
      onMouseLeave={() => setPauze(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") volgende(); }}
      aria-label="Volgende foto"
      style={{
        position: "relative",
        width: "100%",
        height: hoogte,
        borderRadius: "4px",
        overflow: "hidden",
        cursor: fotos.length > 1 ? "pointer" : "default",
        background: T.licht,
      }}
    >
      {fotos.map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === idx ? 1 : 0,
            transition: "opacity 0.9s ease",
          }}
        >
          {f.src ? (
            <img
              src={f.src}
              alt={f.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(150deg, ${T.licht} 0%, #ded9d0 100%)`,
                display: "flex",
                alignItems: "flex-end",
                padding: "16px",
              }}
            >
              <span style={{ fontSize: "12px", color: T.midgrijs, fontStyle: "italic" }}>
                {f.alt}
              </span>
            </div>
          )}
        </div>
      ))}

      {/* voortgangsstipjes */}
      {fotos.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            display: "flex",
            gap: "6px",
            zIndex: 2,
          }}
        >
          {fotos.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === idx ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === idx ? kleur : "rgba(255,255,255,0.7)",
                transition: "width 0.35s ease, background 0.35s ease",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── wereld-blok: label + tekst + slideshow, om en om ──── */
function WereldBlok({ label, kleur, tekst, detail, fotos, omgekeerd, vertraging = 0 }) {
  const [ref, vis] = useInView(0.12);
  return (
    <div
      ref={ref}
      className="wereld-grid"
      style={{
        display: "grid",
        gridTemplateColumns: omgekeerd ? "minmax(0,5fr) minmax(0,4fr)" : "minmax(0,4fr) minmax(0,5fr)",
        gap: "48px",
        alignItems: "center",
        padding: "56px 0",
        borderTop: `1px solid ${T.licht}`,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${vertraging}ms, transform 0.6s ease ${vertraging}ms`,
      }}
    >
      {/* tekstkolom */}
      <div style={{ order: omgekeerd ? 2 : 1 }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: kleur,
            padding: "4px 10px",
            border: `1px solid ${kleur}`,
            borderRadius: "2px",
            marginBottom: "20px",
          }}
        >
          {label}
        </span>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: T.grijs, marginBottom: detail ? "14px" : 0 }}>
          {tekst}
        </p>
        {detail && (
          <p style={{ fontSize: "14px", lineHeight: 1.7, color: T.midgrijs, fontStyle: "italic" }}>
            {detail}
          </p>
        )}
      </div>

      {/* fotokolom */}
      <div style={{ order: omgekeerd ? 1 : 2 }}>
        <Slideshow fotos={fotos} kleur={kleur} hoogte="300px" />
      </div>
    </div>
  );
}

/* ─── pijler met hover ──────────────────────────────────── */
function Pijler({ kop, tekst }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "rgba(72,153,167,0.18)" : "rgba(72,153,167,0.08)",
        padding: "28px 24px",
        transition: "background 0.25s ease, transform 0.25s ease",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        borderTop: `2px solid ${hover ? T.goud : "transparent"}`,
      }}
    >
      <p style={{ fontSize: "13px", fontWeight: 700, color: T.goud, marginBottom: "10px", letterSpacing: "0.02em" }}>
        {kop}
      </p>
      <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>
        {tekst}
      </p>
    </div>
  );
}

/* ─── stat met teloop-animatie bij eerste zicht ─────────── */
function Stat({ getal, label }) {
  const [ref, vis] = useInView(0.4);
  const [n, setN] = useState(0);
  const doel = parseInt(getal, 10);
  const suffix = getal.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!vis) return;
    let frame;
    const start = performance.now();
    const duur = 900;
    const tick = (t) => {
      const p = Math.min((t - start) / duur, 1);
      setN(Math.round(doel * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [vis, doel]);

  return (
    <div ref={ref} style={{ background: T.cream, padding: "16px 18px", textAlign: "center" }}>
      <p style={{ fontSize: "22px", fontWeight: 700, color: T.navy, lineHeight: 1, marginBottom: "4px" }}>
        {n}{suffix}
      </p>
      <p style={{ fontSize: "11px", color: T.midgrijs, lineHeight: 1.4 }}>{label}</p>
    </div>
  );
}

/* ─── hoofd-component ───────────────────────────────────── */
export default function OverTjimka() {
  const [sectieRef, progress] = useScrollProgress();
  const [heroRef, heroVis] = useInView(0.08);
  const [sluitRef, sluitVis] = useInView(0.2);

  const werelden = [
    {
      label: "Water",
      kleur: T.teal,
      fotos: FOTOS.water,
      tekst:
        "Op het water ben ik thuis. Van zeilkamp en IFKS-Skûtsjesilen tot internationale regatta's. In 2001 voer ik solo richting Scandinavië op de SVEA. Sunny Bergman filmde het vertrek voor haar documentaire \"Echter dan Echt\".",
      detail: "Alleen op zee leer je wat richting werkelijk betekent. En dat geduld een werkvorm is.",
      omgekeerd: false,
    },
    {
      label: "Lucht",
      kleur: T.goud,
      fotos: FOTOS.lucht,
      tekst:
        "In de lucht kwam ik jong terecht. Met vrienden meevliegen in een Cessna, koffie halen in Rotterdam of Texel, een weekend Guernsey. Bij KLM, waar ik elf jaar werkte, zag ik een flink deel van de wereld dankzij de personeelsregeling om in eigen tijd mee te vliegen. Later nog de Hawker Hunter straaljager, meevliegen naar Engeland, Zwitserland, Eelde.",
      detail: null,
      omgekeerd: true,
    },
    {
      label: "Land",
      kleur: T.teal,
      fotos: FOTOS.land,
      tekst:
        "Op het land rij ik motor en wandel ik graag. Het Pieterpad. Onlangs 20 km voor Lymph&Co via de Hollandse 100. Twaalf jaar bouwde ik een eigen marketingpraktijk en werkte ik in de internationale superjachtwereld, van Fort Lauderdale en Monaco tot St. Barth.",
      detail: null,
      omgekeerd: false,
    },
    {
      label: "AI",
      kleur: T.goud,
      fotos: FOTOS.ai,
      tekst:
        "Na KLM volgde het Innovatiecluster Drachten, drie jaar lang. Robotica, visuele intelligentie, big data, renewable propulsion en 3D printing in de maakindustrie. Dat werd mijn aanloop naar AI. Vanaf de lancering van ChatGPT ben ik me er volledig in gaan verdiepen.",
      detail: "Niet de hype, maar het instrument. Iets dat werk lichter maakt, als je weet wat je ermee wilt.",
      omgekeerd: true,
    },
  ];

  return (
    <div
      ref={sectieRef}
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: T.cream,
        color: T.grijs,
        WebkitFontSmoothing: "antialiased",
        position: "relative",
      }}
    >
      {/* ── koerslijn: scrollvoortgang langs de linkerrand ── */}
      <div
        className="koerslijn"
        aria-hidden="true"
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          width: "3px",
          height: "100vh",
          background: T.licht,
          zIndex: 50,
        }}
      >
        <div
          style={{
            width: "100%",
            height: `${progress * 100}%`,
            background: `linear-gradient(to bottom, ${T.teal}, ${T.goud})`,
            transition: "height 0.1s linear",
          }}
        />
      </div>

      {/* ── hero ── */}
      <section style={{ padding: "96px 0 72px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px" }}>
          <div
            ref={heroRef}
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) 340px",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: T.teal, marginBottom: "24px",
                  opacity: heroVis ? 1 : 0, transform: heroVis ? "none" : "translateY(16px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                Over Tjimka
              </p>
              <h1
                style={{
                  fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 700, lineHeight: 1.18,
                  letterSpacing: "-0.025em", color: T.navy, marginBottom: "32px",
                  opacity: heroVis ? 1 : 0, transform: heroVis ? "none" : "translateY(16px)",
                  transition: "opacity 0.55s ease 120ms, transform 0.55s ease 120ms",
                }}
              >
                Altijd op zoek naar koers.
                <br />
                <span style={{ color: T.teal }}>Dan met rust aankomen.</span>
              </h1>
              <p
                style={{
                  fontSize: "18px", lineHeight: 1.75, color: T.grijs, marginBottom: "20px", maxWidth: "540px",
                  opacity: heroVis ? 1 : 0, transform: heroVis ? "none" : "translateY(16px)",
                  transition: "opacity 0.55s ease 240ms, transform 0.55s ease 240ms",
                }}
              >
                Mijn loopbaan loopt zelden in een rechte lijn. Dat heeft me scherp gemaakt. Ik beweeg me al jaren tussen werelden die op het eerste gezicht weinig met elkaar te maken hebben: water, lucht, ondernemen, techniek.
              </p>
              <p
                style={{
                  fontSize: "18px", lineHeight: 1.75, color: T.grijs, maxWidth: "540px",
                  opacity: heroVis ? 1 : 0, transform: heroVis ? "none" : "translateY(16px)",
                  transition: "opacity 0.55s ease 360ms, transform 0.55s ease 360ms",
                }}
              >
                Op die snijvlakken leer ik het meest. En dat is precies waar ik nu sta: AI-strategie voor mensen die rust willen, geen ruis.
              </p>
            </div>

            <div
              style={{
                opacity: heroVis ? 1 : 0, transform: heroVis ? "none" : "translateY(24px)",
                transition: "opacity 0.65s ease 200ms, transform 0.65s ease 200ms",
              }}
            >
              <Slideshow fotos={FOTOS.hero} hoogte="420px" interval={5000} />
              <div
                style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: "1px", marginTop: "1px", background: T.licht,
                }}
              >
                <Stat getal="35+" label="jaar werkervaring" />
                <Stat getal="6" label="sectoren doorlopen" />
                <Stat getal="12" label="jaar zelfstandig" />
                <Stat getal="3" label="jaar Innovatiecluster" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── goudlijn ── */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: "1px", background: T.goud, opacity: 0.4 }} />
      </div>

      {/* ── vier werelden ── */}
      <section style={{ padding: "8px 0 72px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: T.midgrijs, padding: "40px 0 8px",
            }}
          >
            Vier werelden, één aanpak
          </p>
          {werelden.map((w, i) => (
            <WereldBlok key={w.label} {...w} vertraging={i * 80} />
          ))}
        </div>
      </section>

      {/* ── solo maar nooit alleen ── */}
      <section style={{ background: T.navy, padding: "80px 0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: T.teal, marginBottom: "24px",
            }}
          >
            Werkwijze
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700,
              letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.25, marginBottom: "28px",
            }}
          >
            Solo, maar nooit alleen
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: "16px" }}>
            Ik werk als zelfstandig ondernemer. Voor grotere projecten trek ik experts uit mijn netwerk erbij, van developers tot vormgevers, en stuur het strak aan.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
            Zo lever ik altijd wat een project vraagt, zonder concessies aan kwaliteit.
          </p>

          <div
            className="pijler-grid"
            style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px", marginTop: "48px", background: "rgba(255,255,255,0.06)",
            }}
          >
            <Pijler
              kop="Eerst begrijpen"
              tekst="Ik begin bij jouw werk. Eerst snappen wat er speelt, dan bouwen. Nooit andersom."
            />
            <Pijler
              kop="Vertaalslag"
              tekst="Systeem naar mens, en mens naar systeem. Dat zit er zo diep in dat het geen bewuste keuze meer is."
            />
            <Pijler
              kop="Wrijving weg"
              tekst="STROOMLIJN verwijst naar stromend water. Ik los obstakels op zodat jouw werk weer stroomt."
            />
          </div>
        </div>
      </section>

      {/* ── sluitende CTA ── */}
      <section
        ref={sluitRef}
        style={{
          background: T.cream, padding: "96px 0",
          opacity: sluitVis ? 1 : 0,
          transform: sluitVis ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div style={{ width: "40px", height: "2px", background: T.goud, margin: "0 auto 32px" }} />
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: T.navy,
              letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: "20px",
            }}
          >
            Wil je weten wat AI concreet voor jouw werk kan betekenen?
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: T.midgrijs, marginBottom: "36px" }}>
            Maak een vrijblijvende afspraak. Dan kijken we samen wat past.
          </p>
          <a
            href="https://calendly.com/afspraak-met-tjimka/stroomlijn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block", padding: "14px 32px", background: T.teal,
              color: "#fff", fontWeight: 600, fontSize: "15px", borderRadius: "3px",
              textDecoration: "none", letterSpacing: "0.01em", transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.background = T.tealDk; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.target.style.background = T.teal; e.target.style.transform = "translateY(0)"; }}
          >
            Afspraak maken
          </a>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        @media (max-width: 760px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .wereld-grid { grid-template-columns: 1fr !important; gap: 24px !important; padding: 40px 0 !important; }
          .wereld-grid > div { order: initial !important; }
          .pijler-grid { grid-template-columns: 1fr !important; }
          .koerslijn { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </div>
  );
}
