function App() {
  const [current, setCurrent] = React.useState("home");

  const nav = (id) => {
    setCurrent(id);
    if (id === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <>
      <Nav current={current} onNav={nav}/>
      <main>
        <div id="home"></div>
        <Hero onNav={nav}/>
        <PainSection/>
        <TrustBar/>
        <div id="werkwijze"><Werkwijze onNav={nav}/></div>
        <div id="aanbod"><Aanbod onNav={nav}/></div>
        <div id="platform"><Platform onNav={nav}/></div>
        <div id="aiact"><AIAct/></div>
        {/* OverTjimka rendert zelf al <section id="over">, dus hier geen extra id */}
        <OverTjimka onNav={nav}/>
        <div id="reviews"><Reviews/></div>
        <div id="media"><Media onNav={nav}/></div>
        <div id="cta"><CTABand onNav={nav}/></div>
        <div id="faq"><FAQ/></div>
        <div id="contact"><Contact/></div>
      </main>
      <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
