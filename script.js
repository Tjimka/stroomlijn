/* ---- nav ---- */
function navTo(id){
  var nav = document.getElementById('siteNav');
  nav.removeAttribute('data-menu-open');
  if(id==='home'){ window.scrollTo({top:0,behavior:'smooth'}); return; }
  var el = document.getElementById(id);
  if(el){ window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 84, behavior:'smooth'}); }
}
document.getElementById('navBurger').addEventListener('click', function(){
  var nav = document.getElementById('siteNav');
  if(nav.hasAttribute('data-menu-open')) nav.removeAttribute('data-menu-open');
  else nav.setAttribute('data-menu-open','');
});

/* ---- trust logo slider ---- */
var trustLogos = [
  {img:"https://logic4cdn.azureedge.net/cdn/styles/clients/dekas2021/img/logo.svg", alt:"Dekas Kantoorservice"},
  {img:"https://logo.clearbit.com/filterservice.nl", alt:"Filter Service Heerenveen"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/ICD_logo_final-blue-small.png", alt:"Innovatiecluster Drachten"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/mavasol-logo-ZA.png", alt:"Mavasol"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/Schouwassurantien-logo-1.png", alt:"Schouw Assurantiën"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/DeHaan-logo.png", alt:"DeHaan Advocaten en Notarissen"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/ICD_logo_WhisperPower-1.png", alt:"WhisperPower"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/NefitBosch-1.png", alt:"Nefit Bosch"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/mediahuis-noord.png", alt:"Mediahuis Noord"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/Yourprofessionals.com_.png", alt:"Your Professionals"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/klanten-sportvisserij-nederland.png", alt:"Sportvisserij Nederland"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/tsrh.jpeg", alt:"The Tall Ships Races Harlingen"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/okkinga_communicatie_logo.jpeg", alt:"Okkinga Communicatie"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/koga-logo-1.png", alt:"Koga"},
  {img:"https://tjimka.nl/wp-content/uploads/2025/02/cyclups_zwart_logo.png", alt:"Cyclups"}
];
(function(){
  var track = document.getElementById('trustTrack');
  if(!track) return;
  var copies = 3;
  var html = '';
  for(var c=0;c<copies;c++){
    trustLogos.forEach(function(l){
      html += '<img class="trust-logo-img" src="'+l.img+'" alt="'+l.alt+'" loading="lazy" draggable="false">';
    });
  }
  track.innerHTML = html;

  var oneSetWidth = 0;
  function computeWidth(){ oneSetWidth = track.scrollWidth / copies; if(oneSetWidth) track.scrollLeft = oneSetWidth; }
  var imgs = track.querySelectorAll('img');
  var loaded = 0;
  imgs.forEach(function(im){
    if(im.complete){ loaded++; } else { im.addEventListener('load', function(){ loaded++; if(loaded===imgs.length) computeWidth(); }); im.addEventListener('error', function(){ loaded++; if(loaded===imgs.length) computeWidth(); }); }
  });
  setTimeout(computeWidth, 500);
  window.addEventListener('load', computeWidth);

  var isHover=false, isDragging=false, dragStartX=0, dragStartScroll=0, dragMoved=false;

  function wrapCheck(){
    if(!oneSetWidth) return;
    if(track.scrollLeft <= oneSetWidth*0.15){ track.scrollLeft += oneSetWidth; }
    else if(track.scrollLeft >= oneSetWidth*1.85){ track.scrollLeft -= oneSetWidth; }
  }

  var autoTimer = setInterval(function(){
    if(isHover||isDragging||!oneSetWidth) return;
    track.scrollLeft += 1.1;
    wrapCheck();
  }, 16);

  track.addEventListener('mouseenter', function(){ isHover=true; });
  track.addEventListener('mouseleave', function(){ isHover=false; });

  track.addEventListener('mousedown', function(e){
    isDragging=true; dragMoved=false; dragStartX=e.pageX; dragStartScroll=track.scrollLeft; track.style.scrollBehavior='auto';
  });
  window.addEventListener('mouseup', function(){
    if(isDragging){ isDragging=false; track.style.scrollBehavior='smooth'; wrapCheck(); }
  });
  window.addEventListener('mousemove', function(e){
    if(!isDragging) return;
    var dx = e.pageX - dragStartX;
    if(Math.abs(dx)>3) dragMoved=true;
    track.scrollLeft = dragStartScroll - dx;
  });
  track.addEventListener('touchstart', function(e){
    isDragging=true; dragStartX=e.touches[0].pageX; dragStartScroll=track.scrollLeft; track.style.scrollBehavior='auto';
  }, {passive:true});
  track.addEventListener('touchmove', function(e){
    if(!isDragging) return;
    var dx = e.touches[0].pageX - dragStartX;
    track.scrollLeft = dragStartScroll - dx;
  }, {passive:true});
  track.addEventListener('touchend', function(){ isDragging=false; track.style.scrollBehavior='smooth'; wrapCheck(); });

  document.getElementById('trustPrev').addEventListener('click', function(){ track.scrollBy({left:-320, behavior:'smooth'}); setTimeout(wrapCheck, 400); });
  document.getElementById('trustNext').addEventListener('click', function(){ track.scrollBy({left:320, behavior:'smooth'}); setTimeout(wrapCheck, 400); });
})();

