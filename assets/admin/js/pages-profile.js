'use strict';
$(function () {
  var e = $('.datatables-projects');
  e.length &&
    (e.DataTable({
      ajax: assetsPath + 'json/user-profile.json',
      columns: [
        { data: '' },
        { data: 'id' },
        { data: 'project_name' },
        { data: 'project_leader' },
        { data: '' },
        { data: 'status' },
        { data: '' },
      ],
      columnDefs: [
        {
          className: 'control',
          searchable: !1,
          orderable: !1,
          responsivePriority: 2,
          targets: 0,
          render: function (e, a, t, s) {
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
            selectAllRender: '<input type="checkbox" class="form-check-input">',
          },
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
        },
        {
          targets: 2,
          responsivePriority: 4,
          render: function (e, a, t, s) {
            var r = t.project_img,
              l = t.project_name,
              i = t.date;
            return (
              '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
              (r
                ? '<img src="' +
                  assetsPath +
                  'img/icons/brands/' +
                  r +
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
                  (r = (
                    ((r = (l = t.project_name).match(/\b\w/g) || []).shift() ||
                      '') + (r.pop() || '')
                  ).toUpperCase()) +
                  '</span>') +
              '</div></div><div class="d-flex flex-column"><span class="text-truncate fw-medium text-heading">' +
              l +
              '</span><small class="text-truncate">' +
              i +
              '</small></div></div>'
            );
          },
        },
        {
          targets: 3,
          render: function (e, a, t, s) {
            return '<span class="text-heading">' + t.project_leader + '</span>';
          },
        },
        {
          targets: 4,
          orderable: !1,
          searchable: !1,
          render: function (e, a, t, s) {
            for (
              var r = t.team, l = '', i = 0, n = 0;
              n < r.length &&
              ((l +=
                '<li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Karlos" class="avatar avatar-sm pull-up"><img class="rounded-circle" src="' +
                assetsPath +
                'img/avatars/' +
                r[n] +
                '"  alt="Avatar"></li>'),
              !(2 < ++i));
              n++
            );
            return (
              2 < i &&
                0 < (t = r.length - 3) &&
                (l +=
                  '<li class="avatar avatar-sm"><span class="avatar-initial rounded-circle pull-up text-heading" data-bs-toggle="tooltip" data-bs-placement="top" title="' +
                  t +
                  ' more">+' +
                  t +
                  '</span ></li>'),
              '<div class="d-flex align-items-center"><ul class="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">' +
                l +
                '</ul></div>'
            );
          },
        },
        {
          targets: -2,
          render: function (e, a, t, s) {
            t = t.status;
            return (
              '<div class="d-flex align-items-center"><div class="progress w-100 me-3" style="height: 6px;"><div class="progress-bar" style="width: ' +
              t +
              '" aria-valuenow="' +
              t +
              '" aria-valuemin="0" aria-valuemax="100"></div></div><span class="text-heading">' +
              t +
              '</span></div>'
            );
          },
        },
        {
          targets: -1,
          searchable: !1,
          title: 'Action',
          orderable: !1,
          render: function (e, a, t, s) {
            return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div>';
          },
        },
      ],
      order: [[2, 'desc']],
      dom: '<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7, 10, 25, 50, 75, 100],
      language: {
        search: '',
        searchPlaceholder: 'Search Project',
        paginate: {
          next: '<i class="ti ti-chevron-right ti-sm"></i>',
          previous: '<i class="ti ti-chevron-left ti-sm"></i>',
        },
      },
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (e) {
              return 'Details of "' + e.data().project_name + '" Project';
            },
          }),
          type: 'column',
          renderer: function (e, a, t) {
            t = $.map(t, function (e, a) {
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
            return !!t && $('<table class="table"/><tbody />').append(t);
          },
        },
      },
    }),
    $('div.head-label').html('<h5 class="card-title mb-0">Project List</h5>')),
    setTimeout(() => {
      $('.dataTables_filter .form-control').removeClass('form-control-sm'),
        $('.dataTables_length .form-select').removeClass('form-select-sm');
    }, 300);
});
