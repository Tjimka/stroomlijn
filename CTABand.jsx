function CTABand({ onNav }) {
  return (
    <section className="section-tight" data-screen-label="CTA">
      <div className="container-wide">
        <div className="ctaband">
          <div>
            <h2>AI werkend krijgen in jouw bedrijf. Met een mens aan het roer.</h2>
            <p>30 minuten, kosteloos en vrijblijvend. We kijken samen of het klikt.</p>
          </div>
          <div className="actions">
            <button className="btn btn-on-dark btn-lg" onClick={() => onNav("contact")}>
              Plan een gratis gesprek <Icon.ArrowRight width={17} height={17} />
            </button>
            <button className="btn btn-outline-dark btn-lg" onClick={() => onNav("aanbod")}>
              Bekijk het aanbod
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTABand = CTABand;
