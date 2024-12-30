'use strict';
$(function () {
  var i,
    t = $('.basic-ratings'),
    a = $('.custom-svg-ratings'),
    n = $('.multi-color-ratings'),
    r = $('.half-star-ratings'),
    s = $('.full-star-ratings'),
    e = $('.read-only-ratings'),
    l = $('.onset-event-ratings'),
    o = $('.onChange-event-ratings'),
    g = $('.methods-ratings'),
    c = $('.btn-initialize'),
    p = $('.btn-destroy'),
    h = $('.btn-get-rating'),
    f = $('.btn-set-rating');
  t && t.rateYo({ rating: 3.6, rtl: isRtl, spacing: '8px' }),
    a &&
      a.rateYo({
        rating: 3.2,
        starSvg:
          "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'-></path>",
        rtl: isRtl,
        spacing: '8px',
      }),
    n &&
      n.rateYo({
        rtl: isRtl,
        spacing: '8px',
        multiColor: { startColor: '#fffca0', endColor: '#ffd950' },
      }),
    r && r.rateYo({ rtl: isRtl, spacing: '8px', rating: 2 }),
    s && s.rateYo({ rtl: isRtl, spacing: '8px', rating: 2 }),
    e && e.rateYo({ rating: 2, rtl: isRtl, spacing: '8px' }),
    l &&
      l
        .rateYo({ rtl: isRtl, spacing: '8px' })
        .on('rateyo.set', function (t, i) {
          alert('The rating is set to ' + i.rating + '!');
        }),
    o &&
      o
        .rateYo({ rtl: isRtl, spacing: '8px' })
        .on('rateyo.change', function (t, i) {
          i = i.rating;
          $(this).parent().find('.counter').text(i);
        }),
    g &&
      ((i = g.rateYo({ rtl: isRtl, spacing: '8px' })),
      c &&
        c.on('click', function () {
          i.rateYo({ rtl: isRtl, spacing: '8px' });
        }),
      p &&
        p.on('click', function () {
          i.hasClass('jq-ry-container')
            ? i.rateYo('destroy')
            : window.alert('Please Initialize Ratings First');
        }),
      h &&
        h.on('click', function () {
          var t;
          i.hasClass('jq-ry-container')
            ? ((t = i.rateYo('rating')),
              window.alert('Current Ratings are ' + t))
            : window.alert('Please Initialize Ratings First');
        }),
      f) &&
      f.on('click', function () {
        i.hasClass('jq-ry-container')
          ? i.rateYo('rating', 1)
          : window.alert('Please Initialize Ratings First');
      });
});
