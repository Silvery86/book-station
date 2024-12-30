'use strict';
!(function () {
  var e = [].slice.call(document.querySelectorAll('.card-collapsible')),
    l = [].slice.call(document.querySelectorAll('.card-expand')),
    s = [].slice.call(document.querySelectorAll('.card-close')),
    a = document.getElementById('sortable-4');
  e &&
    e.map(function (l) {
      l.addEventListener('click', (e) => {
        e.preventDefault(),
          new bootstrap.Collapse(l.closest('.card').querySelector('.collapse')),
          l.closest('.card-header').classList.toggle('collapsed'),
          Helpers._toggleClass(
            l.firstElementChild,
            'ti-chevron-down',
            'ti-chevron-right'
          );
      });
    }),
    l &&
      l.map(function (l) {
        l.addEventListener('click', (e) => {
          e.preventDefault(),
            Helpers._toggleClass(
              l.firstElementChild,
              'ti-arrows-maximize',
              'ti-arrows-minimize'
            ),
            l.closest('.card').classList.toggle('card-fullscreen');
        });
      }),
    document.addEventListener('keyup', (e) => {
      e.preventDefault(),
        'Escape' === e.key &&
          (e = document.querySelector('.card-fullscreen')) &&
          (Helpers._toggleClass(
            e.querySelector('.card-expand').firstChild,
            'ti-arrows-maximize',
            'ti-arrows-minimize'
          ),
          e.classList.toggle('card-fullscreen'));
    }),
    s &&
      s.map(function (l) {
        l.addEventListener('click', (e) => {
          e.preventDefault(), l.closest('.card').classList.add('d-none');
        });
      }),
    null !== a && Sortable.create(a, { animation: 500, handle: '.card' });
})(),
  $(function () {
    var e = $('.card-reload');
    e.length &&
      e.on('click', function (e) {
        e.preventDefault();
        var l = $(this);
        l.closest('.card').block({
          message:
            '<div class="sk-fold sk-primary"><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div></div><h5>LOADING...</h5>',
          css: { backgroundColor: 'transparent', border: '0' },
          overlayCSS: {
            backgroundColor: $('html').hasClass('dark-style') ? '#000' : '#fff',
            opacity: 0.55,
          },
        }),
          setTimeout(function () {
            l.closest('.card').unblock(),
              l.closest('.card').find('.card-alert').length &&
                l
                  .closest('.card')
                  .find('.card-alert')
                  .html(
                    '<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><span class="fw-medium">Holy grail!</span> Your success/error message here.</div>'
                  );
          }, 2500);
      });
  });
