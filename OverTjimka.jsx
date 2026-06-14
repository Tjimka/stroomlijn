const { useState, useEffect, useRef, useCallback } = React;

/* ─── design tokens (uniek geprefixt om botsing met andere scripts te voorkomen) ─── */
const OT = {
  cream:    "#F0EDE4",
  teal:     "#4899A7",
  tealDk:   "#347684",
  goud:     "#BD9766",
  navy:     "#1A2E4A",
  grijs:    "#333333",
  midgrijs: "#777777",
  licht:    "#E3DECE",
};

/* respecteer prefers-reduced-motion */
const OT_REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ─── foto's per wereld. Vervang de paden zodra de foto's gehost zijn. ─── */
const OT_WERELDEN = [
  {
    label: "Water",
    kleur: OT.teal,
    tekst:
      "Op het water ben ik thuis. Van skûtsjesilen tot solo naar Scandinavië op de SVEA. Daar leerde ik wat koers houden echt betekent.",
    fotos: [
      { src: "foto's/Scherm­afbeelding 2026-05-23 om 18.38.10.jpg", alt: "Aan het roer van de SVEA" },
      { src: "foto's/Svea Solo reis - hier in Noorwegen.jpeg", alt: "De SVEA in Noorwegen" },
      { src: "foto's/Scherm­afbeelding 2026-05-23 om 18.44.41.jpg", alt: "IFKS Skûtsjesilen" },
    ],
  },
  {
    label: "Lucht",
    kleur: OT.goud,
    tekst:
      "Elf jaar bij KLM. Meevliegen in een Cessna, later zelfs in een Hawker Hunter. De lucht in betekende voor mij de wereld zien.",
    fotos: [
      { src: "foto's/Vlucht in Dutch Hawker Hunter - naar Engeland.jpeg", alt: "In de cockpit van de Hawker Hunter" },
      { src: "foto's/Vliegen in een Cessna - 1e ervaring.jpeg", alt: "Meevliegen in een Cessna" },
      { src: "foto's/Vlucht KLM met Northwest Airlines.jpeg", alt: "KLM, Dutch Dakota" },
    ],
  },
  {
    label: "Land",
    kleur: OT.teal,
    tekst:
      "Motor, het Pieterpad en twaalf jaar een eigen praktijk in de internationale superjachtwereld. Van Monaco tot St. Barth.",
    fotos: [
      { src: "foto's/Wandelen Pieterpad.jpeg", alt: "Onderweg op het Pieterpad" },
      { src: "foto's/Tjimka op motor.jpg", alt: "Op de motor" },
      { src: "foto's/Superjacht Florida.jpeg", alt: "Superjachten, Fort Lauderdale" },
    ],
  },
  {
    label: "AI",
    kleur: OT.goud,
    tekst:
      "Drie jaar Innovatiecluster Drachten. Robotica, big data, 3D printing. Sinds ChatGPT volledig verdiept in AI als instrument, niet als hype.",
    fotos: [
      { src: "foto's/ICD.jpg", alt: "Innovatiecluster Drachten" },
      { src: "foto's/laptop.jpg", alt: "Aan het werk met AI-agents" },
    ],
  },
];