/* ---- pers logo slider (Gezien en geciteerd) ---- */
var persLogos = [
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/09a6bbb061ab2e26.png", alt:"Het Financieele Dagblad", href:"https://fd.nl/opinie/1564682/leren-omgaan-met-ai-tools-kan-het-beste-in-de-bestuurskamer-beginnen"},
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/a3e3eeacccae79df.png", alt:"Leeuwarder Courant", href:"https://lc.nl/opinie/Een-gesprek-met-AI-voelt-écht-maar-wat-zegt-dat-over-ons-opinie-46090942.html"},
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/ba5a7d421652476a.png", alt:"Talkies Lifestyle Magazine", href:"https://www.talkiesmagazine.nl/"},
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/de4df41a2f065f4e.png", alt:"Dagblad van het Noorden", href:"https://lc.nl/opinie/Een-gesprek-met-AI-voelt-écht-maar-wat-zegt-dat-over-ons-opinie-46090942.html"}
];
(function(){
  var track = document.getElementById('persTrack');
  if(!track) return;
  var copies = 4;
  var html = '';
  for(var c=0;c<copies;c++){
    persLogos.forEach(function(l){
      html += '<a class="pers-logo-link" href="'+l.href+'" target="_blank" rel="noopener noreferrer"><img src="'+l.img+'" alt="'+l.alt+'" loading="lazy" draggable="false"></a>';
    });
  }
  track.innerHTML = html;

  var oneSetWidth = 0;
  function computeWidth(){ oneSetWidth = track.scrollWidth / copies; if(oneSetWidth) track.scrollLeft = oneSetWidth; }
  var imgs = track.querySelectorAll('img');
  var loaded = 0;
  imgs.forEach(function(im){
    if(im.complete){ loaded++; } else { im.addEventListener('load', function(){ loaded++; if(loaded===imgs.length) computeWidth(); }); im.addEventListener('error', function(){ loaded++; if(loaded===imgs.length) computeWidth(); }); }
  });
  setTimeout(computeWidth, 500);
  window.addEventListener('load', computeWidth);

  var isHover=false, isDragging=false, dragStartX=0, dragStartScroll=0, dragMoved=false;

  function wrapCheck(){
    if(!oneSetWidth) return;
    if(track.scrollLeft <= oneSetWidth*0.4){ track.scrollLeft += oneSetWidth; }
    else if(track.scrollLeft >= oneSetWidth*2.6){ track.scrollLeft -= oneSetWidth; }
  }

  var autoTimer = setInterval(function(){
    if(isHover||isDragging||!oneSetWidth) return;
    track.scrollLeft += 0.8;
    wrapCheck();
  }, 16);

  track.addEventListener('mouseenter', function(){ isHover=true; });
  track.addEventListener('mouseleave', function(){ isHover=false; });

  track.addEventListener('mousedown', function(e){
    isDragging=true; dragMoved=false; dragStartX=e.pageX; dragStartScroll=track.scrollLeft; track.style.scrollBehavior='auto';
  });
  window.addEventListener('mouseup', function(){
    if(isDragging){ isDragging=false; track.style.scrollBehavior='smooth'; wrapCheck(); }
  });
  window.addEventListener('mousemove', function(e){
    if(!isDragging) return;
    var dx = e.pageX - dragStartX;
    if(Math.abs(dx)>3) dragMoved=true;
    track.scrollLeft = dragStartScroll - dx;
  });
  track.addEventListener('click', function(e){ if(dragMoved){ e.preventDefault(); } }, true);
  track.addEventListener('touchstart', function(e){
    isDragging=true; dragStartX=e.touches[0].pageX; dragStartScroll=track.scrollLeft; track.style.scrollBehavior='auto';
  }, {passive:true});
  track.addEventListener('touchmove', function(e){
    if(!isDragging) return;
    var dx = e.touches[0].pageX - dragStartX;
    track.scrollLeft = dragStartScroll - dx;
  }, {passive:true});
  track.addEventListener('touchend', function(){ isDragging=false; track.style.scrollBehavior='smooth'; wrapCheck(); });

  document.getElementById('persPrev').addEventListener('click', function(){ track.scrollBy({left:-220, behavior:'smooth'}); setTimeout(wrapCheck, 400); });
  document.getElementById('persNext').addEventListener('click', function(){ track.scrollBy({left:220, behavior:'smooth'}); setTimeout(wrapCheck, 400); });
})();

