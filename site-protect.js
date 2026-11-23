(function () {
  // 1. Rechtsklikmenu uitschakelen
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // 2. Tekstselectie blokkeren, met uitzondering van invoervelden.
  // Bewust via JavaScript en niet via een <style>-blok in de pagina,
  // omdat de sync de gedeelde styles.css anders overschrijft.
  var css = document.createElement('style');
  css.textContent =
    'body{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}' +
    'input,textarea{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}';
  document.head.appendChild(css);

  // 3. Belangrijkste devtools-sneltoetsen afvangen
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
    }
  });
})();
