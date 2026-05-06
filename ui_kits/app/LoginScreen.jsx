function LoginScreen({ onLogin }) {
  return (
    <div className="login-shell">
      <div className="login-hero">
        <svg className="wv" viewBox="0 0 800 1000" preserveAspectRatio="none">
          <path d="M -50 400 Q 200 300 400 450 T 850 450" stroke="#4899A7" strokeWidth="2" fill="none"/>
          <path d="M -50 520 Q 250 400 500 560 T 850 560" stroke="#4899A7" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M -50 640 Q 200 540 450 680 T 850 680" stroke="#7FB6C0" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
        <div className="top">
          <img src="../../assets/logo-wordmark.png" alt="Stroomlijn"/>
        </div>
        <div className="mid">
          <h1>Rustig slimmer werken, elke dag.</h1>
          <p>Jouw agents, automatiseringen en workflows op één plek. Gemaakt en beheerd door Stroomlijn, draait bij jullie.</p>
        </div>
        <div className="btm">app.stroomlijn.nu · Lemmer, NL</div>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <h2>Inloggen</h2>
          <p>Welkom terug. Log in met je werkmail.</p>
          <div className="field">
            <label>E-mail</label>
            <input type="email" defaultValue="rients@dijkstra.nl" required/>
          </div>
          <div className="field">
            <label>Wachtwoord</label>
            <input type="password" defaultValue="••••••••" required/>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: "100%", justifyContent: "center", padding: "12px 16px"}}>
            Inloggen
          </button>
          <div className="login-alt">
            Geen account? <a href="#" style={{color: "var(--brand-teal)", borderBottom: "none"}}>Vraag toegang</a>
          </div>
        </form>
      </div>
    </div>
  );
}
window.LoginScreen = LoginScreen;
