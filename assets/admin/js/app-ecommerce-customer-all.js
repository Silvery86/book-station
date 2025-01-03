'use strict';
$(function () {
  let e, s, a;
  a = (
    isDarkStyle
      ? ((e = config.colors_dark.borderColor),
        (s = config.colors_dark.bodyBg),
        config.colors_dark)
      : ((e = config.colors.borderColor),
        (s = config.colors.bodyBg),
        config.colors)
  ).headingColor;
  var t,
    n = $('.datatables-customers'),
    o = $('.select2');
  o.length &&
    (o = o)
      .wrap('<div class="position-relative"></div>')
      .select2({ placeholder: 'United States ', dropdownParent: o.parent() }),
    n.length &&
      ((t = n.DataTable({
        ajax: assetsPath + 'json/ecommerce-customer-all.json',
        columns: [
          { data: '' },
          { data: 'id' },
          { data: 'customer' },
          { data: 'customer_id' },
          { data: 'country' },
          { data: 'order' },
          { data: 'total_spent' },
        ],
        columnDefs: [
          {
            className: 'control',
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function (t, e, s, a) {
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
            responsivePriority: 1,
            render: function (t, e, s, a) {
              var n = s.customer,
                o = s.email,
                r = s.image;
              return (
                '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
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
                      'dark',
                      'primary',
                      'secondary',
                    ][Math.floor(6 * Math.random())] +
                    '">' +
                    (r = (
                      ((r = (n = s.customer).match(/\b\w/g) || []).shift() ||
                        '') + (r.pop() || '')
                    ).toUpperCase()) +
                    '</span>') +
                '</div></div><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html" class="text-heading" ><span class="fw-medium">' +
                n +
                '</span></a><small>' +
                o +
                '</small></div></div>'
              );
            },
          },
          {
            targets: 3,
            render: function (t, e, s, a) {
              return "<span class='text-heading'>#" + s.customer_id + '</span>';
            },
          },
          {
            targets: 4,
            render: function (t, e, s, a) {
              var n = s.country,
                s = s.country_code;
              return (
                '<div class="d-flex justify-content-start align-items-center customer-country"><div>' +
                (s
                  ? `<i class ="fis fi fi-${s} rounded-circle me-2 fs-4"></i>`
                  : '<i class ="fis fi fi-xx rounded-circle me-2 fs-4"></i>') +
                '</div><div><span>' +
                n +
                '</span></div></div>'
              );
            },
          },
          {
            targets: 5,
            render: function (t, e, s, a) {
              return '<span>' + s.order + '</span>';
            },
          },
          {
            targets: 6,
            render: function (t, e, s, a) {
              return (
                '<span class="fw-medium text-heading">' +
                s.total_spent +
                '</span>'
              );
            },
          },
        ],
        order: [[2, 'desc']],
        dom: '<"card-header d-flex flex-wrap flex-md-row flex-column align-items-start align-items-sm-center py-0"<"d-flex align-items-center me-5"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end flex-wrap flex-sm-nowrap mb-6 mb-sm-0"lB>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
          sLengthMenu: '_MENU_',
          search: '',
          searchPlaceholder: 'Search Order',
          paginate: {
            next: '<i class="ti ti-chevron-right ti-sm"></i>',
            previous: '<i class="ti ti-chevron-left ti-sm"></i>',
          },
        },
        buttons: [
          {
            extend: 'collection',
            className:
              'btn btn-label-secondary dropdown-toggle me-4 waves-effect waves-light',
            text: '<i class="ti ti-upload ti-xs me-2"></i>Export',
            buttons: [
              {
                extend: 'print',
                text: '<i class="ti ti-printer me-2" ></i>Print',
                className: 'dropdown-item',
                exportOptions: {
                  columns: [1, 2, 3, 4, 5, 6],
                  format: {
                    body: function (t, e, s) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (a += e.textContent)
                                : (a += e.innerText);
                          }),
                          a);
                    },
                  },
                },
                customize: function (t) {
                  $(t.document.body)
                    .css('color', a)
                    .css('border-color', e)
                    .css('background-color', s),
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
                    body: function (t, e, s) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (a += e.textContent)
                                : (a += e.innerText);
                          }),
                          a);
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
                    body: function (t, e, s) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (a += e.textContent)
                                : (a += e.innerText);
                          }),
                          a);
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
                    body: function (t, e, s) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (a += e.textContent)
                                : (a += e.innerText);
                          }),
                          a);
                    },
                  },
                },
              },
              {
                extend: 'copy',
                text: '<i class="ti ti-copy me-2" ></i>Copy',
                className: 'dropdown-item',
                exportOptions: {
                  columns: [1, 2, 3, 4, 5, 6],
                  format: {
                    body: function (t, e, s) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ''),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains('customer-name')
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                                ? (a += e.textContent)
                                : (a += e.innerText);
                          }),
                          a);
                    },
                  },
                },
              },
            ],
          },
          {
            text: '<i class="ti ti-plus me-0 me-sm-1 mb-1 ti-xs"></i><span class="d-none d-sm-inline-block">Add Customer</span>',
            className: 'add-new btn btn-primary waves-effect waves-light',
            attr: {
              'data-bs-toggle': 'offcanvas',
              'data-bs-target': '#offcanvasEcommerceCustomerAdd',
            },
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
            renderer: function (t, e, s) {
              s = $.map(s, function (t, e) {
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
              return !!s && $('<table class="table"/><tbody />').append(s);
            },
          },
        },
      })),
      $('.dataTables_length').addClass('ms-n2 me-2'),
      $('.dt-action-buttons').addClass('pt-0'),
      $('.dataTables_filter').addClass('ms-n3 mb-0 mb-md-6'),
      $('.dt-buttons').addClass('d-flex flex-wrap')),
    $('.datatables-customers tbody').on('click', '.delete-record', function () {
      t.row($(this).parents('tr')).remove().draw();
    }),
    setTimeout(() => {
      $('.dataTables_filter .form-control').removeClass('form-control-sm'),
        $('.dataTables_length .form-select').removeClass('form-select-sm');
    }, 300);
}),
  (function () {
    var t = document.querySelectorAll('.phone-mask'),
      e = document.getElementById('eCommerceCustomerAddForm');
    t &&
      t.forEach(function (t) {
        new Cleave(t, { phone: !0, phoneRegionCode: 'US' });
      }),
      FormValidation.formValidation(e, {
        fields: {
          customerName: {
            validators: { notEmpty: { message: 'Please enter fullname ' } },
          },
          customerEmail: {
            validators: {
              notEmpty: { message: 'Please enter your email' },
              emailAddress: {
                message: 'The value is not a valid email address',
              },
            },
          },
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: function (t, e) {
              return '.mb-6';
            },
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          autoFocus: new FormValidation.plugins.AutoFocus(),
        },
      });
  })();
