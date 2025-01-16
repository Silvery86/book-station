'use strict';
$(function () {
  var t,
    e = $('.datatables-users'),
    s = {
      1: { title: 'Pending', class: 'bg-label-warning' },
      2: { title: 'Active', class: 'bg-label-success' },
      3: { title: 'Inactive', class: 'bg-label-secondary' },
    },
    o = 'app-user-view-account.html';
  e.length &&
    (t = e.DataTable({
      ajax: assetsPath + 'json/user-list.json',
      columns: [
        { data: 'id' },
        { data: 'id' },
        { data: 'full_name' },
        { data: 'role' },
        { data: 'current_plan' },
        { data: 'billing' },
        { data: 'status' },
        { data: '' },
      ],
      columnDefs: [
        {
          className: 'control',
          orderable: !1,
          searchable: !1,
          responsivePriority: 2,
          targets: 0,
          render: function (t, e, a, n) {
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
          responsivePriority: 4,
          render: function (t, e, a, n) {
            var s = a.full_name,
              i = a.email,
              r = a.avatar;
            return (
              '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-4">' +
              (r
                ? '<img src="' +
                  assetsPath +
                  'img/avatars/' +
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
                    ((r = (s = a.full_name).match(/\b\w/g) || []).shift() ||
                      '') + (r.pop() || '')
                  ).toUpperCase()) +
                  '</span>') +
              '</div></div><div class="d-flex flex-column"><a href="' +
              o +
              '" class="text-heading text-truncate"><span class="fw-medium">' +
              s +
              '</span></a><small>@' +
              i +
              '</small></div></div>'
            );
          },
        },
        {
          targets: 3,
          render: function (t, e, a, n) {
            a = a.role;
            return (
              "<span class='text-truncate d-flex align-items-center text-heading'>" +
              {
                Subscriber:
                  '<i class="ti ti-crown ti-md text-primary me-2"></i>',
                Author: '<i class="ti ti-edit ti-md text-warning me-2"></i>',
                Maintainer:
                  '<i class="ti ti-user ti-md text-success me-2"></i>',
                Editor: '<i class="ti ti-chart-pie ti-md text-info me-2"></i>',
                Admin:
                  '<i class="ti ti-device-desktop ti-md text-danger me-2"></i>',
              }[a] +
              a +
              '</span>'
            );
          },
        },
        {
          targets: 4,
          render: function (t, e, a, n) {
            return '<span class="text-heading">' + a.current_plan + '</span>';
          },
        },
        {
          targets: 6,
          render: function (t, e, a, n) {
            a = a.status;
            return (
              '<span class="badge ' +
              s[a].class +
              '" text-capitalized>' +
              s[a].title +
              '</span>'
            );
          },
        },
        {
          targets: -1,
          title: 'Actions',
          searchable: !1,
          orderable: !1,
          render: function (t, e, a, n) {
            return (
              '<div class="d-flex align-items-center"><a href="javascript:;" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"><i class="ti ti-trash ti-md"></i></a><a href="' +
              o +
              '" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"><i class="ti ti-eye ti-md"></i></a><a href="javascript:;" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;"" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div>'
            );
          },
        },
      ],
      order: [[2, 'desc']],
      dom: '<"row"<"col-md-2"<l>><"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-6 mb-md-0"fB>>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      language: {
        sLengthMenu: 'Show _MENU_',
        search: '',
        searchPlaceholder: 'Search User',
        paginate: {
          next: '<i class="ti ti-chevron-right ti-sm"></i>',
          previous: '<i class="ti ti-chevron-left ti-sm"></i>',
        },
      },
      buttons: [
        {
          extend: 'collection',
          className:
            'btn btn-label-secondary dropdown-toggle me-4 waves-effect waves-light border-left-0 border-right-0 rounded',
          text: '<i class="ti ti-upload ti-xs me-sm-1 align-text-bottom"></i> <span class="d-none d-sm-inline-block">Export</span>',
          buttons: [
            {
              extend: 'print',
              text: '<i class="ti ti-printer me-1" ></i>Print',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                format: {
                  body: function (t, e, a) {
                    var n;
                    return t.length <= 0
                      ? t
                      : ((t = $.parseHTML(t)),
                        (n = ''),
                        $.each(t, function (t, e) {
                          void 0 !== e.classList &&
                          e.classList.contains('user-name')
                            ? (n += e.lastChild.firstChild.textContent)
                            : void 0 === e.innerText
                              ? (n += e.textContent)
                              : (n += e.innerText);
                        }),
                        n);
                  },
                },
              },
              customize: function (t) {
                $(t.document.body)
                  .css('color', config.colors.headingColor)
                  .css('border-color', config.colors.borderColor)
                  .css('background-color', config.colors.bodyBg),
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
              text: '<i class="ti ti-file-text me-1" ></i>Csv',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                format: {
                  body: function (t, e, a) {
                    var n;
                    return t.length <= 0
                      ? t
                      : ((t = $.parseHTML(t)),
                        (n = ''),
                        $.each(t, function (t, e) {
                          void 0 !== e.classList &&
                          e.classList.contains('user-name')
                            ? (n += e.lastChild.firstChild.textContent)
                            : void 0 === e.innerText
                              ? (n += e.textContent)
                              : (n += e.innerText);
                        }),
                        n);
                  },
                },
              },
            },
            {
              extend: 'excel',
              text: '<i class="ti ti-file-spreadsheet me-1"></i>Excel',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                format: {
                  body: function (t, e, a) {
                    var n;
                    return t.length <= 0
                      ? t
                      : ((t = $.parseHTML(t)),
                        (n = ''),
                        $.each(t, function (t, e) {
                          void 0 !== e.classList &&
                          e.classList.contains('user-name')
                            ? (n += e.lastChild.firstChild.textContent)
                            : void 0 === e.innerText
                              ? (n += e.textContent)
                              : (n += e.innerText);
                        }),
                        n);
                  },
                },
              },
            },
            {
              extend: 'pdf',
              text: '<i class="ti ti-file-description me-1"></i>Pdf',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                format: {
                  body: function (t, e, a) {
                    var n;
                    return t.length <= 0
                      ? t
                      : ((t = $.parseHTML(t)),
                        (n = ''),
                        $.each(t, function (t, e) {
                          void 0 !== e.classList &&
                          e.classList.contains('user-name')
                            ? (n += e.lastChild.firstChild.textContent)
                            : void 0 === e.innerText
                              ? (n += e.textContent)
                              : (n += e.innerText);
                        }),
                        n);
                  },
                },
              },
            },
            {
              extend: 'copy',
              text: '<i class="ti ti-copy me-1" ></i>Copy',
              className: 'dropdown-item',
              exportOptions: {
                columns: [3, 4, 5, 6, 7],
                format: {
                  body: function (t, e, a) {
                    var n;
                    return t.length <= 0
                      ? t
                      : ((t = $.parseHTML(t)),
                        (n = ''),
                        $.each(t, function (t, e) {
                          void 0 !== e.classList &&
                          e.classList.contains('user-name')
                            ? (n += e.lastChild.firstChild.textContent)
                            : void 0 === e.innerText
                              ? (n += e.textContent)
                              : (n += e.innerText);
                        }),
                        n);
                  },
                },
              },
            },
          ],
        },
        {
          text: '<i class="ti ti-plus ti-xs me-md-2"></i><span class="d-md-inline-block d-none">Add new role</span>',
          className:
            'btn btn-primary waves-effect waves-light rounded border-left-0 border-right-0',
          attr: {
            'data-bs-toggle': 'modal',
            'data-bs-target': '#addRoleModal',
          },
        },
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (t) {
              return 'Details of ' + t.data().full_name;
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
          .columns(3)
          .every(function () {
            var e = this,
              a = $(
                '<select id="UserRole" class="form-select text-capitalize"><option value=""> Select Role </option></select>'
              )
                .appendTo('.user_role')
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
    $('.datatables-users tbody').on('click', '.delete-record', function () {
      t.row($(this).parents('tr')).remove().draw();
    }),
    setTimeout(() => {
      $('.dataTables_filter .form-control').removeClass('form-control-sm'),
        $('.dataTables_length .form-select').removeClass('form-select-sm');
    }, 300),
    $('.dataTables_filter').addClass('ms-n4 me-4 mt-0 mt-md-6');
}),
  (function () {
    var t = document.querySelectorAll('.role-edit-modal'),
      e = document.querySelector('.add-new-role'),
      a = document.querySelector('.role-title');
    (e.onclick = function () {
      a.innerHTML = 'Add New Role';
    }),
      t &&
        t.forEach(function (t) {
          t.onclick = function () {
            a.innerHTML = 'Edit Role';
          };
        });
  })();