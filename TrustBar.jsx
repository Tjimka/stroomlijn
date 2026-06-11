function TrustBar() {
  // Real client logos from Tjimka's prior work. Logos rendered grayscale on
  // hover-to-color so the row reads as a calm trust strip, not a busy bazaar.
  const clients = [
    { src: "/assets/clients/klm.png",              alt: "KLM",                 h: 38 },
    { src: "/assets/clients/koga.png",             alt: "Koga",                h: 26 },
    { src: "/assets/clients/whisperpower.png",     alt: "WhisperPower",        h: 50 },
    { src: "/assets/clients/sportvisserij.jpeg",   alt: "Sportvisserij Nederland", h: 46 },
    { src: "/assets/clients/icd.png",              alt: "Innovatiecluster Drachten", h: 40 },
    { src: "/assets/clients/dehaan.png",           alt: "DeHaan Advocaten en Notarissen", h: 32 },
    { src: "/assets/clients/nefitbosch.png",       alt: "Nefit Bosch",         h: 44 },
    { src: "/assets/clients/mediahuis.png",        alt: "Mediahuis Noord",     h: 36 },
    { src: "/assets/clients/vibegroup.jpg",        alt: "Vibe Group",          h: 36 },
    { src: "/assets/clients/yourprofessionals.png",alt: "Your Professionals",  h: 36 },
    { src: "/assets/clients/mavasol.png",          alt: "Mavasol",             h: 34 },
    { src: "/assets/clients/okkinga.jpeg",         alt: "Okkinga Communicatie",h: 40 },
    { src: "/assets/clients/schouw.png",           alt: "Schouw Assurantiën",  h: 36 },
    { src: "/assets/clients/tsrh.jpeg",            alt: "The Tall Ships Races Harlingen", h: 42 },
  ];

  return (
    <section className="trust-bar" data-screen-label="Trust">
      <div className="container-wide">
        <div className="trust-bar-label">Eerder gewerkt met</div>
        <div className="trust-logos">
          {clients.map((c, i) => (
            <img
              key={i}
              className="trust-logo-img"
              src={c.src}
              alt={c.alt}
              style={{ height: c.h }}
              loading="lazy"
            />
          ))}
        </div>
        <p className="trust-bar-foot">
          Van luchtvaart en superjachten tot MKB in Friesland - 30+ jaar marketingervaring,
          nu ingezet voor AI die past bij <em>jouw</em> werk.
        </p>
      </div>
    </section>
  );
}
window.TrustBar = TrustBar;
