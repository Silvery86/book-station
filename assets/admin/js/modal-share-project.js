'use strict';
$(function () {
  const a = $('.share-project-select');
  var s = document.getElementById('shareProject');
  s.addEventListener('show.bs.modal', function (e) {
    function t(e) {
      return e.id
        ? '<div class="d-flex align-items-center"><div class="avatar avatar-xs me-2 d-flex"><img src="' +
            assetsPath +
            $(e.element).data('image') +
            '" class="rounded-circle"></div><div class="name">' +
            $(e.element).data('name') +
            '</div></div>'
        : e.text;
    }
    a.length &&
      a.wrap('<div class="position-relative"></div>').select2({
        dropdownParent: s,
        templateResult: t,
        templateSelection: t,
        placeholder: 'Add Project Members',
        escapeMarkup: function (e) {
          return e;
        },
      });
  });
});
