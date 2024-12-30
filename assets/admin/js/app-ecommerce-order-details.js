'use strict';
$(function () {
  var e = $('.datatables-order-details');
  e.length &&
    e.DataTable({
      ajax: assetsPath + 'json/ecommerce-order-details.json',
      columns: [
        { data: 'id' },
        { data: 'id' },
        { data: 'product_name' },
        { data: 'price' },
        { data: 'qty' },
        { data: '' },
      ],
      columnDefs: [
        {
          className: 'control',
          searchable: !1,
          orderable: !1,
          responsivePriority: 2,
          targets: 0,
          render: function (e, t, a, r) {
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
          responsivePriority: 1,
          searchable: !1,
          orderable: !1,
          render: function (e, t, a, r) {
            var s = a.product_name,
              n = a.product_info,
              o = a.image;
            return (
              '<div class="d-flex justify-content-start align-items-center text-nowrap"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
              (o
                ? '<img src="' +
                  assetsPath +
                  'img/products/' +
                  o +
                  '" alt="product-' +
                  s +
                  '" class="rounded-2">'
                : '<span class="avatar-initial rounded-2 bg-label-' +
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
                  (o = (
                    ((o = (s = a.product_name).match(/\b\w/g) || []).shift() ||
                      '') + (o.pop() || '')
                  ).toUpperCase()) +
                  '</span>') +
              '</div></div><div class="d-flex flex-column"><h6 class="text-heading mb-0">' +
              s +
              '</h6><small>' +
              n +
              '</small></div></div>'
            );
          },
        },
        {
          targets: 3,
          searchable: !1,
          orderable: !1,
          render: function (e, t, a, r) {
            return '<span>$' + a.price + '</span>';
          },
        },
        {
          targets: 4,
          searchable: !1,
          orderable: !1,
          render: function (e, t, a, r) {
            return '<span class="text-body">' + a.qty + '</span>';
          },
        },
        {
          targets: 5,
          searchable: !1,
          orderable: !1,
          render: function (e, t, a, r) {
            return '<span class="text-body">' + a.qty * a.price + '</span>';
          },
        },
      ],
      order: [2, ''],
      dom: 't',
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
    }),
    setTimeout(() => {
      $('.dataTables_filter .form-control').removeClass('form-control-sm'),
        $('.dataTables_length .form-select').removeClass('form-select-sm');
    }, 300);
}),
  (function () {
    var e = document.querySelector('.delete-order');
    e &&
      (e.onclick = function () {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert order!",
          icon: 'warning',
          showCancelButton: !0,
          confirmButtonText: 'Yes, Delete order!',
          customClass: {
            confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
            cancelButton: 'btn btn-label-secondary waves-effect waves-light',
          },
          buttonsStyling: !1,
        }).then(function (e) {
          e.value
            ? Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Order has been removed.',
                customClass: {
                  confirmButton: 'btn btn-success waves-effect waves-light',
                },
              })
            : e.dismiss === Swal.DismissReason.cancel &&
              Swal.fire({
                title: 'Cancelled',
                text: 'Cancelled Delete :)',
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-success waves-effect waves-light',
                },
              });
        });
      });
    e = new Date().getFullYear();
    document.getElementById('orderYear').innerHTML = e;
  })();
