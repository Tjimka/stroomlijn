/* STROOMLIJN consent + Google Analytics (G-XBBF17W8RP), consent mode v2 */
(function(){
  var KEY='sl_consent';
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=window.gtag||gtag;

  gtag('consent','default',{
    'analytics_storage':'denied',
    'ad_storage':'denied',
    'ad_user_data':'denied',
    'ad_personalization':'denied',
    'wait_for_update':500
  });

  var s=document.createElement('script');
  s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id=G-XBBF17W8RP';
  document.head.appendChild(s);
  gtag('js',new Date());
  gtag('config','G-XBBF17W8RP',{'anonymize_ip':true});

  var keuze=null;
  try{keuze=localStorage.getItem(KEY);}catch(e){}

  function grant(){
    gtag('consent','update',{'analytics_storage':'granted'});
  }

  if(keuze==='all'){ grant(); return; }
  if(keuze==='necessary'){ return; }

  function toonBanner(){
    if(document.getElementById('slCookieBanner'))return;
    var b=document.createElement('div');
    b.id='slCookieBanner';
    b.setAttribute('role','dialog');
    b.setAttribute('aria-label','Cookie-instellingen');
    b.style.cssText='position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#1A2E4A;color:#fff;border-radius:14px;padding:22px 24px;box-shadow:0 16px 40px rgba(15,30,40,.35);font-family:Inter,-apple-system,sans-serif;font-size:14px;line-height:1.55';
    b.innerHTML='<p style="margin:0 0 6px;font-weight:600;font-size:15px">Cookies op stroomlijn.nu</p>'+
      '<p style="margin:0 0 16px;color:rgba(255,255,255,.82)">Deze site gebruikt cookies voor anonieme bezoekersstatistieken via Google Analytics. Je keuze is altijd aan te passen. Meer informatie staat in de <a href="/privacy-policy/" style="color:#BD9766;text-decoration:underline">privacyverklaring</a>.</p>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
      '<button id="slCookieAccept" style="background:#4899A7;color:#fff;border:none;border-radius:10px;padding:11px 20px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit">Accepteren</button>'+
      '<button id="slCookieDecline" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:10px;padding:11px 20px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit">Alleen noodzakelijk</button>'+
      '</div>';
    document.body.appendChild(b);
    document.getElementById('slCookieAccept').addEventListener('click',function(){
      try{localStorage.setItem(KEY,'all');}catch(e){}
      grant();
      b.remove();
    });
    document.getElementById('slCookieDecline').addEventListener('click',function(){
      try{localStorage.setItem(KEY,'necessary');}catch(e){}
      b.remove();
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',toonBanner);
  }else{
    toonBanner();
  }
})();