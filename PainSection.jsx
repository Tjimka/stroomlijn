// PainSection.jsx
// Voeg toe aan index.html na Hero.jsx:
//   <script type="text/babel" src="PainSection.jsx"></script>
// En roep aan in App.jsx: <PainSection />

function PainSection() {
  const items = [
    {
      num: "1",
      title: "AI is overal, maar waar begin je",
      text: "Je ziet de mogelijkheden, maar mist een helder startpunt dat past bij jouw werk en budget.",
      delay: "",
    },
    {
      num: "2",
      title: "Losse tools die niet samenwerken",
      text: "Een app hier, een abonnement daar. Het kost tijd in plaats van dat het tijd oplevert.",
      delay: "d1",
    },
    {
      num: "3",
      title: "Werk dat slimmer kan, maar blijft liggen",
      text: "Opvolging, vragen beantwoorden, administratie. Taken die jouw avonden opeten.",
      delay: "d2",
    },
    {
      num: "4",
      title: "Twijfel over veiligheid en de regels",
      text: "Mag dit wel met klantgegevens, en hoe zit het met de EU AI Act. Begrijpelijke vragen, met een helder antwoord.",
      delay: "d3",
    },
  ];

  return (
    <section className="pain" id="herken">
      <div className="wrap">
        <div className="pain__grid">
          <div className="pain__sticky rv">
            <span className="eyebrow">Herken je dit</span>
            <h2>
              Veel willen met AI. <em>Weinig rust erin.</em>
            </h2>
            <p>
              De meeste ondernemers lopen niet vast op de techniek. Ze lopen
              vast op waar te beginnen, en hoe het rustig blijft. Dat los ik
              samen met je op.
            </p>
          </div>
          <div className="pain__items">
            {items.map((item) => (
              <div
                key={item.num}
                className={["pain__item rv", item.delay].filter(Boolean).join(" ")}
              >
                <span className="pain__num">{item.num}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