/* ─── hook: in beeld? ─── */
function useOTInView(threshold = 0.15) {
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

/* ─── kleine crossfade-slideshow binnen de actieve wereld ─── */
function OTSlideshow({ fotos, interval = 3200, pauze }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => { setIdx(0); }, [fotos]);
  useEffect(() => {
    if (OT_REDUCED || pauze || fotos.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % fotos.length), interval);
    return () => clearInterval(t);
  }, [pauze, fotos, interval]);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {fotos.map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute", inset: 0,
            opacity: i === idx ? 1 : 0,
            transition: "opacity 0.9s ease",
          }}
        >
          {f.src ? (
            <img src={f.src} alt={f.alt}
              style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          ) : (
            <div style={{
              width: "100%", height: "100%",
              background: `linear-gradient(150deg, ${OT.licht} 0%, #ded9d0 100%)`,
              display: "flex", alignItems: "flex-end", padding: "16px",
            }}>
              <span style={{ fontSize: "12px", color: OT.midgrijs, fontStyle: "italic" }}>{f.alt}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── compacte teloop-stat ─── */
function OTStat({ getal, label }) {
  const [ref, vis] = useOTInView(0.4);
  const [n, setN] = useState(0);
  const doel = parseInt(getal, 10);
  const suffix = getal.replace(/[0-9]/g, "");
  useEffect(() => {
    if (!vis) return;
    if (OT_REDUCED) { setN(doel); return; }
    let frame; const start = performance.now(); const duur = 900;
    const tick = (t) => {
      const p = Math.min((t - start) / duur, 1);
      setN(Math.round(doel * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [vis, doel]);
  return (
    <div>
      <p style={{ fontSize: "24px", fontWeight: 700, color: OT.navy, lineHeight: 1, margin: 0 }}>{n}{suffix}</p>
      <p style={{ fontSize: "12px", color: OT.midgrijs, margin: "4px 0 0" }}>{label}</p>
    </div>
  );
}

/* ─── hoofd-component. onNav is optioneel en stuurt naar de diensten. ─── */
function OverTjimka({ onNav }) {
  const [actief, setActief] = useState(0);
  const [pauze, setPauze] = useState(false);
  const [paneelRef, paneelVis] = useOTInView(0.12);
  const [introRef, introVis] = useOTInView(0.12);
  const wereld = OT_WERELDEN[actief];

  /* automatisch bladeren door de werelden */
  useEffect(() => {
    if (OT_REDUCED || pauze) return;
    const t = setInterval(() => setActief((i) => (i + 1) % OT_WERELDEN.length), 5500);
    return () => clearInterval(t);
  }, [pauze]);

  const kies = useCallback((i) => setActief(i), []);
  const naarDiensten = (e) => {
    e.preventDefault();
    if (typeof onNav === "function") onNav("aanbod");
  };

  return (
    <section
      id="over"
      style={{
        background: OT.cream,
        color: OT.grijs,
        padding: "88px 0",
        fontFamily: "'Inter', -apple-system, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 32px" }}>
        <div
          className="ot-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.05fr)",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* ── linkerkolom: intro ── */}
          <div
            ref={introRef}
            style={{
              opacity: introVis ? 1 : 0,
              transform: introVis ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: OT.teal, marginBottom: "18px",
            }}>
              Over Tjimka
            </p>
            <h2 style={{
              fontSize: "clamp(24px, 3.4vw, 38px)", fontWeight: 700, lineHeight: 1.2,
              letterSpacing: "-0.02em", color: OT.navy, margin: "0 0 22px",
            }}>
              De brug tussen
              <br />
              <span style={{ color: OT.teal }}>innovatie en de mens.</span>
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: OT.grijs, margin: "0 0 14px" }}>
              De meeste bedrijven beginnen bij de tool. Ik begin bij de processen en de mensen die ermee werken. Pas daarna kijk ik welke AI daar goed bij past.
              Ik kom van de andere kant. KLM, superjachtenindustrie, drie jaar in de kern van de maakindustrie in Noord-Nederland. In al die werelden speelde hetzelfde.
              Technologie en innovatie gaan snel. Mensen bewegen op een ander tempo. De vraag is altijd hoe je die twee bij elkaar brengt.
<br></br>
Dat is mijn vak, al voor AI een naam had.
<br></br>
In 2001 voer ik een jaar alleen. Van Nederland naar Scandinavië. Niet om te ontsnappen, maar om scherp te blijven. Om te voelen of ik nog op de juiste koers zat. Die gewoonte ben ik nooit kwijt geraakt.

            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: OT.grijs, margin: "0 0 28px" }}>
  Bij STROOMLIJN doe ik dat nu voor anderen. Richting geven in een wereld die snel beweegt. Zodat ze niet worden meegesleurd, maar bewust kiezen.

            </p>

            <div style={{
              display: "flex", gap: "32px", margin: "0 0 30px", flexWrap: "wrap",
            }}>
              <OTStat getal="35+" label="jaar werkervaring" />
              <OTStat getal="12" label="jaar zelfstandig" />
              <OTStat getal="3" label="jaar Innovatiecluster" />
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="https://calendly.com/afspraak-met-tjimka/stroomlijn"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block", padding: "12px 26px", background: OT.teal,
                  color: "#fff", fontWeight: 600, fontSize: "15px", borderRadius: "3px",
                  textDecoration: "none", transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = OT.tealDk; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = OT.teal; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Afspraak maken
              </a>
              <a
                href="#aanbod"
                onClick={naarDiensten}
                style={{
                  display: "inline-block", padding: "12px 26px", background: "transparent",
                  color: OT.navy, fontWeight: 600, fontSize: "15px", borderRadius: "3px",
                  textDecoration: "none", border: `1px solid ${OT.navy}`,
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = OT.navy; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = OT.navy; }}
              >
                Bekijk mijn diensten
              </a>
            </div>
          </div>

          {/* ── rechterkolom: interactief paneel ── */}
          <div
            ref={paneelRef}
            onMouseEnter={() => setPauze(true)}
            onMouseLeave={() => setPauze(false)}
            style={{
              opacity: paneelVis ? 1 : 0,
              transform: paneelVis ? "none" : "translateY(24px)",
              transition: "opacity 0.65s ease 120ms, transform 0.65s ease 120ms",
            }}
          >
            {/* wereld-tabs */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
              {OT_WERELDEN.map((w, i) => (
                <button
                  key={w.label}
                  onClick={() => kies(i)}
                  aria-pressed={i === actief}
                  style={{
                    cursor: "pointer", border: "none", borderRadius: "2px",
                    padding: "6px 14px", fontSize: "12px", fontWeight: 600,
                    letterSpacing: "0.04em", textTransform: "uppercase",
                    background: i === actief ? w.kleur : "rgba(15,30,40,0.06)",
                    color: i === actief ? "#fff" : OT.midgrijs,
                    transition: "background 0.25s ease, color 0.25s ease",
                  }}
                >
                  {w.label}
                </button>
              ))}
            </div>

            {/* fotovenster */}
            <div style={{
              position: "relative", width: "100%", aspectRatio: "3 / 4",
              borderRadius: "4px", overflow: "hidden", background: OT.navy,
            }}>
              <OTSlideshow fotos={wereld.fotos} pauze={pauze} />
              {/* leesbare gradient onderaan voor het bijschrift */}
              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0,
                padding: "44px 22px 18px",
                background: "linear-gradient(to top, rgba(15,30,40,0.82), rgba(15,30,40,0))",
              }}>
                <p style={{
                  margin: 0, color: "#fff", fontSize: "15px", lineHeight: 1.55,
                  textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                }}>
                  {wereld.tekst}
                </p>
              </div>
            </div>

            {/* voortgangsbalk per wereld */}
            <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
              {OT_WERELDEN.map((w, i) => (
                <button
                  key={w.label}
                  onClick={() => kies(i)}
                  aria-label={`Toon ${w.label}`}
                  style={{
                    flex: 1, height: "4px", border: "none", borderRadius: "2px",
                    padding: 0, cursor: "pointer",
                    background: i === actief ? w.kleur : OT.licht,
                    transition: "background 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @media (max-width: 820px) {
          #over .ot-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          #over * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}
window.OverTjimka = OverTjimka;