/* ---- reveal on scroll ---- */
var revealEls = document.querySelectorAll('.reveal');
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.12});
revealEls.forEach(function(el){ io.observe(el); });

/* ---- FAQ ---- */
var faqItems = [
  {q:"Hoe snel kan ik AI in mijn bedrijf gebruiken?", a:"Sneller dan je denkt. Een eerste werkende oplossing, bijvoorbeeld een AI-assistent voor klantvragen of interne kennis, staat vaak binnen twee tot vier weken. Een gratis kennismaking duurt 30 minuten."},
  {q:"Wat kost het om te starten?", a:"Elk traject is maatwerk. Na een gratis kennismaking en een korte intake breng ik in kaart wat je nodig hebt, en ontvang je een voorstel dat daarbij past. Geen vaste prijslijst, wel altijd vooraf duidelijkheid voordat je iets afspreekt."},
  {q:"Wat als ik geen technische kennis heb?", a:"Dan ben je bij mij aan het juiste adres. Ik leg AI uit in normale taal en zorg dat je het zelf snapt en kunt sturen. Geen jargon, geen technologische push. Mijn klanten zijn meestal ondernemers en teams zonder IT-achtergrond."},
  {q:"Waar is Stroomlijn gevestigd?", a:"In Lemmer, Friesland. Ik werk met klanten in heel Noord-Nederland en online of fysiek door heel Nederland. Op aanvraag ook in EU-landen, in het Engels."},
  {q:"Werk je alleen of met een team?", a:"Ik werk als zelfstandig ondernemer. Voor grotere projecten trek ik experts uit mijn netwerk erbij, developers, vormgevers, specialisten, en werk daar nauw mee samen. Zo blijft de kwaliteit hoog en blijf jij één aanspreekpunt houden."},
  {q:"Hoe zit het met de EU AI-Act?", a:"De EU AI-Act stelt eisen aan AI-gebruik in bedrijven. Ik help je compliant te werken, denk aan transparantie, risico-classificatie en datagebruik. Compliance is geen extraatje maar een vast onderdeel van elk traject."},
  {q:"Wat is een AI-strateeg?", a:"Een AI-strateeg kijkt welke processen in jouw bedrijf geschikt zijn voor AI, welke tools daarbij passen en hoe je dat verantwoord invoert. Geen losse tools, maar een aanpak die bij jouw werk past."},
  {q:"Wat is het verschil tussen een consultant en een trainer?", a:"Een consultant adviseert en bouwt. Een trainer leert je team ermee werken. Bij STROOMLIJN doe ik beide, zodat advies, bouw en kennisoverdracht in één hand blijven."},
  {q:"Kun je ook helpen om gevonden te worden door AI-zoekmachines?", a:"Ja. Naast klassieke zoekmachine-optimalisatie werk ik aan GEO, generative engine optimization. Dat zorgt dat AI-modellen zoals ChatGPT en Claude jouw bedrijf vinden en aanbevelen wanneer iemand om hulp in jouw vakgebied vraagt."}
];
var faqList = document.getElementById('faqList');
faqItems.forEach(function(item, i){
  var div = document.createElement('div');
  div.className = 'faq-item' + (i===0?' open':'');
  div.innerHTML = '<button class="faq-trigger" aria-expanded="'+(i===0)+'">'+item.q+' <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-body"><div class="faq-body-inner">'+item.a+'</div></div>';
  faqList.appendChild(div);
  div.querySelector('.faq-trigger').addEventListener('click', function(){
    var wasOpen = div.classList.contains('open');
    faqList.querySelectorAll('.faq-item').forEach(function(fi){ fi.classList.remove('open'); fi.querySelector('.faq-trigger').setAttribute('aria-expanded','false'); });
    if(!wasOpen){ div.classList.add('open'); div.querySelector('.faq-trigger').setAttribute('aria-expanded','true'); }
  });
});

