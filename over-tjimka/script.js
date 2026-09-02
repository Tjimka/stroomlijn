(function(){
  var nav=document.getElementById('siteNav'),links=document.getElementById('navLinks'),burger=document.getElementById('navBurger');
  if(!nav||!links||!burger)return;
  var open=false;
  function layout(){
    var mobile=window.matchMedia('(max-width:900px)').matches;
    var faq=document.getElementById('navFaqIcon'),cart=document.getElementById('navCartIcon'),cta=document.getElementById('navCtaBtn'),logo=document.getElementById('navLogoImg');
    if(mobile){
      burger.style.display='flex';
      if(faq)faq.style.display='none';
      if(cart)cart.style.display='none';
      if(logo)logo.style.height='30px';
      if(cta){cta.style.padding='8px 12px';cta.style.fontSize='13px';}
      if(open){
        links.style.display='flex';links.style.flexDirection='column';links.style.alignItems='stretch';links.style.position='absolute';links.style.top='72px';links.style.left='0';links.style.right='0';links.style.background='#FBFAF7';links.style.padding='12px 24px';links.style.borderBottom='1px solid rgba(26,46,74,.08)';links.style.gap='4px';links.style.zIndex='99';links.style.boxShadow='0 12px 24px rgba(26,46,74,.08)';links.querySelectorAll('.nav-link-extra').forEach(function(e){e.style.display='block';});
      }else{links.style.display='none';}
    }else{
      burger.style.display='none';open=false;
      if(faq)faq.style.display='inline-flex';
      if(cart)cart.style.display='inline-flex';
      if(logo)logo.style.height='42px';
      if(cta){cta.style.padding='9px 18px';cta.style.fontSize='14px';}
      links.style.display='flex';links.style.flexDirection='row';links.style.alignItems='center';links.style.position='static';links.style.background='transparent';links.style.padding='0';links.style.borderBottom='none';links.style.gap='6px';links.style.boxShadow='none';links.querySelectorAll('.nav-link-extra').forEach(function(e){e.style.display='none';});
    }
    burger.setAttribute('aria-expanded',open?'true':'false');
  }
  burger.addEventListener('click',function(){open=!open;layout();});
  links.addEventListener('click',function(){if(open){open=false;layout();}});
  window.addEventListener('resize',layout);
  layout();
})();

/* Mijn verhaal (GSAP ScrollTrigger) */
(function(){
  if(!window.gsap || !window.ScrollTrigger) return;
  var root=document.querySelector('.verhaal'); if(!root) return;
  var reduce=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.registerPlugin(ScrollTrigger);
  var lijn=root.querySelector('.verhaal-lijn-actief');
  var items=root.querySelectorAll('.verhaal-hoofdstuk');
  if(reduce){
    items.forEach(function(a){ var p=a.querySelector('.verhaal-punt'); ScrollTrigger.create({trigger:a,start:'top 60%',onEnter:function(){ p.style.background='#BD9766'; p.style.borderColor='#BD9766'; }}); });
    return;
  }
  gsap.set(lijn,{scaleY:0});
  gsap.to(lijn,{scaleY:1,ease:'none',scrollTrigger:{trigger:root,start:'top 55%',end:'bottom 55%',scrub:.6}});
  items.forEach(function(a,i){
    var tekst=a.querySelector('.verhaal-tekst'), foto=a.querySelector('.verhaal-foto'), jaar=a.querySelector('.verhaal-jaar'), punt=a.querySelector('.verhaal-punt');
    var flip=(i%2===1), rust=flip?2.2:-2.2;
    gsap.set(tekst,{opacity:0,y:28});
    gsap.set(foto,{opacity:0,y:40,rotate:rust*2.6,scale:.94});
    var tl=gsap.timeline({scrollTrigger:{trigger:a,start:'top 78%',once:true,
      onEnter:function(){ punt.style.background='#BD9766'; punt.style.borderColor='#BD9766'; }}});
    tl.to(foto,{opacity:1,y:0,rotate:rust,scale:1,duration:1.1,ease:'power3.out'},0)
      .to(tekst,{opacity:1,y:0,duration:.8,ease:'power2.out'},.15);
    gsap.fromTo(jaar,{yPercent:22},{yPercent:-22,ease:'none',scrollTrigger:{trigger:a,start:'top bottom',end:'bottom top',scrub:true}});
  });
  var naast=document.querySelectorAll('.verhaal-naast figure');
  if(naast.length){
    gsap.set(naast,{opacity:0,y:30});
    gsap.to(naast,{opacity:1,y:0,duration:.8,stagger:.12,ease:'power2.out',scrollTrigger:{trigger:'.verhaal-naast',start:'top 82%',once:true}});
  }
  window.addEventListener('load',function(){ ScrollTrigger.refresh(); });
})();