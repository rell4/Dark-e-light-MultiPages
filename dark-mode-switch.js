(function ($) {
  'use strict';

  var toggle = document.getElementById('toggle');
  var currentTheme = localStorage.getItem('theme');
  
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
      if (toggle) {
        toggle.checked = true;
      }
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark' );
    }
  }
  
  
  
  if (toggle) {
    toggle.addEventListener('change', switchTheme, false);
  }
})();







