'use strict';
!(function () {
  var t = [].slice.call(document.querySelectorAll('.clipboard-btn'));
  ClipboardJS
    ? t.map(function (t) {
        new ClipboardJS(t).on('success', function (t) {
          'copy' == t.action && toastr.success('', 'Copied to Clipboard!!');
        });
      })
    : t.map(function (t) {
        t.setAttribute('disabled', !0);
      });
})();
