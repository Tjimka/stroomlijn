function Platform({ onNav }) {
  return (
    <section className="section" id="platform" data-screen-label="Platform">
      <div className="container-wide">
        <div className="platform">
          <div className="platform-inner">
            <div>
              <span className="eyebrow">Platform · app.stroomlijn.nu</span>
              <h2>Bouw zelf je eigen slimme assistent</h2>
              <p>
                Op <strong style={{ color: "#fff" }}>app.stroomlijn.nu</strong> bouw je je eigen
                betaalde GPT's, klantflows, websitepagina's en automatiseringen. Kies een template,
                vul je kennis in, en je assistent doet de rest. Een lichte manier van werken die tijd
                vrijmaakt en rust geeft. Ideaal voor ondernemers, coaches en teams die hun expertise
                slimmer willen inzetten.
              </p>
              <div className="platform-features">
                <div className="platform-feat"><Icon.Agent width={18} height={18} /> AI-agents op maat</div>
                <div className="platform-feat"><Icon.Knowledge width={18} height={18} /> Eigen kennisbank</div>
                <div className="platform-feat"><Icon.Workflow width={18} height={18} /> Visuele flow-builder</div>
                <div className="platform-feat"><Icon.Voice width={18} height={18} /> Voice & chat-modus</div>
                <div className="platform-feat"><Icon.Plug width={18} height={18} /> Koppel met je tools</div>
                <div className="platform-feat"><Icon.Briefcase width={18} height={18} /> Maand- of jaarabonnement</div>
              </div>
              <div className="platform-ctas">
                <button className="btn btn-on-dark btn-lg">
                  Start met bouwen <Icon.ArrowRight width={17} height={17} />
                </button>
                <button className="btn btn-outline-dark btn-lg" onClick={() => onNav("contact")}>
                  Liever samen? Plan een gesprek
                </button>
              </div>
            </div>

            <div className="platform-mock">
              <div className="platform-mock-head">
                <div>
                  <div className="platform-mock-title">Mijn AI-Hub</div>
                  <div className="platform-mock-sub">Verbonden &amp; actief</div>
                </div>
                <span className="platform-mock-pulse">Live</span>
              </div>
              <div className="platform-mock-row">
                <div className="icn"><Icon.Chat width={16} height={16} /></div>
                <div>
                  <div className="nm">Klant-helpdesk agent</div>
                  <div className="dt">42 gesprekken vandaag</div>
                </div>
                <Icon.Check width={18} height={18} className="ck" />
              </div>
              <div className="platform-mock-row">
                <div className="icn"><Icon.Knowledge width={16} height={16} /></div>
                <div>
                  <div className="nm">Kennisbank · 184 docs</div>
                  <div className="dt">Laatst bijgewerkt 2u geleden</div>
                </div>
                <Icon.Check width={18} height={18} className="ck" />
              </div>
              <div className="platform-mock-row">
                <div className="icn"><Icon.Workflow width={16} height={16} /></div>
                <div>
                  <div className="nm">Offerte-flow</div>
                  <div className="dt">7 leads deze week</div>
                </div>
                <Icon.Check width={18} height={18} className="ck" />
              </div>
              <div className="platform-mock-stat">
                <div className="lbl">Tijd bespaard · deze maand</div>
                <div className="val">38 uur</div>
                <div className="delta">+12u t.o.v. vorige maand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Platform = Platform;
