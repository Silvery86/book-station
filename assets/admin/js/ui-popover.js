'use strict';
[].slice
  .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  .map(function (e) {
    return new bootstrap.Popover(e);
  });
