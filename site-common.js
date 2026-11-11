(()=>{
const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
const path=location.pathname;document.querySelectorAll('.navlinks a').forEach(a=>{if(a.getAttribute('href')===path)a.setAttribute('aria-current','page')});
document.querySelectorAll('.logo-section').forEach(section=>{
 const track=section.querySelector('.logo-track'),pause=section.querySelector('[data-pause]');let stopped=matchMedia('(prefers-reduced-motion: reduce)').matches,hover=false,focus=false,last=0,accum=0;
 function update(){pause.textContent=stopped?'Afspelen':'Pauzeren';pause.setAttribute('aria-pressed',String(stopped));}
 function move(dir){stopped=true;update();const step=track.querySelector('.logo-slide')?.getBoundingClientRect().width||180;track.scrollBy({left:dir*(step+25),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 pause.addEventListener('click',()=>{stopped=!stopped;update()});section.querySelector('[data-prev]').addEventListener('click',()=>move(-1));section.querySelector('[data-next]').addEventListener('click',()=>move(1));
 track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}});
 section.addEventListener('mouseenter',()=>hover=true);section.addEventListener('mouseleave',()=>hover=false);section.addEventListener('focusin',()=>focus=true);section.addEventListener('focusout',e=>{if(!section.contains(e.relatedTarget))focus=false});track.addEventListener('pointerdown',()=>{stopped=true;update()});
 function tick(now){const dt=Math.min(50,now-(last||now));last=now;if(!stopped&&!hover&&!focus&&!document.hidden){accum+=dt*.025;if(accum>=1){if(track.scrollLeft>=track.scrollWidth-track.clientWidth-1)track.scrollLeft=0;else track.scrollLeft+=Math.floor(accum);accum%=1;}}requestAnimationFrame(tick)}update();requestAnimationFrame(tick);
});
const jump=document.querySelector('.timeline-jump');if(jump)jump.addEventListener('change',()=>{const el=document.getElementById(jump.value);if(el)el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})});
})();

// Native browser animation: content stays available if motion is disabled.
(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(reduced.matches||!('IntersectionObserver' in window)||!Element.prototype.animate)return;
 const active=new Set();
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  observer.unobserve(entry.target);
  if(reduced.matches)return;
  const delay=Number(entry.target.dataset.motionDelay||0);
  const animation=entry.target.animate([{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
  active.add(animation);animation.finished.then(()=>active.delete(animation)).catch(()=>active.delete(animation));
 }),{threshold:.08});
 document.querySelectorAll('.practice-heading,.practice-feature,.practice-workshop,.practice-compact,.section-intro,.head-row,.content-cards article,.step,.route,.case,.about-img,.about-copy,.detail-split,.journey>div,.next-step>.wrap,.hero-copy,.hero-photo,.hero-visual').forEach(el=>{
  if(el.closest('.content-cards,.steps,.routes,.journey'))el.dataset.motionDelay=String(Math.min(Array.from(el.parentElement.children).indexOf(el)*75,225));
  observer.observe(el);
 });
 reduced.addEventListener('change',()=>{if(reduced.matches){observer.disconnect();active.forEach(a=>a.cancel());active.clear()}});
})();
