'use strict';
!(function () {
  let o, t, r, e;
  t = (
    isDarkStyle
      ? ((o = config.colors_dark.cardColor),
        (e = config.colors_dark.textMuted),
        (r = config.colors_dark.bodyColor),
        config.colors_dark)
      : ((o = config.colors.cardColor),
        (e = config.colors.textMuted),
        (r = config.colors.bodyColor),
        config.colors)
  ).headingColor;
  var a = document.querySelectorAll('.chart-progress'),
    a =
      (a &&
        a.forEach(function (o) {
          var r = config.colors[o.dataset.color],
            e = o.dataset.series,
            a = o.dataset.progress_variant || 'false',
            r =
              ((r = r),
              (e = e),
              {
                chart: {
                  height: 'true' == (a = a) ? 58 : 48,
                  width: 'true' == a ? 58 : 38,
                  type: 'radialBar',
                },
                plotOptions: {
                  radialBar: {
                    hollow: { size: 'true' == a ? '50%' : '25%' },
                    dataLabels: {
                      show: 'true' == a,
                      value: {
                        offsetY: -10,
                        fontSize: '15px',
                        fontWeight: 500,
                        fontFamily: 'Public Sans',
                        color: t,
                      },
                    },
                    track: { background: config.colors_label.secondary },
                  },
                },
                stroke: { lineCap: 'round' },
                colors: [r],
                grid: {
                  padding: {
                    top: 'true' == a ? -12 : -15,
                    bottom: 'true' == a ? -17 : -15,
                    left: 'true' == a ? -17 : -5,
                    right: -15,
                  },
                },
                series: [e],
                labels: 'true' == a ? [''] : ['Progress'],
              });
          new ApexCharts(o, r).render();
        }),
      document.querySelector('#reportBarChart')),
    l = {
      chart: { height: 200, type: 'bar', toolbar: { show: !1 } },
      plotOptions: {
        bar: {
          barHeight: '60%',
          columnWidth: '60%',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 4,
          distributed: !0,
        },
      },
      grid: {
        show: !1,
        padding: { top: -20, bottom: 0, left: -10, right: -10 },
      },
      colors: [
        config.colors_label.primary,
        config.colors_label.primary,
        config.colors_label.primary,
        config.colors_label.primary,
        config.colors.primary,
        config.colors_label.primary,
        config.colors_label.primary,
      ],
      dataLabels: { enabled: !1 },
      series: [{ data: [40, 95, 60, 45, 90, 50, 75] }],
      legend: { show: !1 },
      xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: e, fontSize: '13px' } },
      },
      yaxis: { labels: { show: !1 } },
    },
    a =
      (null !== a && new ApexCharts(a, l).render(),
      document.querySelector('#swiper-with-pagination-cards'));
  a &&
    new Swiper(a, {
      loop: !0,
      autoplay: { delay: 2500, disableOnInteraction: !1 },
      pagination: { clickable: !0, el: '.swiper-pagination' },
    });
})();
