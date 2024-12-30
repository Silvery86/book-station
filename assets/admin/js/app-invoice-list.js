'use strict';
$(function () {
  var e,
    t = $('.invoice-list-table');
  t.length &&
    (e = t.DataTable({
      ajax: assetsPath + 'json/invoice-list.json',
      columns: [
        { data: 'invoice_id' },
        { data: 'invoice_id' },
        { data: 'invoice_id' },
        { data: 'invoice_status' },
        { data: 'issued_date' },
        { data: 'client_name' },
        { data: 'total' },
        { data: 'balance' },
        { data: 'invoice_status' },
        { data: 'action' },
      ],
      columnDefs: [
        {
          className: 'control',
          responsivePriority: 2,
          searchable: !1,
          targets: 0,
          render: function (e, t, a, n) {
            return '';
          },
        },
        {
          targets: 1,
          orderable: !1,
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">',
          },
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input" >';
          },
          searchable: !1,
        },
        {
          targets: 2,
          render: function (e, t, a, n) {
            return (
              '<a href="app-invoice-preview.html">#' + a.invoice_id + '</a>'
            );
          },
        },
        {
          targets: 3,
          render: function (e, t, a, n) {
            var s = a.invoice_status,
              i = a.due_date;
            return (
              "<span class='d-inline-block' data-bs-toggle='tooltip' data-bs-html='true' title='<span>" +
              s +
              '<br> <span class="fw-medium">Balance:</span> ' +
              a.balance +
              '<br> <span class="fw-medium">Due Date:</span> ' +
              i +
              "</span>'>" +
              {
                Sent: '<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 d-flex align-items-center justify-content-center"><i class="ti ti-circle-check ti-xs"></i></span>',
                Draft:
                  '<span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 d-flex align-items-center justify-content-center"><i class="ti ti-device-floppy ti-xs"></i></span>',
                'Past Due':
                  '<span class="badge badge-center rounded-pill bg-label-danger w-px-30 h-px-30 d-flex align-items-center justify-content-center"><i class="ti ti-info-circle ti-xs"></i></span>',
                'Partial Payment':
                  '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 d-flex align-items-center justify-content-center"><i class="ti ti-circle-half-2 ti-xs"></i></span>',
                Paid: '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 d-flex align-items-center justify-content-center"><i class="ti ti-chart-pie ti-xs"></i></span>',
                Downloaded:
                  '<span class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30 d-flex align-items-center justify-content-center"><i class="ti ti-arrow-down-circle ti-xs"></i></span>',
              }[s] +
              '</span>'
            );
          },
        },
        {
          targets: 4,
          responsivePriority: 4,
          render: function (e, t, a, n) {
            var s = a.client_name,
              i = a.service,
              l = a.avatar_image,
              c = Math.floor(11 * Math.random()) + 1;
            return (
              '<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
              (!0 === l
                ? '<img src="' +
                  assetsPath +
                  'img/avatars/' +
                  (c + '.png') +
                  '" alt="Avatar" class="rounded-circle">'
                : '<span class="avatar-initial rounded-circle bg-label-' +
                  [
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'primary',
                    'secondary',
                  ][Math.floor(6 * Math.random())] +
                  '">' +
                  (l = (
                    ((l = (s = a.client_name).match(/\b\w/g) || []).shift() ||
                      '') + (l.pop() || '')
                  ).toUpperCase()) +
                  '</span>') +
              '</div></div><div class="d-flex flex-column"><a href="pages-profile-user.html" class="text-heading text-truncate"><span class="fw-medium">' +
              s +
              '</span></a><small class="text-truncate">' +
              i +
              '</small></div></div>'
            );
          },
        },
        {
          targets: 5,
          render: function (e, t, a, n) {
            a = a.total;
            return '<span class="d-none">' + a + '</span>$' + a;
          },
        },
        {
          targets: 6,
          render: function (e, t, a, n) {
            a = new Date(a.due_date);
            return (
              '<span class="d-none">' +
              moment(a).format('YYYYMMDD') +
              '</span>' +
              moment(a).format('DD MMM YYYY')
            );
          },
        },
        {
          targets: 7,
          orderable: !1,
          render: function (e, t, a, n) {
            a = a.balance;
            return 0 === a
              ? '<span class="badge bg-label-success" text-capitalized> Paid </span>'
              : '<span class="d-none">' +
                  a +
                  '</span><span class="text-heading">' +
                  a +
                  '</span>';
          },
        },
        { targets: 8, visible: !1 },
        {
          targets: -1,
          title: 'Actions',
          searchable: !1,
          orderable: !1,
          render: function (e, t, a, n) {
            return '<div class="d-flex align-items-center"><a href="javascript:;" data-bs-toggle="tooltip" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill" data-bs-placement="top" title="Delete"><i class="ti ti-trash mx-2 ti-md"></i></a><a href="app-invoice-preview.html" data-bs-toggle="tooltip" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill" data-bs-placement="top" title="Preview Invoice"><i class="ti ti-eye mx-2 ti-md"></i></a><div class="dropdown"><a href="javascript:;" class="btn dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill p-0" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Download</a><a href="app-invoice-edit.html" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Duplicate</a></div></div>';
          },
        },
      ],
      order: [[2, 'desc']],
      dom: '<"row mx-1"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-5 gap-md-4 mt-n6 mt-md-0"f<"invoice_status mb-6 mb-md-0">>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      language: {
        sLengthMenu: 'Show _MENU_',
        search: '',
        searchPlaceholder: 'Search Invoice',
        paginate: {
          next: '<i class="ti ti-chevron-right ti-sm"></i>',
          previous: '<i class="ti ti-chevron-left ti-sm"></i>',
        },
      },
      buttons: [
        {
          text: '<i class="ti ti-plus ti-xs me-md-2"></i><span class="d-md-inline-block d-none">Create Invoice</span>',
          className: 'btn btn-primary waves-effect waves-light',
          action: function (e, t, a, n) {
            window.location = 'app-invoice-add.html';
          },
        },
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (e) {
              return 'Details of ' + e.data().full_name;
            },
          }),
          type: 'column',
          renderer: function (e, t, a) {
            a = $.map(a, function (e, t) {
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
            return !!a && $('<table class="table"/><tbody />').append(a);
          },
        },
      },
      initComplete: function () {
        this.api()
          .columns(8)
          .every(function () {
            var t = this,
              a = $(
                '<select id="UserRole" class="form-select"><option value=""> Invoice Status </option></select>'
              )
                .appendTo('.invoice_status')
                .on('change', function () {
                  var e = $.fn.dataTable.util.escapeRegex($(this).val());
                  t.search(e ? '^' + e + '$' : '', !0, !1).draw();
                });
            t.data()
              .unique()
              .sort()
              .each(function (e, t) {
                a.append(
                  '<option value="' +
                    e +
                    '" class="text-capitalize">' +
                    e +
                    '</option>'
                );
              });
          });
      },
    })),
    t.on('draw.dt', function () {
      [].slice
        .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(function (e) {
          return new bootstrap.Tooltip(e, { boundary: document.body });
        });
    }),
    $('.invoice-list-table tbody').on('click', '.delete-record', function () {
      e.row($(this).parents('tr')).remove().draw();
    }),
    setTimeout(() => {
      $('.dataTables_filter .form-control').removeClass('form-control-sm'),
        $('.dataTables_length .form-select').removeClass('form-select-sm');
    }, 300);
});
