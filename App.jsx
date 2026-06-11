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
        <TrustBar/>
        <Werkwijze onNav={nav}/>
        <Aanbod onNav={nav}/>
        <Platform onNav={nav}/>
        <AIAct/>
        <About/>
        <Reviews/>
        <Media onNav={nav}/>
        <CTABand onNav={nav}/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
