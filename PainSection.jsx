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
    <>
      <style>{`
        .pain {
          background: #F0EDE4;
          padding: 96px 0;
        }
        .pain__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          margin-top: 14px;
        }
        .pain__sticky {
          position: sticky;
          top: 90px;
        }
        .pain__sticky h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin: 16px 0 20px;
        }
        .pain__sticky p {
          color: var(--mute, #5a6472);
          font-size: 1.05rem;
          max-width: 34ch;
        }
        .pain__items {
          display: flex;
          flex-direction: column;
        }
        .pain__item {
          display: flex;
          gap: 22px;
          padding: 26px 0;
          border-top: 1px solid rgba(26,46,74,.12);
        }
        .pain__item:last-child {
          border-bottom: 1px solid rgba(26,46,74,.12);
        }
        .pain__num {
          font-family: var(--ff-display, 'DM Sans', Georgia, serif);
          font-style: italic;
          color: var(--gold, #BD9766);
          font-size: 1.6rem;
          flex: 0 0 36px;
          line-height: 1.1;
          padding-top: 2px;
        }
        .pain__item h3 {
          font-size: 1.1rem;
          margin-bottom: 4px;
          color: var(--ink, #1a2e4a);
        }
        .pain__item p {
          font-size: .97rem;
          color: var(--mute, #5a6472);
        }
        @media (max-width: 820px) {
          .pain__grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .pain__sticky {
            position: static;
          }
        }
      `}</style>

      <section className="pain" id="herken">
        <div className="container-wide">
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
    </>
  );
}
