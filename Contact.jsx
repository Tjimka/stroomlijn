function Contact() {
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="container-wide">
        <div className="sec-head" style={{ textAlign: "center", margin: "0 auto 48px" }}>
          <span className="eyebrow">Plan een kennismaking</span>
          <h2 className="sec-title" style={{ margin: "0 auto 14px" }}>AI werkend krijgen in jouw bedrijf. Zonder gedoe.</h2>
          <p className="sec-lead" style={{ margin: "0 auto" }}>
            30 minuten, kosteloos en vrijblijvend. Bel, mail, of vul het formulier in.
          </p>
        </div>
        <div className="contact-wrap">
          <div className="contact-form-side">
            <h3>Stuur een bericht</h3>
            <p>Ik reageer binnen één werkdag.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="contact-row-2">
                <div className="contact-field">
                  <label htmlFor="naam">Naam</label>
                  <input id="naam" type="text" placeholder="Je naam" />
                </div>
                <div className="contact-field">
                  <label htmlFor="bedrijf">Bedrijf</label>
                  <input id="bedrijf" type="text" placeholder="Optioneel" />
                </div>
              </div>
              <div className="contact-row-2">
                <div className="contact-field">
                  <label htmlFor="mail">E-mail</label>
                  <input id="mail" type="email" placeholder="naam@bedrijf.nl" />
                </div>
                <div className="contact-field">
                  <label htmlFor="tel">Telefoon</label>
                  <input id="tel" type="tel" placeholder="06 - optioneel" />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="onderwerp">Waar gaat het over?</label>
                <select id="onderwerp">
                  <option>Gratis kennismaking</option>
                  <option>Stroomlijn Sessie</option>
                  <option>Advies &amp; strategie</option>
                  <option>Implementatie</option>
                  <option>Platform-abonnement</option>
                  <option>Anders</option>
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="bericht">Je bericht</label>
                <textarea id="bericht" placeholder="Vertel kort wat er speelt - geen pitch nodig."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Verstuur <Icon.Send width={16} height={16} />
              </button>
            </form>
          </div>
          <div className="contact-info-side">
            <h4>Direct contact</h4>
            <div className="contact-row">
              <div className="icn"><Icon.Mail width={18} height={18}/></div>
              <div>
                <div className="ttl">E-mail</div>
                <div className="val">tjimka@stroomlijn.nu</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icn"><Icon.Phone width={18} height={18}/></div>
              <div>
                <div className="ttl">Telefoon</div>
                <div className="val">+31 6 - op aanvraag</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icn"><Icon.MapPin width={18} height={18}/></div>
              <div>
                <div className="ttl">Werkgebied</div>
                <div className="val">Lemmer · Noord-Nederland<br/>Online &amp; fysiek door heel NL</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icn"><Icon.Clock width={18} height={18}/></div>
              <div>
                <div className="ttl">Reactietijd</div>
                <div className="val">Binnen één werkdag</div>
              </div>
            </div>
            <div className="contact-portrait">
              <img src="../../assets/photos/tjimka-koffie.jpg" alt="Tjimka aan het werk" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
