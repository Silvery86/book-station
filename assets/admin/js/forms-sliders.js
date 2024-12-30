'use strict';
!(function () {
  var e = document.getElementById('slider-basic'),
    t = document.getElementById('slider-handles'),
    i = document.getElementById('slider-steps'),
    n = document.getElementById('slider-tap'),
    r = document.getElementById('slider-drag'),
    d = document.getElementById('slider-fixed-drag'),
    l = document.getElementById('slider-combined-options'),
    a = document.getElementById('slider-hover'),
    o = document.getElementById('slider-pips'),
    e =
      (e &&
        noUiSlider.create(e, {
          start: [50],
          connect: [!0, !1],
          direction: isRtl ? 'rtl' : 'ltr',
          range: { min: 0, max: 100 },
        }),
      t &&
        noUiSlider.create(t, {
          start: [0, 50],
          direction: isRtl ? 'rtl' : 'ltr',
          step: 5,
          connect: !0,
          range: { min: 0, max: 100 },
          pips: { mode: 'range', density: 5, stepped: !0 },
        }),
      i &&
        noUiSlider.create(i, {
          start: [0, 30],
          snap: !0,
          connect: !0,
          direction: isRtl ? 'rtl' : 'ltr',
          range: {
            min: 0,
            '10%': 10,
            '20%': 20,
            '30%': 30,
            '40%': 40,
            '50%': 50,
            max: 100,
          },
        }),
      n &&
        noUiSlider.create(n, {
          start: [10, 30],
          behaviour: 'tap',
          direction: isRtl ? 'rtl' : 'ltr',
          connect: !0,
          range: { min: 10, max: 100 },
        }),
      r &&
        noUiSlider.create(r, {
          start: [40, 60],
          limit: 20,
          behaviour: 'drag',
          direction: isRtl ? 'rtl' : 'ltr',
          connect: !0,
          range: { min: 20, max: 80 },
        }),
      d &&
        noUiSlider.create(d, {
          start: [40, 60],
          behaviour: 'drag-fixed',
          direction: isRtl ? 'rtl' : 'ltr',
          connect: !0,
          range: { min: 20, max: 80 },
        }),
      l &&
        noUiSlider.create(l, {
          start: [40, 60],
          behaviour: 'drag-tap',
          direction: isRtl ? 'rtl' : 'ltr',
          connect: !0,
          range: { min: 20, max: 80 },
        }),
      a &&
        (noUiSlider.create(a, {
          start: 20,
          behaviour: 'hover-snap-tap',
          direction: isRtl ? 'rtl' : 'ltr',
          range: { min: 0, max: 100 },
        }),
        a.noUiSlider.on('hover', function (e) {
          document.getElementById('slider-val').innerHTML = e;
        })),
      o &&
        noUiSlider.create(o, {
          start: [10],
          behaviour: 'tap-drag',
          step: 10,
          tooltips: !0,
          range: { min: 0, max: 100 },
          pips: { mode: 'steps', stepped: !0, density: 5 },
          direction: isRtl ? 'rtl' : 'ltr',
        }),
      document.getElementById('slider-primary')),
    t = document.getElementById('slider-success'),
    i = document.getElementById('slider-danger'),
    n = document.getElementById('slider-info'),
    r = document.getElementById('slider-warning'),
    d = {
      start: [30, 50],
      connect: !0,
      behaviour: 'tap-drag',
      step: 10,
      tooltips: !0,
      range: { min: 0, max: 100 },
      pips: { mode: 'steps', stepped: !0, density: 5 },
      direction: isRtl ? 'rtl' : 'ltr',
    };
  e && noUiSlider.create(e, d),
    t && noUiSlider.create(t, d),
    i && noUiSlider.create(i, d),
    n && noUiSlider.create(n, d),
    r && noUiSlider.create(r, d);
  const c = document.getElementById('slider-dynamic'),
    s = document.getElementById('slider-select'),
    m = document.getElementById('slider-input');
  if (
    (c &&
      (noUiSlider.create(c, {
        start: [10, 30],
        connect: !0,
        direction: isRtl ? 'rtl' : 'ltr',
        range: { min: -20, max: 40 },
      }),
      c.noUiSlider.on('update', function (e, t) {
        e = e[t];
        t ? (m.value = e) : (s.value = Math.round(e));
      })),
    s)
  ) {
    for (let e = -20; e <= 40; e++) {
      var g = document.createElement('option');
      (g.text = e), (g.value = e), s.appendChild(g);
    }
    s.addEventListener('change', function () {
      c.noUiSlider.set([this.value, null]);
    });
  }
  m &&
    m.addEventListener('change', function () {
      c.noUiSlider.set([null, this.value]);
    });
  (l = document.getElementById('slider-vertical')),
    (a = document.getElementById('slider-connect-upper')),
    (o = document.getElementById('slider-vertical-tooltip')),
    (e = document.getElementById('slider-vertical-limit'));
  l &&
    ((l.style.height = '200px'),
    noUiSlider.create(l, {
      start: [40, 60],
      orientation: 'vertical',
      behaviour: 'drag',
      connect: !0,
      range: { min: 0, max: 100 },
    })),
    a &&
      ((a.style.height = '200px'),
      noUiSlider.create(a, {
        start: 40,
        orientation: 'vertical',
        behaviour: 'drag',
        connect: 'upper',
        range: { min: 0, max: 100 },
      })),
    o &&
      ((o.style.height = '200px'),
      noUiSlider.create(o, {
        start: 10,
        orientation: 'vertical',
        behaviour: 'drag',
        tooltips: !0,
        range: { min: 0, max: 100 },
      })),
    e &&
      ((e.style.height = '200px'),
      noUiSlider.create(e, {
        start: [0, 40],
        orientation: 'vertical',
        behaviour: 'drag',
        limit: 60,
        tooltips: !0,
        connect: !0,
        range: { min: 0, max: 100 },
      }));
})();
