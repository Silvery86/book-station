'use strict';
!(function () {
  let e, t, o, s;
  s = (
    isDarkStyle
      ? ((e = config.colors_dark.borderColor),
        (t = config.colors_dark.textMuted),
        (o = config.colors_dark.headingColor),
        config.colors_dark)
      : ((e = config.colors.borderColor),
        (t = config.colors.textMuted),
        (o = config.colors.headingColor),
        config.colors)
  ).bodyColor;
  var i = {
      donut: {
        series1: config.colors.success,
        series2: '#53D28C',
        series3: '#7EDDA9',
        series4: '#A9E9C5',
      },
      line: {
        series1: config.colors.warning,
        series2: config.colors.primary,
        series3: '#7367f029',
      },
    },
    r = document.querySelector('#shipmentStatisticsChart'),
    a = {
      series: [
        {
          name: 'Shipment',
          type: 'column',
          data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37],
        },
        {
          name: 'Delivery',
          type: 'line',
          data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34],
        },
      ],
      chart: {
        height: 320,
        type: 'line',
        stacked: !1,
        parentHeightOffset: 0,
        toolbar: { show: !1 },
        zoom: { enabled: !1 },
      },
      markers: {
        size: 5,
        colors: [config.colors.white],
        strokeColors: i.line.series2,
        hover: { size: 6 },
        borderRadius: 4,
      },
      stroke: { curve: 'smooth', width: [0, 3], lineCap: 'round' },
      legend: {
        show: !0,
        position: 'bottom',
        markers: { width: 8, height: 8, offsetX: -3 },
        height: 40,
        itemMargin: { horizontal: 10, vertical: 0 },
        fontSize: '15px',
        fontFamily: 'Public Sans',
        fontWeight: 400,
        labels: { colors: o, useSeriesColors: !1 },
        offsetY: 10,
      },
      grid: { strokeDashArray: 8, borderColor: e },
      colors: [i.line.series1, i.line.series2],
      fill: { opacity: [1, 1] },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 4,
        },
      },
      dataLabels: { enabled: !1 },
      xaxis: {
        tickAmount: 10,
        categories: [
          '1 Jan',
          '2 Jan',
          '3 Jan',
          '4 Jan',
          '5 Jan',
          '6 Jan',
          '7 Jan',
          '8 Jan',
          '9 Jan',
          '10 Jan',
        ],
        labels: { style: { colors: t, fontSize: '13px', fontWeight: 400 } },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
      },
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 50,
        labels: {
          style: {
            colors: t,
            fontSize: '13px',
            fontFamily: 'Public Sans',
            fontWeight: 400,
          },
          formatter: function (e) {
            return e + '%';
          },
        },
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: { height: 320 },
            xaxis: { labels: { style: { fontSize: '10px' } } },
            legend: {
              itemMargin: { vertical: 0, horizontal: 10 },
              fontSize: '13px',
              offsetY: 12,
            },
          },
        },
        {
          breakpoint: 1025,
          options: {
            chart: { height: 415 },
            plotOptions: { bar: { columnWidth: '50%' } },
          },
        },
        {
          breakpoint: 982,
          options: { plotOptions: { bar: { columnWidth: '30%' } } },
        },
        {
          breakpoint: 480,
          options: { chart: { height: 250 }, legend: { offsetY: 7 } },
        },
      ],
    },
    r =
      (null !== r && new ApexCharts(r, a).render(),
      document.querySelector('#deliveryExceptionsChart')),
    a = {
      chart: { height: 420, parentHeightOffset: 0, type: 'donut' },
      labels: [
        'Incorrect address',
        'Weather conditions',
        'Federal Holidays',
        'Damage during transit',
      ],
      series: [13, 25, 22, 40],
      colors: [
        i.donut.series1,
        i.donut.series2,
        i.donut.series3,
        i.donut.series4,
      ],
      stroke: { width: 0 },
      dataLabels: {
        enabled: !1,
        formatter: function (e, t) {
          return parseInt(e) + '%';
        },
      },
      legend: {
        show: !0,
        position: 'bottom',
        offsetY: 10,
        markers: { width: 8, height: 8, offsetX: -3 },
        itemMargin: { horizontal: 15, vertical: 5 },
        fontSize: '13px',
        fontFamily: 'Public Sans',
        fontWeight: 400,
        labels: { colors: o, useSeriesColors: !1 },
      },
      tooltip: { theme: !1 },
      grid: { padding: { top: 15 } },
      plotOptions: {
        pie: {
          donut: {
            size: '77%',
            labels: {
              show: !0,
              value: {
                fontSize: '24px',
                fontFamily: 'Public Sans',
                color: o,
                fontWeight: 500,
                offsetY: -20,
                formatter: function (e) {
                  return parseInt(e) + '%';
                },
              },
              name: { offsetY: 30, fontFamily: 'Public Sans' },
              total: {
                show: !0,
                fontSize: '15px',
                fontFamily: 'Public Sans',
                color: s,
                label: 'AVG. Exceptions',
                formatter: function (e) {
                  return '30%';
                },
              },
            },
          },
        },
      },
      responsive: [{ breakpoint: 420, options: { chart: { height: 360 } } }],
    };
  null !== r && new ApexCharts(r, a).render();
})(),
  $(function () {
    var e = $('.dt-route-vehicles');
    e.length &&
      (e.DataTable({
        ajax: assetsPath + 'json/logistics-dashboard.json',
        columns: [
          { data: 'id' },
          { data: 'id' },
          { data: 'location' },
          { data: 'start_city' },
          { data: 'end_city' },
          { data: 'warnings' },
          { data: 'progress' },
        ],
        columnDefs: [
          {
            className: 'control',
            orderable: !1,
            searchable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function (e, t, o, s) {
              return '';
            },
          },
          {
            targets: 1,
            orderable: !1,
            searchable: !1,
            checkboxes: !0,
            checkboxes: {
              selectAllRender:
                '<input type="checkbox" class="form-check-input">',
            },
            responsivePriority: 3,
            render: function () {
              return '<input type="checkbox" class="dt-checkboxes form-check-input">';
            },
          },
          {
            targets: 2,
            responsivePriority: 1,
            render: function (e, t, o, s) {
              return (
                '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-4"><span class="avatar-initial rounded-circle bg-label-secondary"><i class="ti ti-car ti-28px"></i></span></div></div><div class="d-flex flex-column"><a class="text-heading fw-medium" href="app-logistics-fleet.html">VOL-' +
                o.location +
                '</a></div></div>'
              );
            },
          },
          {
            targets: 3,
            render: function (e, t, o, s) {
              return (
                '<div class="text-body">' +
                o.start_city +
                ', ' +
                o.start_country +
                '</div >'
              );
            },
          },
          {
            targets: 4,
            render: function (e, t, o, s) {
              return (
                '<div class="text-body">' +
                o.end_city +
                ', ' +
                o.end_country +
                '</div >'
              );
            },
          },
          {
            targets: -2,
            render: function (e, t, o, s) {
              var o = o.warnings,
                i = {
                  1: { title: 'No Warnings', class: 'bg-label-success' },
                  2: {
                    title: 'Temperature Not Optimal',
                    class: 'bg-label-warning',
                  },
                  3: { title: 'Ecu Not Responding', class: 'bg-label-danger' },
                  4: { title: 'Oil Leakage', class: 'bg-label-info' },
                  5: { title: 'fuel problems', class: 'bg-label-primary' },
                };
              return void 0 === i[o]
                ? e
                : '<span class="badge rounded ' +
                    i[o].class +
                    '">' +
                    i[o].title +
                    '</span>';
            },
          },
          {
            targets: -1,
            render: function (e, t, o, s) {
              o = o.progress;
              return (
                '<div class="d-flex align-items-center"><div div class="progress w-100" style="height: 8px;"><div class="progress-bar" role="progressbar" style="width:' +
                o +
                '%;" aria-valuenow="' +
                o +
                '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="text-body ms-3">' +
                o +
                '%</div></div>'
              );
            },
          },
        ],
        order: [2, 'asc'],
        dom: '<"table-responsive"t><"row d-flex align-items-center"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        displayLength: 5,
        language: {
          paginate: {
            next: '<i class="ti ti-chevron-right ti-sm"></i>',
            previous: '<i class="ti ti-chevron-left ti-sm"></i>',
          },
        },
        responsive: {
          details: {
            display: $.fn.dataTable.Responsive.display.modal({
              header: function (e) {
                return 'Details of ' + e.data().location;
              },
            }),
            type: 'column',
            renderer: function (e, t, o) {
              o = $.map(o, function (e, t) {
                return '' !== e.title
                  ? '<tr data-dt-row="' +
                      e.rowIndex +
                      '" data-dt-column="' +
                      e.columnIndex +
                      '"><td>' +
                      e.title +
                      ':</td> <td>' +
                      e.data +
                      '</td></tr>'
                  : '';
              }).join('');
              return !!o && $('<table class="table"/><tbody />').append(o);
            },
          },
        },
      }),
      $('.dataTables_info').addClass('pt-0'));
  });
