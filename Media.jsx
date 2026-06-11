function Media({ onNav }) {
  // Recent posts/media synthesized from stroomlijn.nu/blog-en-media - placeholders
  // for real content. Mix of podcast episode, blog and press mention.
  const featured = {
    kind: "Podcast",
    date: "Aflevering #05 · 2026",
    title: "AI-geletterdheid zonder gedoe - met Els Verheirstraeten",
    excerpt:
      "Sinds februari 2025 is AI-geletterdheid verplicht voor iedereen die met AI werkt - van zzp tot MKB. Een nuchter gesprek over de AI Act, risico's en hoe je compliant blijft zonder dure juristen.",
    cta: "Luister de aflevering",
    tag: "Fris in je oren",
  };

  const posts = [
    {
      kind: "Blog",
      date: "12 maart 2026",
      title: "Optimaliseer je week met AI in 5 minuten",
      excerpt:
        "De drie-stappenmethode Context → Taken → Ritme. Geen lijstjes, geen geschuif - een haalbare planning die je vandaag al maakt.",
      tag: "TijdSTROOM",
    },
    {
      kind: "Podcast",
      date: "Aflevering #03",
      title: "Praktische AI-tips voor je werkweek",
      excerpt:
        "Hoe AI je helpt sneller keuzes maken, focus houden en ruimte creëren voor ontspanning. Inclusief een prompt om vandaag te proberen.",
      tag: "Fris in je oren",
    },
    {
      kind: "Interview",
      date: "Februari 2026",
      title: "De creatieve kant van AI",
      excerpt:
        "Een gesprek met Manon van New over hoe AI het creatieve proces verandert - en wat het juist niet kan vervangen.",
      tag: "All-in-one Creative",
    },
    {
      kind: "Blog",
      date: "Januari 2026",
      title: "Het STROOM-model: AI in 3 stappen",
      excerpt:
        "Hoe organisaties met een helder driestapsplan AI effectief integreren. Van eerste vraag tot werkend systeem, zonder hype.",
      tag: "Methode",
    },
  ];

  const kindColor = (k) => {
    if (k === "Podcast")  return { bg: "var(--accent-soft)",       fg: "var(--brand-teal-deep)" };
    if (k === "Blog")     return { bg: "var(--accent-gold-soft)",  fg: "var(--brand-gold-deep)" };
    return                       { bg: "rgba(26,46,74,0.08)",      fg: "var(--brand-navy)" };
  };

  return (
    <section className="section media-section" id="media" data-screen-label="Media">
      <div className="container-wide">
        <div className="sec-head" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "end", maxWidth: "none" }}>
          <div>
            <span className="eyebrow">Blog &amp; media</span>
            <h2 className="sec-title">Recente verhalen, podcasts en interviews</h2>
          </div>
          <p className="sec-lead" style={{ marginBottom: 6 }}>
            Tjimka schrijft, praat en denkt hardop over AI in de praktijk. Geen hype-stukken - wel concrete handvatten,
            eerlijke ervaringen en gesprekken met collega's uit het veld.
          </p>
        </div>

        <div className="media-grid">
          {/* FEATURED */}
          <a className="media-featured" href="#">
            <div className="media-featured-art">
              <svg viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="mfg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1A2E4A"/>
                    <stop offset="1" stopColor="#347684"/>
                  </linearGradient>
                </defs>
                <rect width="600" height="360" fill="url(#mfg)"/>
                <path d="M -10 240 Q 150 180 300 240 T 610 240" stroke="rgba(127,182,192,0.35)" strokeWidth="1.5" fill="none"/>
                <path d="M -10 280 Q 200 220 380 290 T 610 290" stroke="rgba(189,151,102,0.28)" strokeWidth="1.5" fill="none"/>
                <path d="M -10 320 Q 220 260 420 330 T 610 330" stroke="rgba(127,182,192,0.18)" strokeWidth="1.5" fill="none"/>
              </svg>
              <div className="media-featured-pulse">
                <span className="dot" />
                <span>Nu beluisteren</span>
              </div>
              <div className="media-featured-icon">
                <Icon.Headphones width={42} height={42} />
              </div>
            </div>
            <div className="media-featured-body">
              <div className="media-meta-row">
                <span className="media-kind" style={{ background: kindColor(featured.kind).bg, color: kindColor(featured.kind).fg }}>
                  {featured.kind}
                </span>
                <span className="media-date">{featured.date}</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <div className="media-foot">
                <span className="media-cta">
                  {featured.cta} <Icon.ArrowRight width={15} height={15} />
                </span>
                <span className="media-tag">{featured.tag}</span>
              </div>
            </div>
          </a>

          {/* LIST */}
          <div className="media-list">
            {posts.map((p, i) => (
              <a key={i} className="media-item" href="#">
                <div className="media-item-meta">
                  <span className="media-kind" style={{ background: kindColor(p.kind).bg, color: kindColor(p.kind).fg }}>
                    {p.kind}
                  </span>
                  <span className="media-date">{p.date}</span>
                </div>
                <h4>{p.title}</h4>
                <p>{p.excerpt}</p>
                <div className="media-item-foot">
                  <span className="media-tag">{p.tag}</span>
                  <Icon.ArrowRight width={15} height={15} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="media-allposts">
          <a className="btn btn-secondary" href="#">
            Alle blogs &amp; afleveringen <Icon.ArrowRight width={15} height={15} />
          </a>
          <span className="media-allposts-meta">Wekelijks nieuwe afleveringen · Abonneer op <em>Fris in je oren</em></span>
        </div>
      </div>
    </section>
  );
}
window.Media = Media;
