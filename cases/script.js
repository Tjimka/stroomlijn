(function(){
  var omhoog=document.getElementById('scroll-omhoog');
  var omlaag=document.getElementById('scroll-omlaag');
  function update(){
    var y=window.scrollY;
    var onderaan=(window.innerHeight+y)>=document.body.scrollHeight-120;
    omhoog.style.display=y>400?'flex':'none';
    omlaag.style.display=onderaan?'none':'flex';
  }
  window.addEventListener('scroll',update,{passive:true});
  update();
})();

(function(){
  var omhoog=document.getElementById('scroll-omhoog');
  var omlaag=document.getElementById('scroll-omlaag');
  function update(){
    var y=window.scrollY;
    var onderaan=(window.innerHeight+y)>=document.body.scrollHeight-120;
    omhoog.style.display=y>400?'flex':'none';
    omlaag.style.display=onderaan?'none':'flex';
  }
  window.addEventListener('scroll',update,{passive:true});
  update();
})();

var revealEls = document.querySelectorAll('.reveal');
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.12});
revealEls.forEach(function(el){ io.observe(el); });

/* media logo slider - auto-scroll, drag, arrows */
var mediaLogos = [
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/09a6bbb061ab2e26.png", alt:"Het Financieele Dagblad", href:"https://fd.nl/opinie/1564682/leren-omgaan-met-ai-tools-kan-het-beste-in-de-bestuurskamer-beginnen"},
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/a3e3eeacccae79df.png", alt:"Leeuwarder Courant", href:"https://lc.nl/opinie/Een-gesprek-met-AI-voelt-écht-maar-wat-zegt-dat-over-ons-opinie-46090942.html"},
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/ba5a7d421652476a.png", alt:"Talkies Lifestyle Magazine", href:"https://www.talkiesmagazine.nl/"},
  {img:"https://app.stroomlijn.nu/objects/quick-uploads/82/de4df41a2f065f4e.png", alt:"Dagblad van het Noorden", href:"https://lc.nl/opinie/Een-gesprek-met-AI-voelt-écht-maar-wat-zegt-dat-over-ons-opinie-46090942.html"}
];
(function(){
  var track = document.getElementById('mediaTrack');
  if(!track) return;
  var copies = 4;
  var html = '';
  for(var c=0;c<copies;c++){
    mediaLogos.forEach(function(l){
      html += '<a class="media-logo-link" href="'+l.href+'" target="_blank" rel="noopener noreferrer"><img src="'+l.img+'" alt="'+l.alt+'" loading="lazy" draggable="false"></a>';
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
    track.scrollLeft += 0.5;
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

  document.getElementById('mediaPrev').addEventListener('click', function(){ track.scrollBy({left:-220, behavior:'smooth'}); setTimeout(wrapCheck, 400); });
  document.getElementById('mediaNext').addEventListener('click', function(){ track.scrollBy({left:220, behavior:'smooth'}); setTimeout(wrapCheck, 400); });
})();