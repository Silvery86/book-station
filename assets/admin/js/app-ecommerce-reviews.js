'use strict';
!(function () {
  let t, e, a, s;
  e = isDarkStyle
    ? ((t = config.colors_dark.cardColor),
      (a = config.colors_dark.textMuted),
      (s = config.colors_dark.headingColor),
      'dark')
    : ((t = config.colors.cardColor),
      (a = config.colors.textMuted),
      (s = config.colors.headingColor),
      '');
  var o = document.querySelector('#reviewsChart'),
    r = {
      chart: { height: 160, width: 190, type: 'bar', toolbar: { show: !1 } },
      plotOptions: {
        bar: {
          barHeight: '75%',
          columnWidth: '40%',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 5,
          distributed: !0,
        },
      },
      grid: { show: !1, padding: { top: -25, bottom: -12 } },
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
      series: [{ data: [20, 40, 60, 80, 100, 80, 60] }],
      legend: { show: !1 },
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: a, fontSize: '13px' } },
      },
      yaxis: { labels: { show: !1 } },
      responsive: [
        {
          breakpoint: 0,
          options: {
            chart: { width: '100%' },
            plotOptions: { bar: { columnWidth: '40%' } },
          },
        },
        {
          breakpoint: 1440,
          options: {
            chart: { height: 150, width: 190, toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } },
          },
        },
        {
          breakpoint: 1400,
          options: {
            plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } },
          },
        },
        {
          breakpoint: 1200,
          options: {
            chart: { height: 130, width: 190, toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } },
          },
        },
        {
          breakpoint: 992,
          chart: { height: 150, width: 190, toolbar: { show: !1 } },
          options: {
            plotOptions: { bar: { borderRadius: 5, columnWidth: '40%' } },
          },
        },
        {
          breakpoint: 883,
          options: {
            plotOptions: { bar: { borderRadius: 5, columnWidth: '40%' } },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: { height: 150, width: 190, toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 4, columnWidth: '40%' } },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: { width: '100%', height: '200', type: 'bar' },
            plotOptions: { bar: { borderRadius: 6, columnWidth: '30% ' } },
          },
        },
        {
          breakpoint: 420,
          options: {
            plotOptions: {
              chart: { width: '100%', height: '200', type: 'bar' },
              bar: { borderRadius: 3, columnWidth: '30%' },
            },
          },
        },
      ],
    };
  null !== o && new ApexCharts(o, r).render();
})(),
  $(function () {
    let e, a, s;
    s = (
      isDarkStyle
        ? ((e = config.colors_dark.borderColor),
          (a = config.colors_dark.bodyBg),
          config.colors_dark)
        : ((e = config.colors.borderColor),
          (a = config.colors.bodyBg),
          config.colors)
    ).headingColor;
    var t,
      o = $('.datatables-review'),
      r = {
        Pending: { title: 'Pending', class: 'bg-label-warning' },
        Published: { title: 'Published', class: 'bg-label-success' },
      };
    o.length &&
      (t = o.DataTable({
        ajax: assetsPath + 'json/app-ecommerce-reviews.json',
        columns: [
          { data: '' },
          { data: 'id' },
          { data: 'product' },
          { data: 'reviewer' },
          { data: 'review' },
          { data: 'date' },
          { data: 'status' },
          { data: ' ' },
        ],
        columnDefs: [
          {
            className: 'control',
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function (t, e, a, s) {
              return '';
            },
          },
          {
            targets: 1,
            orderable: !1,
            searchable: !1,
            responsivePriority: 3,
            checkboxes: !0,
            checkboxes: {
              selectAllRender:
                '<input type="checkbox" class="form-check-input">',
            },
            render: function () {
              return '<input type="checkbox" class="dt-checkboxes form-check-input">';
            },
          },
          {
            targets: 2,
            render: function (t, e, a, s) {
              var o = a.product,
                r = a.company_name,
                i = a.id,
                n = a.product_image;
              return (
                '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-4 rounded-2 bg-label-secondary">' +
                (n
                  ? '<img src="' +
                    assetsPath +
                    'img/ecommerce-images/' +
                    n +
                    '" alt="Product-' +
                    i +
                    '" class="rounded-2">'
                  : '<span class="avatar-initial rounded bg-label-' +
                    [
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'dark',
                      'primary',
                      'secondary',
                    ][Math.floor(6 * Math.random())] +
                    '">' +
                    (n = (
                      ((n = (o = a.product).match(/\b\w/g) || []).shift() ||
                        '') + (n.pop() || '')
                    ).toUpperCase()) +
                    '</span>') +
                '</div></div><div class="d-flex flex-column"><span class="fw-medium text-nowrap text-heading">' +
                o +
                '</span></a><small>' +
                r +
                '</small></div></div>'
              );
            },
          },
          {
            targets: 3,
            responsivePriority: 1,
            render: function (t, e, a, s) {
              var o = a.reviewer,
                r = a.email,
                i = a.avatar;
              return (
                '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-4">' +
                (i
                  ? '<img src="' +
                    assetsPath +
                    'img/avatars/' +
                    i +
                    '" alt="Avatar" class="rounded-circle">'
                  : '<span class="avatar-initial rounded-circle bg-label-' +
                    [
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'dark',
                      'primary',
                      'secondary',
                    ][Math.floor(6 * Math.random())] +
                    '">' +
                    (i = (
                      ((i = (o = a.reviewer).match(/\b\w/g) || []).shift() ||
                        '') + (i.pop() || '')
                    ).toUpperCase()) +
                    '</span>') +
                '</div></div><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html"><span class="fw-medium">' +
                o +
                '</span></a><small class="text-nowrap">' +
                r +
                '</small></div></div>'
              );
            },
          },
          {
            targets: 4,
            responsivePriority: 2,
            sortable: !1,
            render: function (t, e, a, s) {
              var o = a.review,
                r = a.head,
                a = a.para,
                i = $('<div class="read-only-ratings ps-0 mb-1"></div>');
              r =
                'string' != typeof (r = r) || 0 === r.length
                  ? r
                  : r.charAt(0).toUpperCase() + r.slice(1);
              return (
                i.rateYo({
                  rating: o,
                  rtl: isRtl,
                  readOnly: !0,
                  starWidth: '24px',
                  spacing: '3px',
                  starSvg:
                    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" /></svg>',
                }),
                '<div>' +
                  i.prop('outerHTML') +
                  '<p class="h6 mb-1 text-truncate">' +
                  r +
                  '</p><small class="text-break pe-3">' +
                  a +
                  '</small></div>'
              );
            },
          },
          {
            targets: 5,
            render: function (t, e, a, s) {
              return (
                '<span class="text-nowrap">' +
                new Date(a.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }) +
                '</span>'
              );
            },
          },
          {
            targets: 6,
            render: function (t, e, a, s) {
              a = a.status;
              return (
                '<span class="badge ' +
                r[a].class +
                '" text-capitalize>' +
                r[a].title +
                '</span>'
              );
            },
          },
          {
            targets: -1,
            title: 'Actions',
            searchable: !1,
            orderable: !1,
            render: function (t, e, a, s) {
              return '<div class="text-xxl-center"><div class="dropdown"><a href="javascript:;" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Download</a><a href="javascript:;" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Duplicate</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item delete-record text-danger">Delete</a></div></div></div>';
            },
          },
        ],
        order: [[2, 'asc']],
        dom: '<"card-header d-flex align-items-md-center align-items-start py-0 flex-wrap flex-md-row flex-column"<"me-5 ms-n4"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-start align-items-sm-center justify-content-md-end pt-0 gap-sm-2 gap-6 flex-wrap flex-sm-row flex-column mb-6 mb-sm-0"l<"review_filter"> <"mx-0 me-md-n3 mt-sm-0"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
          sLengthMenu: '_MENU_',
          search: '',
          searchPlaceholder: 'Search Review',
          paginate: {
            next: '<i class="ti ti-chevron-right ti-sm"></i>',
            previous: '<i class="ti ti-chevron-left ti-sm"></i>',
          },
        },
        buttons: [
          {
            extend: 'collection',
            className:
              'btn btn-label-secondary dropdown-toggle ms-sm-2 me-3 waves-effect waves-light',
            text: '<i class="ti ti-upload ti-xs me-2"></i>Export',
            buttons: [
              {
                extend: 'print',
                text: '<i class="ti ti-printer me-2" ></i>Print',
                className: 'dropdown-item',
                exportOptions: {
                  columns: [1, 2, 3, 4, 5, 6],
                  format: {
                    body: function (t, e, a) {
                      var s;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (s = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (s += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (s += e.textContent)
                                : (s += e.innerText);
                          }),
                          s);
                    },
                  },
                },
                customize: function (t) {
                  $(t.document.body)
                    .css('color', s)
                    .css('border-color', e)
                    .css('background-color', a),
                    $(t.document.body)
                      .find('table')
                      .addClass('compact')
                      .css('color', 'inherit')
                      .css('border-color', 'inherit')
                      .css('background-color', 'inherit');
                },
              },
              {
                extend: 'csv',
                text: '<i class="ti ti-file me-2" ></i>Csv',
                className: 'dropdown-item',
                exportOptions: {
                  columns: [1, 2, 3, 4, 5, 6],
                  format: {
                    body: function (t, e, a) {
                      var s;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (s = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (s += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (s += e.textContent)
                                : (s += e.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
              {
                extend: 'excel',
                text: '<i class="ti ti-file-export me-2"></i>Excel',
                className: 'dropdown-item',
                exportOptions: {
                  columns: [1, 2, 3, 4, 5, 6],
                  format: {
                    body: function (t, e, a) {
                      var s;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (s = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (s += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (s += e.textContent)
                                : (s += e.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
              {
                extend: 'pdf',
                text: '<i class="ti ti-file-text me-2"></i>Pdf',
                className: 'dropdown-item',
                exportOptions: {
                  columns: [1, 2, 3, 4, 5, 6],
                  format: {
                    body: function (t, e, a) {
                      var s;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (s = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (s += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (s += e.textContent)
                                : (s += e.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
              {
                extend: 'copy',
                text: '<i class="ti ti-copy me-2"></i>Copy',
                className: 'dropdown-item',
                exportOptions: {
                  columns: [1, 2, 3, 4, 5, 6],
                  format: {
                    body: function (t, e, a) {
                      var s;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (s = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (s += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (s += e.textContent)
                                : (s += e.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
            ],
          },
        ],
        responsive: {
          details: {
            display: $.fn.dataTable.Responsive.display.modal({
              header: function (t) {
                return 'Details of ' + t.data().customer;
              },
            }),
            type: 'column',
            renderer: function (t, e, a) {
              a = $.map(a, function (t, e) {
                return '' !== t.title
                  ? '<tr data-dt-row="' +
                      t.rowIndex +
                      '" data-dt-column="' +
                      t.columnIndex +
                      '"><td>' +
                      t.title +
                      ':</td> <td>' +
                      t.data +
                      '</td></tr>'
                  : '';
              }).join('');
              return !!a && $('<table class="table"/><tbody />').append(a);
            },
          },
        },
        initComplete: function () {
          this.api()
            .columns(6)
            .every(function () {
              var e = this,
                a = $(
                  '<select id="Review" class="form-select"><option value=""> All </option></select>'
                )
                  .appendTo('.review_filter')
                  .on('change', function () {
                    var t = $.fn.dataTable.util.escapeRegex($(this).val());
                    e.search(t ? '^' + t + '$' : '', !0, !1).draw();
                  });
              e.data()
                .unique()
                .sort()
                .each(function (t, e) {
                  a.append(
                    '<option value="' +
                      t +
                      '" class="text-capitalize">' +
                      t +
                      '</option>'
                  );
                });
            });
        },
      })),
      $('.datatables-review tbody').on('click', '.delete-record', function () {
        t.row($(this).parents('tr')).remove().draw();
      }),
      setTimeout(() => {
        $('.dataTables_filter .form-control').removeClass('form-control-sm'),
          $('.dataTables_filter').addClass('mb-0 mb-md-6'),
          $('.dataTables_length .form-select').removeClass('form-select-sm'),
          $('.dataTables_length').addClass('ms-n2 me-2 me-sm-0 mb-0 mb-sm-6');
      }, 300);
  });
