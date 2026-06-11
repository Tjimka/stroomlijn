function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="../../assets/logo-wordmark.png" alt="Stroomlijn" />
            <p className="footer-tag">
              AI-strategie, training en implementatie. Menselijk, praktisch, op maat.
              Vanuit Lemmer, voor heel Nederland.
            </p>
            <div className="footer-social">
              <a aria-label="LinkedIn"><Icon.Linkedin width={18} height={18}/></a>
              <a aria-label="E-mail"><Icon.Mail width={18} height={18}/></a>
              <a aria-label="Telefoon"><Icon.Phone width={18} height={18}/></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Aanbod</h5>
            <a>Advies &amp; strategie</a>
            <a>Training &amp; sessies</a>
            <a>Implementatie</a>
            <a>Platform</a>
          </div>
          <div className="footer-col">
            <h5>Werkwijze</h5>
            <a>Kennismaking</a>
            <a>Stroomlijn Sessie</a>
            <a>Plan van aanpak</a>
            <a>EU AI-Act</a>
          </div>
          <div className="footer-col">
            <h5>Stroomlijn</h5>
            <a>Over Tjimka</a>
            <a>Klantverhalen</a>
            <a>Nieuws &amp; blog</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Stroomlijn - Tjimka Bakker · KvK 00000000</div>
          <div className="legal">
            <a>Privacy</a>
            <a>Algemene voorwaarden</a>
            <a>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
