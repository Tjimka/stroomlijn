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