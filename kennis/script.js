document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('a[href]').forEach(a=>{
        let href=a.getAttribute('href');
        if (href==='https://app.stroomlijn.nu/p/jQZ6sPrYC') a.setAttribute('href','/');
        else if (href==='https://app.stroomlijn.nu/p/tXiLaJkM') a.setAttribute('href','/aanbod/');
        else if (href==='https://app.stroomlijn.nu/p/ADwFWV8Y') a.setAttribute('href','/cases/');
        else if (href==='https://app.stroomlijn.nu/p/PfPJGAeyQ') a.setAttribute('href','/tools/');
        else if (href==='https://app.stroomlijn.nu/p/cZy4jaJL') a.setAttribute('href','/kennis/');
        else if (href==='https://app.stroomlijn.nu/p/7nbhUAW') a.setAttribute('href','/training/');
        else if (href==='https://app.stroomlijn.nu/p/igY7kPwtu8') a.setAttribute('href','/implementatie/');
        else if (href==='https://app.stroomlijn.nu/p/w22KgrCy6/ai-wise-start') a.setAttribute('href','/ai-wise-start/');
        else if (href.includes('calendly.com')) a.setAttribute('href','https://app.stroomlijn.nu/book/stroomlijnsessie');
      });
    });