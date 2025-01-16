'use strict';
!(function () {
  let o, i, n, e, t, l, r;
  e = isDarkStyle
    ? ((o = config.colors_dark.cardColor),
      (i = config.colors_dark.textMuted),
      (t = config.colors_dark.bodyColor),
      (l = config.colors_dark.borderColor),
      (n = config.colors_dark.headingColor),
      (r = '#3d4157'),
      'dark')
    : ((o = config.colors.cardColor),
      (i = config.colors.textMuted),
      (t = config.colors.bodyColor),
      (l = config.colors.borderColor),
      (n = config.colors.headingColor),
      (r = '#efeef0'),
      '');
  var a = document.querySelector('#ordersLastWeek'),
    s = {
      chart: {
        height: 75,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: { show: !1 },
      },
      tooltip: { enabled: !1 },
      plotOptions: {
        bar: {
          barHeight: '100%',
          columnWidth: '30px',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 4,
          colors: {
            backgroundBarColors: [r, r, r, r, r, r, r],
            backgroundBarRadius: 4,
          },
        },
      },
      colors: [config.colors.primary],
      grid: {
        show: !1,
        padding: { top: -30, left: -16, bottom: 0, right: -6 },
      },
      dataLabels: { enabled: !1 },
      series: [{ data: [60, 50, 20, 45, 50, 30, 70] }],
      legend: { show: !1 },
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { show: !1 },
      },
      yaxis: { labels: { show: !1 } },
      responsive: [
        {
          breakpoint: 1441,
          options: {
            plotOptions: { bar: { columnWidth: '40%', borderRadius: 4 } },
          },
        },
        {
          breakpoint: 1368,
          options: { plotOptions: { bar: { columnWidth: '48%' } } },
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 6,
                columnWidth: '30%',
                colors: { backgroundBarRadius: 6 },
              },
            },
          },
        },
        {
          breakpoint: 991,
          options: {
            plotOptions: { bar: { columnWidth: '35%', borderRadius: 6 } },
          },
        },
        {
          breakpoint: 883,
          options: { plotOptions: { bar: { columnWidth: '40%' } } },
        },
        {
          breakpoint: 768,
          options: { plotOptions: { bar: { columnWidth: '25%' } } },
        },
        {
          breakpoint: 576,
          options: {
            plotOptions: {
              bar: { borderRadius: 9 },
              colors: { backgroundBarRadius: 9 },
            },
          },
        },
        {
          breakpoint: 479,
          options: {
            plotOptions: {
              bar: { borderRadius: 4, columnWidth: '35%' },
              colors: { backgroundBarRadius: 4 },
            },
            grid: { padding: { right: -15, left: -15 } },
          },
        },
        {
          breakpoint: 376,
          options: { plotOptions: { bar: { borderRadius: 3 } } },
        },
      ],
    },
    a =
      (null !== a && new ApexCharts(a, s).render(),
      document.querySelector('#salesLastYear')),
    s = {
      chart: {
        height: 75,
        type: 'area',
        parentHeightOffset: 0,
        toolbar: { show: !1 },
        sparkline: { enabled: !0 },
      },
      markers: { colors: 'transparent', strokeColors: 'transparent' },
      grid: { show: !1 },
      colors: [config.colors.success],
      fill: {
        type: 'gradient',
        gradient: {
          shade: e,
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.25,
        },
      },
      dataLabels: { enabled: !1 },
      stroke: { width: 2, curve: 'smooth' },
      series: [{ data: [200, 55, 400, 250] }],
      xaxis: {
        show: !0,
        lines: { show: !1 },
        labels: { show: !1 },
        stroke: { width: 0 },
        axisBorder: { show: !1 },
      },
      yaxis: { stroke: { width: 0 }, show: !1 },
      tooltip: { enabled: !1 },
    },
    a =
      (null !== a && new ApexCharts(a, s).render(),
      document.querySelector('#revenueGrowth')),
    s = {
      chart: {
        height: 170,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: { show: !1 },
      },
      plotOptions: {
        bar: {
          barHeight: '80%',
          columnWidth: '30%',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 6,
          distributed: !0,
        },
      },
      tooltip: { enabled: !1 },
      grid: {
        show: !1,
        padding: { top: -20, bottom: -12, left: -10, right: 0 },
      },
      colors: [
        config.colors_label.success,
        config.colors_label.success,
        config.colors_label.success,
        config.colors_label.success,
        config.colors.success,
        config.colors_label.success,
        config.colors_label.success,
      ],
      dataLabels: { enabled: !1 },
      series: [{ data: [25, 40, 55, 70, 85, 70, 55] }],
      legend: { show: !1 },
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
          style: { colors: i, fontSize: '13px', fontFamily: 'Public Sans' },
        },
      },
      yaxis: { labels: { show: !1 } },
      states: { hover: { filter: { type: 'none' } } },
      responsive: [
        {
          breakpoint: 1471,
          options: { plotOptions: { bar: { columnWidth: '50%' } } },
        },
        {
          breakpoint: 1350,
          options: { plotOptions: { bar: { columnWidth: '57%' } } },
        },
        {
          breakpoint: 1032,
          options: { plotOptions: { bar: { columnWidth: '60%' } } },
        },
        {
          breakpoint: 992,
          options: {
            plotOptions: { bar: { columnWidth: '40%', borderRadius: 8 } },
          },
        },
        {
          breakpoint: 855,
          options: {
            plotOptions: { bar: { columnWidth: '50%', borderRadius: 6 } },
          },
        },
        {
          breakpoint: 440,
          options: { plotOptions: { bar: { columnWidth: '40%' } } },
        },
        {
          breakpoint: 381,
          options: { plotOptions: { bar: { columnWidth: '45%' } } },
        },
      ],
    };
  function d(e, t) {
    var r = config.colors_label.primary,
      a = config.colors.primary,
      s = [];
    for (let o = 0; o < e.length; o++) o === t ? s.push(a) : s.push(r);
    return {
      chart: {
        height: 231,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: { show: !1 },
      },
      plotOptions: {
        bar: {
          columnWidth: '32%',
          startingShape: 'rounded',
          borderRadius: 6,
          distributed: !0,
          dataLabels: { position: 'top' },
        },
      },
      grid: { show: !1, padding: { top: 0, bottom: 0, left: -10, right: -10 } },
      colors: s,
      dataLabels: {
        enabled: !0,
        formatter: function (o) {
          return o + 'k';
        },
        offsetY: -30,
        style: {
          fontSize: '15px',
          colors: [n],
          fontWeight: '500',
          fontFamily: 'Public Sans',
        },
      },
      series: [{ data: e }],
      legend: { show: !1 },
      tooltip: { enabled: !1 },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
        axisBorder: { show: !0, color: l },
        axisTicks: { show: !1 },
        labels: {
          style: { colors: i, fontSize: '13px', fontFamily: 'Public Sans' },
        },
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: function (o) {
            return parseInt(+o) + 'k';
          },
          style: { fontSize: '13px', colors: i, fontFamily: 'Public Sans' },
          min: 0,
          max: 6e4,
          tickAmount: 6,
        },
      },
      responsive: [
        {
          breakpoint: 1441,
          options: { plotOptions: { bar: { columnWidth: '41%' } } },
        },
        {
          breakpoint: 590,
          options: {
            plotOptions: { bar: { columnWidth: '61%', borderRadius: 5 } },
            yaxis: { labels: { show: !1 } },
            grid: { padding: { right: 0, left: -20 } },
            dataLabels: { style: { fontSize: '12px', fontWeight: '400' } },
          },
        },
      ],
    };
  }
  null !== a && new ApexCharts(a, s).render();
  var a = $.ajax({
      url: assetsPath + 'json/earning-reports-charts.json',
      dataType: 'json',
      async: !1,
    }).responseJSON,
    s = document.querySelector('#earningReportsTabsOrders'),
    c = d(a.data[0].chart_data, a.data[0].active_option),
    s =
      (null !== s && new ApexCharts(s, c).render(),
      document.querySelector('#earningReportsTabsSales')),
    c = d(a.data[1].chart_data, a.data[1].active_option),
    s =
      (null !== s && new ApexCharts(s, c).render(),
      document.querySelector('#earningReportsTabsProfit')),
    c = d(a.data[2].chart_data, a.data[2].active_option),
    s =
      (null !== s && new ApexCharts(s, c).render(),
      document.querySelector('#earningReportsTabsIncome')),
    c = d(a.data[3].chart_data, a.data[3].active_option),
    a =
      (null !== s && new ApexCharts(s, c).render(),
      document.querySelector('#salesLastMonth')),
    s = {
      series: [
        { name: 'Sales', data: [32, 27, 27, 30, 25, 25] },
        { name: 'Visits', data: [25, 35, 20, 20, 20, 20] },
      ],
      chart: { height: 340, type: 'radar', toolbar: { show: !1 } },
      plotOptions: {
        radar: { polygons: { strokeColors: l, connectorColors: l } },
      },
      stroke: { show: !1, width: 0 },
      legend: {
        show: !0,
        fontSize: '13px',
        position: 'bottom',
        labels: { colors: t, useSeriesColors: !1 },
        markers: { height: 12, width: 12, offsetX: -5 },
        itemMargin: { horizontal: 10 },
        onItemHover: { highlightDataSeries: !1 },
      },
      colors: [config.colors.primary, config.colors.info],
      fill: { opacity: [1, 0.85] },
      markers: { size: 0 },
      grid: { show: !1, padding: { top: 0, bottom: -5 } },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          show: !0,
          style: {
            colors: [i, i, i, i, i, i],
            fontSize: '13px',
            fontFamily: 'Public Sans',
          },
        },
      },
      yaxis: { show: !1, min: 0, max: 40, tickAmount: 4 },
      responsive: [{ breakpoint: 769, options: { chart: { height: 400 } } }],
    };
  null !== a && new ApexCharts(a, s).render();
  (c = document.querySelectorAll('.chart-progress')),
    c &&
      c.forEach(function (o) {
        var e = config.colors[o.dataset.color],
          t = o.dataset.series,
          e = {
            chart: { height: 48, width: 38, type: 'radialBar' },
            plotOptions: {
              radialBar: {
                hollow: { size: '25%' },
                dataLabels: { show: !1 },
                track: { background: config.colors_label.secondary },
              },
            },
            stroke: { lineCap: 'round' },
            colors: [e],
            grid: { padding: { top: -15, bottom: -15, left: -5, right: -15 } },
            series: [t],
            labels: ['Progress'],
          };
        new ApexCharts(o, e).render();
      }),
    (a = document.querySelector('#projectStatusChart')),
    (s = {
      chart: { height: 230, type: 'area', toolbar: !1 },
      markers: { strokeColor: 'transparent' },
      series: [
        {
          data: [
            2e3, 2e3, 4e3, 4e3, 3050, 3050, 2e3, 2e3, 3050, 3050, 4700, 4700,
            2750, 2750, 5700, 5700,
          ],
        },
      ],
      dataLabels: { enabled: !1 },
      grid: { show: !1, padding: { left: -10, right: -5 } },
      stroke: { width: 3, curve: 'straight' },
      colors: [config.colors.warning],
      fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.6, opacityTo: 0.15, stops: [0, 95, 100] },
      },
      xaxis: {
        labels: { show: !1 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        lines: { show: !1 },
      },
      yaxis: { labels: { show: !1 }, min: 1e3, max: 6e3, tickAmount: 5 },
      tooltip: { enabled: !1 },
    });
  null !== a && new ApexCharts(a, s).render();
})();