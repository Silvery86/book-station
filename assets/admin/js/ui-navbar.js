'use strict';
!(function () {
  isRtl &&
    Helpers._addClass(
      'dropdown-menu-end',
      document.querySelectorAll('.dropdown-menu')
    );
  var e = document.querySelectorAll('.nav-link.mega-dropdown');
  e &&
    e.forEach((e) => {
      new MegaDropdown(e);
    });
})();
