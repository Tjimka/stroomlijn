function ChatPanel({ agent }) {
  const [msgs, setMsgs] = React.useState([
    { role: "bot", text: "Hoi! Ik ben de " + (agent?.name || "assistent") + ". Waar kan ik je mee helpen?" },
    { role: "user", text: "Wat is de levertijd van een standaardworkshop?" },
    { role: "bot", text: "Een standaardworkshop plannen we meestal binnen 2 tot 3 weken in. Wil je dat ik een beschikbare datum voorstel?" },
  ]);
  const [input, setInput] = React.useState("");
  const endRef = React.useRef(null);

  React.useEffect(() => {
    if (endRef.current) endRef.current.scrollTop = endRef.current.scrollHeight;
  }, [msgs]);

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const txt = input.trim();
    setMsgs(m => [...m, { role: "user", text: txt }]);
    setInput("");
    setTimeout(() => {
      setMsgs(m => [...m, { role: "bot", text: "Goede vraag. Ik kijk het voor je na — één moment." }]);
    }, 700);
  };

  return (
    <div className="chat">
      <div className="chat-head">
        <div className="dot"></div>
        <div className="ttl">Live testen · {agent?.name}</div>
        <div style={{marginLeft: "auto", fontSize: 12, color: "var(--fg-3)"}}>preview-sessie</div>
      </div>
      <div className="chat-msgs" ref={endRef}>
        {msgs.map((m, i) => <div key={i} className={`msg ${m.role}`}>{m.text}</div>)}
      </div>
      <form className="chat-composer" onSubmit={send}>
        <input placeholder="Typ een bericht om de agent te testen…" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit" className="btn btn-primary">
          <AppIcon.Send width={16} height={16}/>
        </button>
      </form>
    </div>
  );
}
window.ChatPanel = ChatPanel;
