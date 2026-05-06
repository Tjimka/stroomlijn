function AIAct() {
  // 12 EU stars (subtle dot row)
  const stars = Array.from({ length: 12 });
  return (
    <section className="section-tight" data-screen-label="EU AI-Act">
      <div className="container-wide">
        <div className="aiact">
          <div className="aiact-shield">
            <Icon.Shield width={42} height={42} />
          </div>
          <div>
            <div className="aiact-stars" aria-hidden="true">
              {stars.map((_, i) => <span className="aiact-star" key={i}/>)}
            </div>
            <div className="aiact-eu">EU AI-Act · 2026</div>
            <h3 style={{ marginTop: 4 }}>AI implementeren binnen de regels</h3>
            <p>
              De EU AI-Act stelt eisen aan hoe je AI inzet in je bedrijf. Denk aan
              transparantie, risico-classificatie en datagebruik. Ik help je
              compliant te werken zonder dat het bureaucratie wordt. Onderdeel van
              elk advies- en implementatietraject.
            </p>
          </div>
          <div>
            <button className="btn btn-secondary">
              Lees meer <Icon.ArrowRight width={15} height={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.AIAct = AIAct;