/* ---- Over Tjimka chapters ---- */
var chapters = [
  {label:"Toen", period:"5 jaar oud", text:"Al vroeg aan de telefoon. Verbinding maken zit er lang in, alleen de technologie veranderde.", img:"https://app.stroomlijn.nu/objects/quick-uploads/82/7ae7a028174dac20.png", alt:"Tjimka als kind aan de telefoon"},
  {label:"Roots", period:"Emmen & Tijnje · 1970-1988", text:"Geboren in Emmen, met een pony in de tuin. Op mijn 4e naar Tijnje, een Friestalig dorp. Nederlandstalig, aan de rand. Je past je aan aan een omgeving die niet op je wacht. Dat leer je vroeg, of niet.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/Emmen%20-%201e%20pony%20in%20tuin.jpeg", alt:"Tjimka als kind met haar eerste pony in de tuin in Emmen"},
  {label:"Parijs & Frankrijk", period:"1988-1990", text:"Au-pair in Parijs op 17,5 jaar. Geen netwerk, geen plan, wel nieuwsgierigheid. Vloeiend Engels en Frans geleerd in de praktijk. Daarna Chalon-sur-Saône, waar ik het motorrijden en de vrijheid op twee wielen ontdekte.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/Parijs%20-%20au-pair.jpeg", alt:"Tjimka als au-pair in Parijs, 1988"},
  {label:"KLM", period:"1995-2006", text:"Elf jaar KLM. Releases voor 70 landen, de Zwaanzinnige Aanbiedingen live op teletekst, internet van nieuw fenomeen naar digitaal platform. De schakel tussen marketing, IT en de eindgebruiker.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/KLM%20Website.jpeg", alt:"De KLM-website waaraan Tjimka meebouwde"},
  {label:"KLM · teamgevoel", period:"1995-2006", text:"De Dutch Dragons drakenbootploeg, ski-uitjes, IPB-reizen. Naast het werk zelf was er een hechte gemeenschap, met plezier en interne cultuur die je moest leren lezen.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/KLM%20Drakenbootrace.jpg", alt:"Het KLM-drakenbootteam tijdens een race"},
  {label:"De SVEA", period:"2001-2002", text:"Een sabbatical midden in de KLM-jaren. Solo naar Scandinavië op de SVEA, gefilmd door Sunny Bergman voor 'Echter dan Echt'. Op zee heb je geen gelijk, je past aan, of je vergaat.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/Svea%20Solo%20reis%20-%20hier%20in%20Noorwegen.jpeg", alt:"De SVEA tijdens de solozeilreis, hier in Noorwegen"},
  {label:"Superjachten", period:"2006-2012", text:"Van Holland Jachtbouw en Hoek Brokerage tot Feadship Aftersales. Bootshows in Monaco en Fort Lauderdale, regatta's in St. Barth. Hoge verwachtingen, discretie, de vertaalslag van systeem naar mens en terug.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/Superjacht%20werken%20aan%20boord%20als%20Stewardess.jpeg", alt:"Tjimka aan boord van een superjacht"},
  {label:"In de lucht", period:"2008", text:"Marketing en PR voor de Dutch Hawker Hunter Foundation. Zelf meegevlogen naar Engeland en naar airshows in Zwitserland. Avontuur en techniek, dicht op elkaar.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/Vlucht%20in%20Dutch%20Hawker%20Hunter.jpeg", alt:"Tjimka bij een vlucht in de Dutch Hawker Hunter"},
  {label:"Motor & vrijheid", period:"Sinds 1989", text:"Het motorrijden ontdekt in Frankrijk, nooit meer losgelaten. Van Harley tot BMW. Dezelfde regie die ik ook op zee en in mijn werk zoek: zelf sturen, zelf de koers bepalen.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/Tjimka%20op%20motor.jpg", alt:"Tjimka op haar motor"},
  {label:"Innovatiecluster Drachten", period:"2020-2023", text:"Drie jaar in de kern van de Noord-Nederlandse maakindustrie. 24 hightechbedrijven, Robotica, Big Data, 3D Printing. Het digitale domein van het cluster vormgegeven en de zichtbaarheid vergroot.", img:"https://app.stroomlijn.nu/objects/quick-uploads/82/e1033131d68e1347.jpg", alt:"Tjimka bij Innovatiecluster Drachten"},
  {label:"Naast het werk", period:"Een greep uit de bezigheden", text:"Motorrijden, zeilen op het IJsselmeer, skiën, een fanatieke Formule 1-kijker, en het Pieterpad lopen van Pieterburen naar Maastricht. Rust vinden buiten het scherm hoort net zo bij mijn werk als de AI zelf.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/foto%27s/Formule%201%20Zandvoort.jpeg", alt:"Tjimka bij het Formule 1-circuit van Zandvoort"},
  {label:"AI & STROOMLIJN", period:"2013-nu", text:"Sinds 2013 zelfstandig vanuit Lemmer. Drie jaar Innovatiecluster Drachten, 24 bedrijven, robotica en big data. In 2022 dezelfde fascinatie als bij de eerste KLM-websites, nu met ChatGPT. STROOMLIJN werd de logische volgende stap, inmiddels met een eigen platform dat alle grote taalmodellen ondersteunt en werkt via API's en MCP-koppelingen, niet gebonden aan één tool.", img:"https://raw.githubusercontent.com/Tjimka/stroomlijn/main/assets/photos/tjimka-presentatie-2.jpg", alt:"Tjimka geeft een presentatie over werken met AI"},
  {label:"Nu", period:"Vandaag", text:"De telefoon is compacter en slimmer geworden, het gesprek is nog net zo menselijk. Zo sta ik ook mijn klanten te woord. De technologie verandert, het persoonlijke contact blijft.", img:"https://app.stroomlijn.nu/objects/quick-uploads/82/00be201fc8561b93.jpg", alt:"Tjimka nu aan de telefoon"}
];
var overTabs = document.getElementById('overTabs');
var overBars = document.getElementById('overBars');
var overPeriod = document.getElementById('overPeriod');
var overText = document.getElementById('overText');
var overImg = document.getElementById('overImg');
var overActive = 0;
function renderOver(){
  overTabs.innerHTML=''; overBars.innerHTML='';
  chapters.forEach(function(c,i){
    var tab=document.createElement('button'); tab.className='over-tab'+(i===overActive?' active':''); tab.textContent=c.label;
    tab.onclick=function(){ overActive=i; renderOver(); };
    overTabs.appendChild(tab);
    var bar=document.createElement('button'); bar.className='over-bar'+(i===overActive?' active':''); bar.setAttribute('aria-label','Toon '+c.label);
    bar.onclick=function(){ overActive=i; renderOver(); };
    overBars.appendChild(bar);
  });
  overPeriod.textContent = chapters[overActive].period;
  overText.textContent = chapters[overActive].text;
  var c = chapters[overActive];
  if(overImg.getAttribute('src') !== c.img){
    overImg.classList.add('fading');
    var next = new Image();
    next.onload = function(){ overImg.src = c.img; overImg.alt = c.alt; overImg.classList.remove('fading'); };
    next.onerror = function(){ overImg.classList.remove('fading'); };
    next.src = c.img;
  }
}
renderOver();
/* foto's van de andere hoofdstukken alvast laden zodra de sectie in beeld komt */
(function(){
  var loadedAll = false;
  var overSection = document.getElementById('over');
  var preIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && !loadedAll){
        loadedAll = true;
        chapters.forEach(function(c){ var im = new Image(); im.src = c.img; });
        preIO.unobserve(overSection);
      }
    });
  },{rootMargin:'400px'});
  preIO.observe(overSection);
})();
var overPaused=false;
document.getElementById('overPanel').addEventListener('mouseenter',function(){overPaused=true;});
document.getElementById('overPanel').addEventListener('mouseleave',function(){overPaused=false;});
setInterval(function(){ if(!overPaused){ overActive=(overActive+1)%chapters.length; renderOver(); } },5500);