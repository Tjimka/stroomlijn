const hamburger = document.querySelector('.sticky-nav__hamburger');
      const mobielMenu = document.getElementById('sticky-nav-mobiel');
      hamburger.addEventListener('click', () => {
        const open = mobielMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open);
      });

(function () {
      var hamburger = document.getElementById('nav-hamburger');
      var mobieleNav = document.getElementById('nav-mobiel');
      if (!hamburger || !mobieleNav) return;
      hamburger.addEventListener('click', function () {
        var isOpen = mobieleNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        hamburger.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
      });
      document.addEventListener('click', function (event) {
        var nav = document.getElementById('nav');
        if (nav && !nav.contains(event.target)) {
          mobieleNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.setAttribute('aria-label', 'Menu openen');
        }
      });
    }());