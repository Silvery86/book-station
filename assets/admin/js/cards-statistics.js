'use strict';
!(function () {
  let o, e, t, r, s, a;
  a = (
    isDarkStyle
      ? ((o = config.colors_dark.cardColor),
        (t = config.colors_dark.textMuted),
        (r = config.colors_dark.headingColor),
        (e = 'dark'),
        (s = '#3d4157'),
        config.colors_dark)
      : ((o = config.colors.cardColor),
        (t = config.colors.textMuted),
        (r = config.colors.headingColor),
        (e = ''),
        (s = '#efeef0'),
        config.colors)
  ).borderColor;
  const i = {
    series1: '#24B364',
    series2: '#53D28C',
    series3: '#7EDDA9',
    series4: '#A9E9C5',
  };
  var n = document.querySelector('#ordersLastWeek'),
    l = {
      chart: {
        height: 90,
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
            backgroundBarColors: [s, s, s, s, s, s, s],
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
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#salesLastYear')),
    l = {
      chart: {
        height: 90,
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
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#profitLastMonth')),
    l = {
      chart: {
        height: 90,
        type: 'line',
        parentHeightOffset: 0,
        toolbar: { show: !1 },
      },
      grid: {
        borderColor: a,
        strokeDashArray: 6,
        xaxis: { lines: { show: !0, colors: '#000' } },
        yaxis: { lines: { show: !1 } },
        padding: { top: -18, left: -4, right: 7, bottom: -10 },
      },
      colors: [config.colors.info],
      stroke: { width: 2 },
      series: [{ data: [0, 25, 10, 40, 25, 55] }],
      tooltip: { shared: !1, intersect: !0, x: { show: !1 } },
      tooltip: { enabled: !1 },
      xaxis: {
        labels: { show: !1 },
        axisTicks: { show: !1 },
        axisBorder: { show: !1 },
      },
      yaxis: { labels: { show: !1 } },
      markers: {
        size: 3.5,
        fillColor: config.colors.info,
        strokeColors: 'transparent',
        strokeWidth: 3.2,
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: o,
            strokeColor: config.colors.info,
            size: 5,
            shape: 'circle',
          },
        ],
        hover: { size: 5.5 },
      },
      responsive: [{ breakpoint: 768, options: { chart: { height: 110 } } }],
    },
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#sessionsLastMonth')),
    l = {
      chart: {
        type: 'bar',
        height: 90,
        parentHeightOffset: 0,
        stacked: !0,
        toolbar: { show: !1 },
      },
      series: [
        { name: 'PRODUCT A', data: [4, 3, 6, 4, 3] },
        { name: 'PRODUCT B', data: [-3, -4, -3, -2, -3] },
      ],
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: '30%',
          barHeight: '100%',
          borderRadius: 5,
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      dataLabels: { enabled: !1 },
      tooltip: { enabled: !1 },
      stroke: { curve: 'smooth', width: 1, lineCap: 'round', colors: [o] },
      legend: { show: !1 },
      colors: [config.colors.primary, config.colors.success],
      grid: {
        show: !1,
        padding: { top: -41, right: -10, left: -8, bottom: -26 },
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: { show: !1 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
      },
      yaxis: { show: !1 },
      responsive: [
        {
          breakpoint: 1441,
          options: { plotOptions: { bar: { columnWidth: '40%' } } },
        },
        {
          breakpoint: 1300,
          options: { plotOptions: { bar: { columnWidth: '50%' } } },
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: { bar: { borderRadius: 6, columnWidth: '20%' } },
          },
        },
        {
          breakpoint: 1025,
          options: {
            plotOptions: { bar: { borderRadius: 7, columnWidth: '25%' } },
            chart: { height: 110 },
          },
        },
        {
          breakpoint: 900,
          options: { plotOptions: { bar: { borderRadius: 6 } } },
        },
        {
          breakpoint: 782,
          options: { plotOptions: { bar: { columnWidth: '30%' } } },
        },
        {
          breakpoint: 426,
          options: { plotOptions: { bar: { borderRadius: 5 } } },
        },
        {
          breakpoint: 376,
          options: { plotOptions: { bar: { columnWidth: '35%' } } },
        },
      ],
      states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } },
      },
    },
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#expensesChart')),
    l = {
      chart: {
        height: 145,
        sparkline: { enabled: !0 },
        parentHeightOffset: 0,
        type: 'radialBar',
      },
      colors: [config.colors.warning],
      series: [78],
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: -90,
          endAngle: 90,
          hollow: { size: '65%' },
          track: { strokeWidth: '45%', background: a },
          dataLabels: {
            name: { show: !1 },
            value: { fontSize: '24px', color: r, fontWeight: 500, offsetY: -5 },
          },
        },
      },
      grid: { show: !1, padding: { bottom: 5 } },
      stroke: { lineCap: 'round' },
      labels: ['Progress'],
      responsive: [
        {
          breakpoint: 1442,
          options: {
            chart: { height: 100 },
            plotOptions: {
              radialBar: {
                hollow: { size: '55%' },
                dataLabels: { value: { fontSize: '16px', offsetY: -1 } },
              },
            },
          },
        },
        {
          breakpoint: 1200,
          options: {
            chart: { height: 228 },
            plotOptions: {
              radialBar: {
                hollow: { size: '75%' },
                track: { strokeWidth: '50%' },
                dataLabels: { value: { fontSize: '26px' } },
              },
            },
          },
        },
        {
          breakpoint: 890,
          options: {
            chart: { height: 180 },
            plotOptions: { radialBar: { hollow: { size: '70%' } } },
          },
        },
        {
          breakpoint: 426,
          options: {
            chart: { height: 142 },
            plotOptions: {
              radialBar: {
                hollow: { size: '70%' },
                dataLabels: { value: { fontSize: '22px' } },
              },
            },
          },
        },
        {
          breakpoint: 376,
          options: {
            chart: { height: 105 },
            plotOptions: {
              radialBar: {
                hollow: { size: '60%' },
                dataLabels: { value: { fontSize: '18px' } },
              },
            },
          },
        },
      ],
    },
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#impressionThisWeek')),
    l = {
      chart: {
        height: 90,
        parentHeightOffset: 0,
        toolbar: { show: !1 },
        sparkline: { enabled: !0 },
      },
      colors: [config.colors.danger],
      stroke: { width: 3 },
      grid: { padding: { bottom: -10 } },
      tooltip: { enabled: !1 },
      series: [
        { data: [200, 200, 500, 500, 300, 300, 100, 100, 450, 450, 650, 650] },
      ],
      responsive: [
        { breakpoint: 1200, options: { chart: { height: 110 } } },
        { breakpoint: 768, options: { chart: { height: 90 } } },
        { breakpoint: 376, options: { chart: { height: 93 } } },
      ],
    },
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#subscriberGained')),
    l = {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: !1 },
        sparkline: { enabled: !0 },
      },
      markers: { colors: 'transparent', strokeColors: 'transparent' },
      grid: { show: !1 },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: e,
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: !1 },
      stroke: { width: 2, curve: 'smooth' },
      series: [{ data: [200, 60, 300, 140, 230, 120, 400] }],
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
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#quarterlySales')),
    l = {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: !1 },
        sparkline: { enabled: !0 },
      },
      markers: { colors: 'transparent', strokeColors: 'transparent' },
      grid: { show: !1 },
      colors: [config.colors.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: e,
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: !1 },
      stroke: { width: 2, curve: 'smooth' },
      series: [{ data: [200, 300, 160, 250, 130, 400] }],
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
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#orderReceived')),
    l = {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: !1 },
        sparkline: { enabled: !0 },
      },
      markers: { colors: 'transparent', strokeColors: 'transparent' },
      grid: { show: !1 },
      colors: [config.colors.warning],
      fill: {
        type: 'gradient',
        gradient: {
          shade: e,
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: !1 },
      stroke: { width: 2, curve: 'smooth' },
      series: [{ data: [350, 500, 310, 460, 280, 400, 300] }],
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
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#revenueGenerated')),
    l = {
      chart: {
        height: 90,
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
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: !1 },
      stroke: { width: 2, curve: 'smooth' },
      series: [{ data: [300, 350, 330, 380, 340, 400, 380] }],
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
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#averageDailySales')),
    l = {
      chart: {
        height: 123,
        type: 'area',
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
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: !1 },
      stroke: { width: 2, curve: 'smooth' },
      series: [{ data: [400, 200, 650, 500] }],
      xaxis: {
        show: !0,
        lines: { show: !1 },
        labels: { show: !1 },
        stroke: { width: 0 },
        axisBorder: { show: !1 },
      },
      yaxis: { stroke: { width: 0 }, show: !1 },
      tooltip: { enabled: !1 },
      responsive: [
        { breakpoint: 1387, options: { chart: { height: 80 } } },
        { breakpoint: 1200, options: { chart: { height: 123 } } },
      ],
    },
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#averageDailyTraffic')),
    l = {
      chart: {
        height: 145,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: { show: !1 },
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          columnWidth: '25px',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 6,
        },
      },
      colors: [config.colors.warning],
      grid: {
        show: !1,
        padding: { top: -30, left: -18, bottom: -13, right: -10 },
      },
      dataLabels: { enabled: !1 },
      tooltip: { enabled: !1 },
      series: [{ data: [30, 40, 50, 60, 70, 80, 90] }],
      legend: { show: !1 },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07'],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
          style: { colors: t, fontSize: '13px', fontFamily: 'Public Sans' },
          show: !0,
        },
      },
      yaxis: { labels: { show: !1 } },
      responsive: [
        {
          breakpoint: 1441,
          options: { plotOptions: { bar: { borderRadius: 5 } } },
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: { bar: { columnWidth: '25%', borderRadius: 9 } },
          },
        },
        {
          breakpoint: 992,
          options: {
            plotOptions: { bar: { borderRadius: 8, columnWidth: '25%' } },
          },
        },
        {
          breakpoint: 836,
          options: { plotOptions: { bar: { columnWidth: '30%' } } },
        },
        {
          breakpoint: 738,
          options: {
            plotOptions: { bar: { columnWidth: '35%', borderRadius: 6 } },
          },
        },
        {
          breakpoint: 576,
          options: {
            plotOptions: { bar: { columnWidth: '25%', borderRadius: 10 } },
          },
        },
        {
          breakpoint: 500,
          options: {
            plotOptions: { bar: { columnWidth: '24%', borderRadius: 8 } },
          },
        },
        {
          breakpoint: 450,
          options: { plotOptions: { bar: { borderRadius: 6 } } },
        },
      ],
    },
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#revenueGrowth')),
    l = {
      chart: {
        height: 162,
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
          borderRadius: 7,
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
          style: { colors: t, fontSize: '13px', fontFamily: 'Public Sans' },
        },
      },
      yaxis: { labels: { show: !1 } },
      states: { hover: { filter: { type: 'none' } } },
      responsive: [
        {
          breakpoint: 1471,
          options: { plotOptions: { bar: { columnWidth: '45%' } } },
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
    },
    n =
      (null !== n && new ApexCharts(n, l).render(),
      document.querySelector('#generatedLeadsChart')),
    l = {
      chart: { height: 147, width: 130, parentHeightOffset: 0, type: 'donut' },
      labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
      series: [45, 58, 30, 50],
      colors: [i.series1, i.series2, i.series3, i.series4],
      stroke: { width: 0 },
      dataLabels: {
        enabled: !1,
        formatter: function (o, e) {
          return parseInt(o) + '%';
        },
      },
      legend: { show: !1 },
      tooltip: { theme: !1 },
      grid: { padding: { top: 15, right: -20, left: -20 } },
      states: { hover: { filter: { type: 'none' } } },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: !0,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: r,
                fontWeight: 500,
                offsetY: -15,
                formatter: function (o) {
                  return parseInt(o) + '%';
                },
              },
              name: { offsetY: 20, fontFamily: 'Public Sans' },
              total: {
                show: !0,
                showAlways: !0,
                color: config.colors.success,
                fontSize: '.8125rem',
                label: 'Total',
                fontFamily: 'Public Sans',
                formatter: function (o) {
                  return '184';
                },
              },
            },
          },
        },
      },
    };
  null !== n && new ApexCharts(n, l).render();
})();
