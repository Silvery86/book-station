$(function () {
  'use strict';
  var e,
    t = $('.datatable-invoice');
  t.length &&
    ((e = t.DataTable({
      ajax: assetsPath + 'json/invoice-list.json',
      columns: [
        { data: '' },
        { data: 'invoice_id' },
        { data: 'invoice_status' },
        { data: 'total' },
        { data: 'issued_date' },
        { data: 'action' },
      ],
      columnDefs: [
        {
          className: 'control',
          responsivePriority: 2,
          targets: 0,
          render: function (e, t, a, i) {
            return '';
          },
        },
        {
          targets: 1,
          render: function (e, t, a, i) {
            return (
              '<a href="app-invoice-preview.html"><span>#' +
              a.invoice_id +
              '</span></a>'
            );
          },
        },
        {
          targets: 2,
          render: function (e, t, a, i) {
            var n = a.invoice_status,
              s = a.due_date;
            return (
              "<span class='d-inline-block' data-bs-toggle='tooltip' data-bs-html='true' title='<span>" +
              n +
              '<br> <span class="fw-medium">Balance:</span> ' +
              a.balance +
              '<br> <span class="fw-medium">Due Date:</span> ' +
              s +
              "</span>'>" +
              {
                Sent: '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-secondary w-px-30 h-px-30"><i class="ti ti-circle-check ti-xs"></i></span>',
                Draft:
                  '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-primary w-px-30 h-px-30"><i class="ti ti-device-floppy ti-xs"></i></span>',
                'Past Due':
                  '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-danger w-px-30 h-px-30"><i class="ti ti-info-circle ti-xs"></i></span>',
                'Partial Payment':
                  '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-success w-px-30 h-px-30"><i class="ti ti-circle-half-2 ti-xs"></i></span>',
                Paid: '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-warning w-px-30 h-px-30"><i class="ti ti-chart-pie ti-xs"></i></span>',
                Downloaded:
                  '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-info w-px-30 h-px-30"><i class="ti ti-arrow-down-circle ti-xs"></i></span>',
              }[n] +
              '</span>'
            );
          },
        },
        {
          targets: 3,
          render: function (e, t, a, i) {
            return '$' + a.total;
          },
        },
        {
          targets: -1,
          title: 'Actions',
          orderable: !1,
          render: function (e, t, a, i) {
            return '<div class="d-flex align-items-center"><a href="javascript:;" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record" data-bs-toggle="tooltip" title="Delete record"><i class="ti ti-trash ti-md"></i></a><a href="app-invoice-preview.html" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill" data-bs-toggle="tooltip" title="Preview"><i class="ti ti-eye ti-md"></i></a><div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><ul class="dropdown-menu dropdown-menu-end m-0"><li><a href="javascript:;" class="dropdown-item">Details</a></li><li><a href="javascript:;" class="dropdown-item">Archive</a></li></ul></div></div>';
          },
        },
      ],
      order: [[1, 'desc']],
      dom: '<"row mx-6"<"col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-sm-start mt-6 mt-sm-0"<"invoice-head-label">><"col-sm-6 col-12 d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row align-items-baseline gap-2"lB>>>t<"row mx-4"<"col-sm-12 col-xxl-6 text-center text-xxl-start pb-md-2 pb-xxl-0"i><"col-sm-12 col-xxl-6 d-md-flex justify-content-xxl-end justify-content-center"p>>',
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
          extend: 'collection',
          className:
            'btn btn-label-secondary dropdown-toggle float-sm-end mb-3 mb-sm-0 waves-effect waves-light',
          text: '<i class="ti ti-upload ti-xs me-2"></i>Export',
          buttons: [
            {
              extend: 'print',
              text: '<i class="ti ti-printer me-2" ></i>Print',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] },
            },
            {
              extend: 'csv',
              text: '<i class="ti ti-file-text me-2" ></i>Csv',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] },
            },
            {
              extend: 'excel',
              text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] },
            },
            {
              extend: 'pdf',
              text: '<i class="ti ti-file-description me-2"></i>Pdf',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] },
            },
            {
              extend: 'copy',
              text: '<i class="ti ti-copy me-2" ></i>Copy',
              className: 'dropdown-item',
              exportOptions: { columns: [1, 2, 3, 4] },
            },
          ],
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
    })),
    $('div.invoice-head-label').html(
      '<h5 class="card-title mb-0">Invoice List</h5>'
    )),
    t.on('draw.dt', function () {
      [].slice
        .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(function (e) {
          return new bootstrap.Tooltip(e, { boundary: document.body });
        });
    }),
    $('.datatable-invoice tbody').on('click', '.delete-record', function () {
      e.row($(this).parents('tr')).remove().draw();
    }),
    setTimeout(() => {
      $('.dataTables_filter .form-control').removeClass('form-control-sm'),
        $('.dataTables_length .form-select').removeClass('form-select-sm');
    }, 300);
});
